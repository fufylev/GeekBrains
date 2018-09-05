"use strict";

class Review {
  constructor(reviewId, reviewText, reviewAuthor, reviewVerified) {
    this.reviewId = reviewId;
    this.reviewText = reviewText;
    this.reviewAuthor = reviewAuthor;
    this.reviewVerified = reviewVerified;
  }

  render(container) {
    let review;

    if (this.reviewVerified) {
      review = $('<div />', {
        class: 'review_item verified'
      });
    }

    if (!this.reviewVerified) {
      review = $('<div />', {
        class: 'review_item form-control'
      });
    }

    let reviewText = $('<p />', {
      class: 'review_text',
      text: this.reviewText
    });

    let reviewAuthor = $('<p />', {
      class: 'review_author text-right',
      text: this.reviewAuthor
    });

    let deleteBtn = $('<button />', {
      class: 'del_review_btn form_btn',
      'data-id': this.reviewId,
      text: 'Удалить'
    });

    reviewText.appendTo(review);
    reviewAuthor.appendTo(review);
    review.appendTo(container);
    deleteBtn.appendTo(review);

  }
}

