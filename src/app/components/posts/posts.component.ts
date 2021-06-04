import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input()
posts: Post[] = []

  constructor(private postService: PostService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) =>{
      console.log('Act rout: ', this.activatedRoute)
    this.postService.getPost(id).subscribe(value => {
      console.log(value);
      this.posts = value
    })

    } )
  }

}
