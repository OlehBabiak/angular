import { Component, OnInit } from '@angular/core';
import {IAlbum} from "../../interfaces/album.interface";
import {AlbumService} from "../../services/album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
albums: IAlbum[] = []
  constructor(private albumService: AlbumService, private activatedRoute:ActivatedRoute ) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(({id})=>{
    this.albumService.getAlbum(id).subscribe(value => {
      this.albums = value
    })
  })
  }

}
