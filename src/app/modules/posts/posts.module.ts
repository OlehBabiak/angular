import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "../../services/post.service";
import {Posts2Component} from "../../components/posts2/posts2.component";
import {Post2Component} from "../../components/posts2/post2/post2.component";
import {CommentsComponent} from "../../components/comments/comments.component";
import {CommentComponent} from "../../components/comments/comment/comment.component";


@NgModule({
  declarations: [
    Posts2Component,
    Post2Component,
    CommentsComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostsModule { }
