import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../../models/User";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User

  constructor(private  router: Router, private activateRoute: ActivatedRoute) {
    this.activateRoute.params.subscribe(params =>{   //here check changes, тут відбувається ререндеринг
      //params містить id (path :id)
      //змінюється параметр урли, наново віхоплюєм extras
      this.user =  this.router.getCurrentNavigation()?.extras.state as User// краще цей спосіб
    })
  }

  ngOnInit(): void {
    // console.log(history.state)

  }

}