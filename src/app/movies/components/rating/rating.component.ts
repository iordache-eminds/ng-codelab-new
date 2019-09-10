import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'ngi-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {
  starStates = [ true, false, false, false, false ];
  @Input() rating;
  @Output() ratingChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.rating) {
      this.updateRating(changes.rating.currentValue);
    }
  }
  handleRatingClick(ratingIndex) {
    this.ratingChange.emit(ratingIndex);
  }

  updateRating(newRating) {
    this.starStates = this.starStates.map(
      (state, index) => index < newRating,
    );
  }

}
