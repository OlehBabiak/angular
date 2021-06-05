import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../../../models/Post";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User // let user = u  from users.comp.html

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {

  }

  getPosts():void {
    this.router.navigate([this.user.id], {relativeTo:this.activatedRoute})
    console.log('router: ',this.router)
  }
}
