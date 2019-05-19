"use strict";

class Review {
  constructor(reviewId, reviewText, reviewAuthor, reviewVerified, reviewDate) {
    this.reviewId = reviewId;
    this.reviewText = reviewText;
    this.reviewAuthor = reviewAuthor;
    this.reviewDate = reviewDate;
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
        class: 'review_item'
      });
    }

    let reviewText = $('<div />', {
      class: 'review_text',
      text: this.reviewText
    });
    let reviewDate = $('<div />', {
      class: 'review_date',
      text: this.reviewDate
    });

    let reviewAuthor = $('<div />', {
      class: 'review_author',
      text: this.reviewAuthor
    });

    let deleteBtn = $('<button />', {
      class: 'del_review_btn',
      'data-id': this.reviewId,
      text: 'Удалить'
    });

    let submitBtn = $('<button />', {
      class: 'submit_review_btn',
      'data-id': this.reviewId,
      text: 'Подтвердить'
    });

    reviewText.appendTo(review);
    reviewDate.appendTo(review);
    reviewAuthor.appendTo(review);
    review.appendTo(container);
    submitBtn.appendTo(review);
    deleteBtn.appendTo(review);

  }
}

