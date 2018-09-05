"use strict";

const reviews = {
  messageArray: [],

  render() {
    console.log(`массив в который попадает в render`, this.messageArray);
    let reviewsContainer = $('.reviews__container');
    for (let i = 0; i < this.messageArray.length; i++) {
      new Review(this.messageArray[i].id,
        this.messageArray[i].text,
        this.messageArray[i].author,
        this.messageArray[i].verified).render(reviewsContainer);
    }
  },

  addReview() {
    let review = $('#review');
    let name = $('#name');
    let newReview = {
      id: this.messageArray.length + 1,
      text: review.val(),
      author: name.val(),
      verified: 0
    };
    this.messageArray.unshift(newReview);
    console.log(`массив в addReview после добавления отзыва`, this.messageArray);
    this.refresh();

    review.val('');
    name.val('');
  },

  deleteReview(reviewId) {
    for (let i = 0; i < this.messageArray.length; i++) {
      if (this.messageArray[i].id === +reviewId) {
        this.messageArray.splice(i, 1);
      }
    }
    console.log(`массив в deleteReview после удаления отзыва`, this.messageArray);
    this.refresh();
  },

  refresh() {
    console.log(`массив в refresh`, this.messageArray);
    $('.reviews__container').empty();
    this.render();
  }
};