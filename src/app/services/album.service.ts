import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album.model';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Album[]>(this.albumsUrl, options);
  }
}
