import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: Post[] = [];
  constructor(private postService: PostService) {}

  getPosts() {
    this.postService.getPosts().subscribe((posts) => (this.posts = posts));
  }

  ngOnInit() {
    this.getPosts();
  }
}
