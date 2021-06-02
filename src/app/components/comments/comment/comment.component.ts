import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/comment";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input()
comment: Comment
  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
