import {Component, Input, OnInit} from '@angular/core';
import {Comment} from "../../../models/comment";
import {ActivatedRoute} from "@angular/router";
import {ResolveService} from "../../../services/resolve.service";

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {
  @Input()
comment: Comment
  constructor(private activateRoute: ActivatedRoute, private commentService: ResolveService) {


  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.commentService.getComment(params.id).subscribe(value => {
        this.comment = value
      })
    })
  }

}