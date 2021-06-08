import {Component, OnInit} from '@angular/core';
import {UserInterface} from "../../interfaces/user.interface";
import {UserResolveService} from "../../services/user-resolve.service";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit { //like lifcycle hook
  users: UserInterface[]

  constructor(private userService: UserResolveService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(({data}) => {
      this.users = data
    })
  }

  ngOnInit(): void {
    }
  }

