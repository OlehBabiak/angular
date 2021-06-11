import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../../services/car.service";
import {ICar} from "../../interfaces/car";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  private url = 'http://92.253.239.109/api/v1/cars'
  cars: ICar[]
  select = new FormControl();
  modelControl= new FormControl('',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12),
      this.customValidator
    ])
  priceControl= new FormControl()
  yearControl= new FormControl()


  myForm = new FormGroup({
    model: this.modelControl,
    price: this.priceControl,
    year: this.yearControl,
    select: this.select
  })

  constructor(private carService: CarService, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => {
      this.cars = value
    })
  }

  save() {
    let myCarObject = {
      model:this.modelControl.value,
      price: this.priceControl.value,
      year: this.yearControl.value
    }
    this.httpClient.post<ICar>(this.url, myCarObject).subscribe(value => {
      console.log(value);
    },(err: HttpErrorResponse) => {
      console.log(err);
    })
  }


  customValidator(input: AbstractControl){
if(input.value.includes('fuck')){
  console.log(input)
  return {badWord: true}
}else {return null};
  }
}
