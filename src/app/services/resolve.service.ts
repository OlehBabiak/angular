import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Comment} from "../models/comment";


@Injectable({
  providedIn: 'root'
})
export class ResolveService implements Resolve<Observable <Comment[]>>{
  private url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Comment[]> | Promise<any> | any {
  return this.httpClient.get<Comment[]>(this.url)
    }
  getComment(id: string): Observable<Comment>{  // Observable наглядає за масивом який приходить
    return   this.httpClient.get<Comment>(this.url + '/' + id)
  }
  }





