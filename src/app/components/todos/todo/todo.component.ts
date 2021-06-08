import {Component, Input, OnInit} from '@angular/core';
import {TodoInterface} from "../../../interfaces/todo.interface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input()
todo: TodoInterface
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  onBackToUsers(): void{
    this.router.navigate(['/users'])
  }
}
