import { Component, OnInit } from '@angular/core';
import {PhotoInterface} from "../../../interfaces/photo.interface";
import {ActivatedRoute} from "@angular/router";
import {PhotoService} from "../../../services/photo.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
photos: PhotoInterface[] = []
  constructor(private activatedRoute: ActivatedRoute, private photoService: PhotoService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(({id})=>{
    this.photoService.getPhoto(id).subscribe(value => {
      this.photos = value
    })
  })
  }

}
