import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/Post";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input()
post: Post
  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBackToUsers(): void{
    this.router.navigate(['/users'])
  }
}
