import { Component, OnInit } from '@angular/core';
import {PostService} from "../../services/post.service";
import {IPost} from "../../interfaces";
import {DataTransferService} from "../../app-services/data-transfer.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts: IPost[]
  constructor(private postService: PostService, private datatransfer: DataTransferService) {

  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(value => {
      this.posts = value
    })
  }

}
