import { Component, OnInit } from '@angular/core';
import {TodoInterface} from "../../interfaces/todo.interface";
import {TodoService} from "../../services/todo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
todos: TodoInterface[]
  constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(({id})=> {
    this.todoService.getTodo(id).subscribe(value => {
      this.todos = value
    })
  })
  }

}
