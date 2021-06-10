import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../interfaces";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: IUser



  constructor(private router: Router, private userService: UserService, private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.params);
    this.activatedRoute.params.subscribe(params =>{
      this.user =  this.router.getCurrentNavigation()?.extras.state as IUser
    })
  }

  ngOnInit(): void {

  }
}
