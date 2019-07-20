import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pet } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private readonly http: HttpClient) { }
  private readonly base = 'http://localhost:8000/pets';

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.base}`);
  }

  getPetByID(id: string): Observable<Pet> {
    return this.http.get<Pet>(`${this.base}/${id}`);
  }
  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.base}/`, pet);
  }
  editPet(data): Observable<Pet> {
// tslint:disable-next-line: variable-name
    const pet_id = data._id;
    console.log('Check out the service: ', data);
    return this.http.put<Pet>(`${this.base}/${pet_id}`, data);
  }

  editPetLikes(data): Observable<Pet> {
    // tslint:disable-next-line: variable-name
        const pet_id = data._id;
        console.log('Check out the service: ', data);
        return this.http.put<Pet>(`${this.base}/${pet_id}`, data);
  }

  deletePet(id: string): Observable<Pet> {
    return this.http.delete<Pet>(`${this.base}/${id}`);
  }
}
