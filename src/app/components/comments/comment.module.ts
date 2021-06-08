import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import {CommentsComponent} from "./comments.component";
import {CommentComponent} from "./comment/comment.component";
import {HttpClientModule} from "@angular/common/http";
import {CommentService} from "../../services/comment.service";


@NgModule({
  declarations: [
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    HttpClientModule
  ],
  providers: [
    CommentService
  ]
})
export class CommentModule { }
