import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "../users.component";
import {UserDetailComponent} from "../user-details/user-detail.component";

const routes: Routes = [{
  path: '', component: UsersComponent, children: [
    {path: ':id', component: UserDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
