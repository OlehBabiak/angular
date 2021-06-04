import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../../components/users/users.component";
import {UserDetailsComponent} from "../../components/users/user-details/user-details.component";
import {UserComponent} from "../../components/users/user/user.component";
import {PostsComponent} from "../../components/posts/posts.component";


const routes: Routes = [
  {path: '', component: UsersComponent,
  children: [
    {path: ':id', component: PostsComponent},  //this component renders in parent component
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
