import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IUser} from "../interfaces";
import {urls} from "../constnans";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(urls.users)
  }
}
