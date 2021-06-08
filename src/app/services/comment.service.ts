import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentInterface} from "../interfaces/comment.interface";

@Injectable({
  providedIn: 'root'
})

export class CommentService {
private url = 'https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient: HttpClient) {}
    getComment(id: string): Observable<CommentInterface[]>{  // Observable наглядає за масивом який приходить
      return   this.httpClient.get<CommentInterface[]>(`${this.url}?postId=${id}`)
    }
  }

