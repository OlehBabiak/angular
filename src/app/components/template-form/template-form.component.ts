import { Component, OnInit } from '@angular/core';
import {ICar} from "../../interfaces/car";

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
car: ICar
  constructor() { }

  ngOnInit(): void {
  }

  submit(myForm: HTMLFormElement) {
    
  }
}
