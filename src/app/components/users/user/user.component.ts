import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../models/User";
import {PostService} from "../../../services/post.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: User // let user = u  from users.comp.html

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {

  }

}
