import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment.model';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent {
  comments: Comment[] = [];

  constructor(
    private commentService: CommentService,
    private route: ActivatedRoute
  ) {}

  getComments() {
    this.commentService
      .getComments()
      .subscribe((comments) => (this.comments = comments));
  }

  getCommentsOfPost(postId: number) {
    this.commentService
      .getCommentsOfPost(postId)
      .subscribe((commentsOfPost) => (this.comments = commentsOfPost));
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('postId');
    const intId = parseInt(id!);
    if (intId) {
      this.getCommentsOfPost(intId);
    } else {
      this.getComments();
    }
  }
}
