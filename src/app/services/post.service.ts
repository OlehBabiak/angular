import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostInterface} from "../interfaces/post.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  getPost(id: string): Observable<PostInterface[]>{  // Observable наглядає за масивом який приходить
    return   this.httpClient.get<PostInterface[]>(`${this.url}?userId=${id}`)
  }
}
////
