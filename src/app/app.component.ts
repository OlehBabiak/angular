import { Component } from '@angular/core';
import {DataTransferService} from "./app-services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  greeting = 'Hello angular';
msg: any
  constructor(private dataTansfer: DataTransferService) {
    this.msg = this.dataTansfer.store.getValue()
    this.dataTansfer.store.next('jhjfjhjfgh')
    this.msg = this.dataTansfer.store.getValue()
  }

}
