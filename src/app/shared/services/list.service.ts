import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiURL = 'https://rickandmortyapi.com/api/character';
  //apiURL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200';

  constructor(private httpClient: HttpClient) { }

  getList():Observable<any>{
    return this.httpClient.get<any>(this.apiURL);
  }
}
