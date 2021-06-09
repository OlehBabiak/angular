import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './components/users/user/user.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { PostDetailComponent } from './components/posts/post-details/post-detail.component';
import { UserDetailComponent } from './components/users/user-details/user-detail.component';

let routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', loadChildren: () => import('./components/users/user-module/user.module').then(m => m.UserModule)},
  {path: 'posts', loadChildren: () => import('./components/posts/post-module/post.module').then(m => m.PostModule)}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
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
