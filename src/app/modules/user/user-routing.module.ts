import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./components/users/users.component";

const routes: Routes = [
  {path: '', component: UsersComponent} // тут шлях не прописуєм бо вже прописали в апп модулі
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
