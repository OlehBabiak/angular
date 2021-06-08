import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAlbum} from "../interfaces/album.interface";


@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  private url = 'https://jsonplaceholder.typicode.com/albums';
  constructor(private httpClient: HttpClient) { }
  getAlbum(id: string): Observable<IAlbum[]>{
    return this.httpClient.get<IAlbum[]>(`${this.url}?userId=${id}`)
  }
}
