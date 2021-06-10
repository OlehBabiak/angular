import {Component, OnInit, Output,EventEmitter} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: IUser[];
@Output()
emitter = new EventEmitter<IUser>()
    constructor(private userService: UserService) {
    }


  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }

  getUser(user: IUser) {
    this.emitter.emit(user)
  }
}
