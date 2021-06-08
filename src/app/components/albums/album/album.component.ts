import {Component, Input, OnInit} from '@angular/core';
import {IAlbum} from "../../../interfaces/album.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
@Input()
album : IAlbum
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  onBackToUsers(): void{
    this.router.navigate(['/users'])
  }
  goToPhotos(): void{
    this.router.navigate(['album/', this.album.id], {relativeTo:this.activatedRoute})
  }
}
