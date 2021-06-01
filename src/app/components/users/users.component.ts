import {Component, OnInit} from '@angular/core';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

// @Component({
//   selector: 'app-users',
//   templateUrl: './users.component.html',
//   styleUrls: ['./users.component.css']
// })
// export class UsersComponent implements OnInit {
// users: User[] = []
//   constructor(private httpClient: HttpClient) { }
//
//   ngOnInit(): void {
//     this.httpClient.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(value => {
//    this.users = value  //ініціалізуєм users даними з value
//       //
//     })
//   }
//
// }

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { //like lifcycle hook
  users: User[] = []

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.users = value
    })
  }
}
