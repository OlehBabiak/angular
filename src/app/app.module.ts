import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotosComponent } from './components/albums/photos/photos.component';
import { TodosComponent } from './components/todos/todos.component';



let routes: Routes = [
  {path: 'users', loadChildren: () => import('./components/users/users.module').then(m => m.UsersModule)}, // завантажуєм дочірній модуль
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserDetailComponent,
    AlbumsComponent,
    PhotosComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
