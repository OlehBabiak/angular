import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { UserComponent } from './components/users/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import {DeactivatorService} from "./services/deactivator.service";
import { CommentsComponent } from './components/comments/comments.component';
import {ResolveService} from "./services/resolve.service";
import {CommentComponent} from "./components/comments/comment/comment.component";
import { CommentDetailsComponent } from './components/comments/comment-details/comment-details.component';


let routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent},  //this component renders in parent component

    ]
  },
  {path: 'posts', component: PostsComponent, canDeactivate: [DeactivatorService]},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [DeactivatorService]},//this component have parent component app
  {path: 'comments', component: CommentsComponent, resolve: {data: ResolveService}}, //при переході на урлу, можем запустити якийсь механізм (запит данних)
  //prefetch
  {path: 'comments/:id', component: CommentDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent,
    CommentsComponent,
    CommentComponent,
    CommentDetailsComponent
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
