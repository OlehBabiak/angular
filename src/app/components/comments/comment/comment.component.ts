import {Component, Input, OnInit} from '@angular/core';
import {CommentInterface} from "../../../interfaces/comment.interface";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input()
comment: CommentInterface
  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBackToUsers(){
  this.router.navigate([this.activatedRoute])
  }
}
