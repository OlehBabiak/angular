import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "../interfaces/user.interface";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UserResolveService implements Resolve<UserInterface[]>{

  constructor(private httpClient: HttpClient, ) { //dependency injection
    }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserInterface[]> | Promise<UserInterface[]> | UserInterface[] {
    return this.httpClient.get<UserInterface[]>(urls.users);
  }

}

//в цьому сервісі можуть бути зстворені інші методи які працюють з юзерами
