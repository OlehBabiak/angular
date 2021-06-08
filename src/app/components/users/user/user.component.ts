import {Component, Input, OnInit} from '@angular/core';
import {UserInterface} from "../../../interfaces/user.interface";
import {PostService} from "../../../services/post.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostInterface} from "../../../interfaces/post.interface";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: UserInterface // let user = u  from users.comp.html

  constructor(private postService: PostService, private router: Router, private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {

  }

  getUsersPosts():void {
    this.router.navigate([`${this.user.id}/posts`], {relativeTo: this.activatedRoute})
  }
  getUsersAlbums():void {
    this.router.navigate([`${this.user.id}/albums`], {relativeTo: this.activatedRoute})
  }
  getUsersTodos():void {
    this.router.navigate([`${this.user.id}/todos`], {relativeTo: this.activatedRoute})
  }

}
