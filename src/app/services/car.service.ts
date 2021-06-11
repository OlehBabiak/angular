import { Injectable } from '@angular/core';
import {ICar} from "../interfaces/car";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://192.168.88.253/api/v1/cars'
  constructor(private httpClient: HttpClient) {}
    getCars(): Observable<ICar[]>{
      return this.httpClient.get<ICar[]>(this.url)
    }
}
