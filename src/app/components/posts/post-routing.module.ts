import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts.component";

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'post/:id' , loadChildren: () => import('../comments/comment.module')
  .then(m => m.CommentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
