import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  post: Post

  constructor(private  router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params=>{
      this.post = this.router.getCurrentNavigation()?.extras.state as Post
    })
  }

  ngOnInit(): void {
  }

}
