import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) {}

  getComments(): Observable<Comment[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Comment[]>(this.commentsUrl, options);
  }

  getCommentsOfPost(postId: number): Observable<Comment[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Comment[]>(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      options
    );
  }
}
