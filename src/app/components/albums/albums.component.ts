import { Component } from '@angular/core';
import { Album } from 'src/app/models/album.model';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent {
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  getAlbums() {
    this.albumService.getAlbums().subscribe((albums) => (this.albums = albums));
  }

  ngOnInit() {
    this.getAlbums();
  }
}
