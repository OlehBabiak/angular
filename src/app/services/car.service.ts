import { Injectable } from '@angular/core';
import {ICar} from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: ICar
private url = 'http://192.168.88.253/api/v1/cars'
  constructor(private httpClient: HttpClient) {
    getCars(): Observable<ICar[]>{
      return this.httpClient.get<IUser[]>(urls.users)
    }
  }
}
