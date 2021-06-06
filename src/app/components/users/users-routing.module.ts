import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {PostsComponent} from "../posts/posts.component";
import {CommentsComponent} from "../comments/comments.component";
import {UserDetailComponent} from "../user-detail/user-detail.component";
import {AlbumsComponent} from "../albums/albums.component";
import {PhotosComponent} from "../albums/photos/photos.component";
import {TodosComponent} from "../todos/todos.component";


const routes: Routes = [
  {path: '', component: UsersComponent},
  {path: ':id', component: UserDetailComponent},
  {path: ':id/posts', component: PostsComponent},
  {path: ':id/posts/post/:id', component: CommentsComponent},
  {path: ':id/albums', component: AlbumsComponent},
  {path: ':id/albums/album/:id', component: PhotosComponent},
  {path: ':id/todos', component: TodosComponent},

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
