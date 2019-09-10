import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector:'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie = null;
  @Output() commentUpdate = new EventEmitter();
  movieComment = '';
  commentSaved = false;
  movieRating = 2;

  constructor() {}


  saveComment(movieId) {
    if(!this.commentSaved) {
      const payload = {
        id: this.movie.id,
        newComment: this.movieComment
      };
      this.commentUpdate.emit(payload);
    }

    this.commentSaved = !this.commentSaved;
  }

  ngOnInit() {
    this.movieComment = this.movie.comment;
    this.commentSaved = this.movieComment.length > 0;
  }
}
