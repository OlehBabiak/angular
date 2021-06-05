import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/Post";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class Post2Service {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPosts(): Observable<Post[]>{  // Observable наглядає за масивом який приходить
    return   this.httpClient.get<Post[]>(this.url)
  }
}
