import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../models';

@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet = new Pet();
  err = '';

  @Output()
  createNew = new EventEmitter<Pet>();

  constructor(
    private readonly petService: PetService,
    private readonly router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    this.pet.name = form.value.name;
    if (this.pet.name) {
      this.err = 'Pet name already exists!';
    }
    this.pet.type = form.value.type;
    this.pet.description = form.value.description;
    this.pet.skill_one = form.value.skill_one;
    this.pet.skill_two = form.value.skill_two;
    this.pet.skill_three = form.value.skill_three;
    event.preventDefault();

    this.petService.createPet(this.pet)
    .subscribe((pet: Pet) => {
      console.log(pet);
      console.log('Appt ID', pet._id);
      this.createNew.emit(this.pet);
      this.router.navigateByUrl('/');
      });
  }
}
