import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { PetListComponent } from './pets/pet-list/pet-list.component';
import { PetNewComponent } from './pets/pet-new/pet-new.component';
import { PetEditComponent } from './pets/pet-edit/pet-edit.component';
import { PetDetailsComponent } from './pets/pet-details/pet-details.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PetListComponent,
    PetNewComponent,
    PetEditComponent,
    PetDetailsComponent,
    HomeComponent,
    PetsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
