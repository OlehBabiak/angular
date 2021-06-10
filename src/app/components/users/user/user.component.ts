import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';
import {IUser} from "../../../interfaces";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
user: IUser
  @Output()
  emitter = new EventEmitter<IUser>()
  constructor(private router: Router, private activatedRoute: ActivatedRoute ) {

  }

  ngOnInit(): void {
  }
  goToDetails(): void {
  this.emitter.emit(this.user)
  }
}
