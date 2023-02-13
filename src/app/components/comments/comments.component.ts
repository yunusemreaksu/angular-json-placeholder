import { Component } from '@angular/core';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: Comment[] = [];

  constructor(private commentService: CommentService) {}

  getComments() {
    this.commentService
      .getComments()
      .subscribe((comments) => (this.comments = comments));
  }

  ngOnInit() {
    this.getComments();
  }
}
