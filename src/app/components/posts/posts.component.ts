import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: PostInterface[] = []

  constructor(private postService: PostService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{

    this.postService.getPost(id).subscribe(value => {
      this.posts = value
    })

    } )
  }

}
