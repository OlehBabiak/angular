import {Component, Input, OnInit} from '@angular/core';
import {IUser} from "../../../interfaces";
import {DataTransferService} from "../../../app-services/data-transfer.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: IUser
  constructor(private datatransfer: DataTransferService) { }

  ngOnInit(): void {
  }
  storeUser(){
let currentStore = this.datatransfer.store.getValue()
    currentStore.push(this.user.name)
    this.datatransfer.store.next(currentStore)
  }
}
