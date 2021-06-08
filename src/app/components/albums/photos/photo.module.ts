import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoRoutingModule } from './photo-routing.module';
import {PhotosComponent} from "./photos.component";
import {PhotoComponent} from "./photo/photo.component";
import {HttpClientModule} from "@angular/common/http";
import {PhotoService} from "../../../services/photo.service";


@NgModule({
  declarations: [
    PhotosComponent,
    PhotoComponent,
  ],
  imports: [
    CommonModule,
    PhotoRoutingModule,
    HttpClientModule
  ],
  providers: [
    PhotoService
  ]
})
export class PhotoModule { }
