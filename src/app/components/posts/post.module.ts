import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import {PostsComponent} from "./posts.component";
import {PostComponent} from "./post/post.component";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ]

})
export class PostModule { }
