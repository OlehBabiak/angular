import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
car = {
  model: 'ZAZ',
  price: 100,
  year: 1981}
  constructor() { }

  ngOnInit(): void {
  }

  submit(myForm: NgForm) {
    console.log(myForm);
  }
}
