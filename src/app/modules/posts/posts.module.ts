import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {PostsComponent} from "../../components/posts/posts.component";
import {PostComponent} from "../../components/posts/post/post.component";
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "../../services/post.service";
import {Posts2Component} from "../../components/posts2/posts2.component";
import {Post2Component} from "../../components/posts2/post2/post2.component";


@NgModule({
  declarations: [
    Posts2Component,
    Post2Component
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule
  ],
  providers: [PostService]
})
export class PostsModule { }
