import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService {
 private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { //dependency injection
    }
  getUsers(): Observable<User[]>{  // Observable наглядає за масивом який приходить
  return   this.httpClient.get<User[]>(this.url)
  }
}

//в цьому сервісі можуть бути зстворені інші методи які працюють з юзерами
