import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";
import {ActivatedRoute} from "@angular/router";
import {Post2Service} from "../../services/post2.service";

@Component({
  selector: 'app-posts2',
  templateUrl: './posts2.component.html',
  styleUrls: ['./posts2.component.css']
})
export class Posts2Component implements OnInit {
  posts: Post[] = []
  constructor(private post2Service: Post2Service, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.post2Service.getPosts().subscribe(value => {
      this.posts = value
    })
  }

}
