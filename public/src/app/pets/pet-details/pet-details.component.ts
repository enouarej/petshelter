import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../models';

@Component({
  selector: 'app-pet-details',
  templateUrl: './pet-details.component.html',
  styleUrls: ['./pet-details.component.css']
})
export class PetDetailsComponent implements OnInit {
  clicked = false;
  counter: 0;

  @Input()
  pet: Pet;

  constructor(
    private petService: PetService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('pet_id')),
      switchMap(id => this.petService.getPetByID(id))
    )
    .subscribe(pet => (this.pet = pet));
  }

  onDelete(id: string) {
    if (confirm('Adopting a pet comes with great responsibility! Are you sure you want to do it?') === true) {
      this.petService
        .getPetByID(id)
        .subscribe((response: any) => {
          this.petService.deletePet(id).subscribe((pet: Pet) => {
              this.router.navigateByUrl('/');
            });
        });
    }
  }

  onLike(id: string) {
    this.pet.likes = this.pet.likes + 1;
    this.petService.editPetLikes(this.pet)
    .subscribe(pet => {
      pet = this.pet;
      console.log('Update pet likes to', pet);
    });
  }
}
