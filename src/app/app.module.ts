import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CarsComponent} from "./components/cars/cars.component";
import {HttpClientModule} from "@angular/common/http";
import { CarComponent } from './components/cars/car/car.component';
import {RouterModule, Routes} from "@angular/router";
import { TemplateFormComponent } from './components/template-form/template-form.component';
import {FormsModule} from "@angular/forms";

let routes: Routes = [
  {path: '', component: TemplateFormComponent},
  {path: 'cars', component: CarsComponent}
  ]
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    TemplateFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
