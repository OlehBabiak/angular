import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ICar} from "../../interfaces/car";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";



@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  private url = 'http://92.253.239.109/api/v1/cars'
car = {
  model: 'ZAZ',
  price: 100,
  year: 1981}
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  submit(myForm: NgForm) {
    let myCarObject = {
      model:this.car.model,
      price: this.car.price,
      year: this.car.year
    }
    this.httpClient.post<ICar>(this.url, myCarObject).subscribe(value => {
      console.log(value);
    },(err: HttpErrorResponse) => {
      console.log(err);
    })
  }
}
