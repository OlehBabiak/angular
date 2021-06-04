import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import {PostDetailsComponent} from "./components/posts/post-details/post-details.component";


let routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/users/users.module').then(m => m.UsersModule)}, // завантажуєм дочірній модуль
  {path: 'posts', loadChildren: () => import('./modules/posts/posts.module').then(m => m.PostsModule)},
  // {path: 'comments', loadChildren: () => import('./modules/comments/comments.module').then(m => m.CommentsModule)},
  {path: 'home', component: HomeComponent},

  // {path: 'comments/:id', component: CommentComponent},
  // {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},//this component have parent component app
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
