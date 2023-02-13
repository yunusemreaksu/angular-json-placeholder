import { Component } from '@angular/core';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  photos: Photo[] = [];

  constructor(private photoService: PhotoService) {}

  getPhotos() {
    this.photoService.getPhotos().subscribe((photos) => (this.photos = photos));
  }

  ngOnInit() {
    this.getPhotos();
  }
}
