import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople():Observable<any>{
    let peopleArray = [
      {
        firstName: 'Livia',
        lastName: 'Morais',
        age: 26
      },
      {
        firstName: 'Marcia',
        lastName: 'Silva',
        age: 29
      },
      {
        firstName: 'Paulo',
        lastName: 'Ribeiro',
        age: 32
      },
      {
        firstName: 'Manuella',
        lastName: 'Gonçalves',
        age: 20
      },
    ]
    return of(peopleArray)
  }
}
