import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map , switchMap } from 'rxjs/operators';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../models';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  @Output()
  updatePet = new EventEmitter<Pet>();

  @Input()
  pet: Pet;

  constructor(
    private readonly petService: PetService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    console.log('Here');
    this.route.paramMap
      .pipe(
        map(params => params.get('pet_id')),
        switchMap(id => this.petService.getPetByID(id))
      )
      .subscribe(pet => (this.pet = pet));
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('FORM HERE', form.value);
    this.pet.name = form.value.name;
    this.pet.type = form.value.type;
    this.pet.description = form.value.description;
    this.pet.skill_one = form.value.skill_one;
    this.pet.skill_two = form.value.skill_two;
    this.pet.skill_three = form.value.skill_three;
    console.log('Submitting pet for edit', this.pet);
    this.petService.editPet(this.pet)
      .subscribe(pet => {
        this.pet = pet;
        console.log('Update pet', pet);
        this.router.navigateByUrl('/');
      });
  }

}
