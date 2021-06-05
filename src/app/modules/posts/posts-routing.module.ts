import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Posts2Component} from "../../components/posts2/posts2.component";
import {CommentsComponent} from "../../components/comments/comments.component";

const routes: Routes = [
  {path: '', component: Posts2Component,
    children: [
      {path: ':id', component: CommentsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
