import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoInterface} from "../interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private url = 'https://jsonplaceholder.typicode.com/todos'
  constructor(private httpClient: HttpClient) { }
  getTodo(id: string): Observable<TodoInterface[]>{
  return this.httpClient.get<TodoInterface[]>(`${this.url}?userId=${id}`)
  }
}
