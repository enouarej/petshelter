import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetNewComponent } from './pets/pet-new/pet-new.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetsComponent } from './pets/pets.component';

const routes: Routes = [
   {
  path: '',
  redirectTo: 'pets',
  pathMatch: 'full'
},
{
  path: 'pets',
  component: PetsComponent,
  children: [
      { path: '', component: PetListComponent},
      {
        path: 'new',
        component: PetNewComponent,
      },
      {
        path: 'edit/:pet_id',
        component: PetEditComponent,
      },
      {
        path: 'details/:pet_id',
        component: PetDetailsComponent,
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


// I've been trying to work with this but for some reason it's giving me a bug, so I had to go with other paths
// because of time :((


