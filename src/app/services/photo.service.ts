import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PhotoInterface} from "../interfaces/photo.interface";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
private url = 'https://jsonplaceholder.typicode.com/photos'
  constructor(private httpClient: HttpClient) { }
  getPhoto(id: string): Observable<PhotoInterface[]>{
  return this.httpClient.get<PhotoInterface[]>(`${this.url}?commentId=${id}`)
  }
}
