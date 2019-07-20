import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PetService } from '../../services/pet.service';
import { Pet } from '../../models';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit, OnDestroy {
  pets: Pet[] = [];
  sub: Subscription;
  selectedPet: Pet;

  constructor(
    private petService: PetService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    console.log(this.petService);
    this.sub = this.petService.getPets()
      .subscribe(pets => {
        this.pets = pets;
      });
  }

  onSelect(pet: Pet) {
    console.log('Selecting Pet', pet);
    this.selectedPet = this.selectedPet === pet ? null : pet;
  }

  onCreate(pet: Pet) {
    console.log('Creating Pet', pet);
    this.petService.createPet(pet)
      .subscribe(createdPet => {
        console.log(createdPet);
        this.pets.push(createdPet);
    });
  }

  onEdit(pet: Pet) {
    this.petService.editPet(pet).subscribe(updatePet => {
      console.log('updated', updatePet);
    });
    }

  ngOnDestroy(): void {
    // tslint:disable-next-line: no-unused-expression
      this.sub.unsubscribe;
      }

}
