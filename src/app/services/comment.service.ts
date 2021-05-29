import {Component, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../models/comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient: HttpClient) { }
  getCommentsByPostId(id:number): Observable<Comment[]>{
    return   this.httpClient.get<Comment[]>(`${this.url}?postId=${id}`)
  }
}
