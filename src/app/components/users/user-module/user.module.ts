import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserService} from "../../../services/user.service";
import {UsersComponent} from "../users.component";
import {UserComponent} from "../user/user.component";
import {HttpClientModule} from "@angular/common/http";
import {UserDetailComponent} from "../user-details/user-detail.component";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
