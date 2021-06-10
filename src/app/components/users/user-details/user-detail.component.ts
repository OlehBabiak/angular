import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../../interfaces";
import {DataTransferService} from "../../../app-services/data-transfer.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
user: IUser
  userDetails: any
@Output()
  userLift = new EventEmitter<any>()

  constructor(private  router: Router, private userService: UserService, private activatedRoute: ActivatedRoute, private dataTansfer: DataTransferService ) {

  }

  ngOnInit(): void {

  }
  choseUser() {
    this.userDetails = this.dataTansfer.store.getValue()
    this.dataTansfer.store.next(this.user.name)
    console.log(this.dataTansfer.store.getValue());
    console.log('zzz: ', this.userDetails)
  }

}
