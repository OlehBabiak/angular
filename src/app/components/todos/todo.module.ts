import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodosComponent} from "./todos.component";
import {TodoComponent} from "./todo/todo.component";
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "../../services/todo.service";


@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    HttpClientModule
  ],
  providers:[
    TodoService
  ]
})
export class TodoModule { }
