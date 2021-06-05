import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {UserService} from "../../services/user.service";
import {UsersComponent} from "../../components/users/users.component";
import {UserComponent} from "../../components/users/user/user.component";
import {PostsComponent} from "../../components/posts/posts.component";
import {PostComponent} from "../../components/posts/post/post.component";
import {PostService} from "../../services/post.service";
import {CommentService} from "../../services/comment.service";
import {AppComponent} from "../../app.component";
import {HomeComponent} from "../../components/home/home.component";
import {CommentsComponent} from "../../components/comments/comments.component";
import {CommentComponent} from "../../components/comments/comment/comment.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [CommentService],
})
export class UsersModule { }
