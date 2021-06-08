import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentInterface} from "../../interfaces/comment.interface";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments: CommentInterface[] = []
  constructor(private activatedRoute: ActivatedRoute, private commentService: CommentService) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({id}) => {
      console.log(id)
      console.log('Act rout: ', this.activatedRoute)
      this.commentService.getComment(id).subscribe(value => {
        this.comments = value
        console.log(value);
      })
    })
  }

}
