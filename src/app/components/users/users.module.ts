import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UsersComponent} from "./users.component";
import {UserComponent} from "./user/user.component";
import {PostsComponent} from "../posts/posts.component";
import {PostComponent} from "../posts/post/post.component";
import {CommentService} from "../../services/comment.service";
import {CommentsComponent} from "../comments/comments.component";
import {CommentComponent} from "../comments/comment/comment.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [CommentService],
})
export class UsersModule { }
