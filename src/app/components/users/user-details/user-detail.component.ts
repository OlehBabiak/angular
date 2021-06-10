import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../interfaces";
import {DataTransferService} from "../../../services/data-transfer.service";


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input()
  user: IUser



  constructor(private dataTransfer: DataTransferService) {
  }

  ngOnInit(): void {

  }

  setUser() {
    let currentUser = this.dataTransfer.store.getValue()
    currentUser = this.user.name
    this.dataTransfer.store.next(currentUser)
  }
}
