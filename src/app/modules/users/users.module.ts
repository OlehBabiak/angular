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


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, PostService],
})
export class UsersModule { }
