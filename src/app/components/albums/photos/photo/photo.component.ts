import {Component, Input, OnInit} from '@angular/core';
import {PhotoInterface} from "../../../../interfaces/photo.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
@Input()
photo: PhotoInterface
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBackToUsers(){
    this.router.navigate([this.activatedRoute])
  }
  }
