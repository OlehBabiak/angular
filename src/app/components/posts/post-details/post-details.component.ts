import { Component, OnInit } from '@angular/core';
import {Post} from "../../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {PostService} from "../../../services/post.service";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

post: Post
  constructor(private  postService: PostService, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params=>{
      console.log(params.id);
    this.postService.getPost(params.id).subscribe(value => {
      this.post = value
    })
    })
  }

  ngOnInit(): void {
  }

}
