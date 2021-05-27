import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(private httpClient: HttpClient) {}
  getTodosByUserID(id:number): Observable<Todo[]>{
   return this.httpClient.get<Todo[]>(`${this.url}?userId=${id}`)
  }
}
