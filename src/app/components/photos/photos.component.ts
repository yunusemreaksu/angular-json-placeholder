import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  photos: Photo[] = [];

  constructor(
    private photoService: PhotoService,
    private route: ActivatedRoute
  ) {}

  getPhotos() {
    this.photoService.getPhotos().subscribe((photos) => (this.photos = photos));
  }

  getPhotosOfAlbum(albumId: number) {
    this.photoService
      .getPhotosOfAlbum(albumId)
      .subscribe((photosOfAlbum) => (this.photos = photosOfAlbum));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('albumId');
    const intId = parseInt(id!);
    if (intId) {
      this.getPhotosOfAlbum(intId);
    } else {
      this.getPhotos();
    }
  }
}
