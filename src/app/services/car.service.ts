import { Injectable } from '@angular/core';
import {ICar} from "../interfaces/car";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://92.253.239.109/api/v1/cars'
  constructor(private httpClient: HttpClient) {}
    getCars(): Observable<ICar[]>{
      return this.httpClient.get<ICar[]>(this.url)
    }
}
