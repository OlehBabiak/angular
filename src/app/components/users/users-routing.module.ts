import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {PostsComponent} from "../posts/posts.component";
import {CommentsComponent} from "../comments/comments.component";
// import {UserDetailComponent} from "../user-detail/user-detail.component";
import {AlbumsComponent} from "../albums/albums.component";
import {PhotosComponent} from "../albums/photos/photos.component";
import {TodosComponent} from "../todos/todos.component";
import {UserResolveService} from "../../services/user-resolve.service";


const routes: Routes = [
  {path: '', component: UsersComponent, resolve: {data: UserResolveService}},
  {path: ':id/posts', loadChildren: () => import('../posts/post.module').then(m=>m.PostModule)},//
  {path: ':id/albums', loadChildren: ()=> import('../albums/album.module')
      .then(m=> m.AlbumModule)},//
  {path: ':id/todos', loadChildren: () => import('../todos/todo.module').then(m => m.TodoModule)},//

]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
