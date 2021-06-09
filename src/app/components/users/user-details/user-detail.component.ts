import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../../interfaces";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: IUser
@Output()
  userLift = new EventEmitter<any>()

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getUser(params.id).subscribe(value => {
        this.user = value
      })
    })
  }

  choseUser() {
this.userLift.emit(this.user.name)
  }
}
