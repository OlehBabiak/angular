import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/Post";
import {ActivatedRoute, Router} from "@angular/router";
import {CommentService} from "../../../services/comment.service";

@Component({
  selector: 'app-post2',
  templateUrl: './post2.component.html',
  styleUrls: ['./post2.component.css']
})
export class Post2Component implements OnInit {
@Input()
post: Post
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private commentService: CommentService) { }

  ngOnInit(): void { }
  getComments():void {
    this.router.navigate([this.post.id], {relativeTo:this.activatedRoute})
  }
}
