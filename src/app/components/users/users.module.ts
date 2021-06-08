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
import {PostService} from "../../services/post.service";
import {AlbumService} from "../../services/album.service";
import {PhotoService} from "../../services/photo.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
  ],
  providers: [
    CommentService,
    AlbumService,
    PhotoService
  ],
})
export class UsersModule { }
