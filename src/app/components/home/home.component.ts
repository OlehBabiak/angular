import { Component, OnInit } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
email: string
  constructor(private dataTransfer: DataTransferService) {
 this.dataTransfer.store.subscribe(value => this.email = value)
  }

  ngOnInit(): void {
  }

}
