import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';



let routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)}, // завантажуєм дочірній модуль
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
