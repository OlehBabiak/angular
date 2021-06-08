import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import {AlbumsComponent} from "./albums.component";
import {AlbumComponent} from "./album/album.component";
import {HttpClientModule} from "@angular/common/http";
import {AlbumService} from "../../services/album.service";


@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumComponent,
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    HttpClientModule
  ],
  providers: [
    AlbumService
  ]
})
export class AlbumModule { }
