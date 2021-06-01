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


let routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent,
    children: [
      {path: ':id', component: UserDetailsComponent},

    ]
  },
  {path: 'posts', component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent},

    ]
  },
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
    PostDetailsComponent
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
