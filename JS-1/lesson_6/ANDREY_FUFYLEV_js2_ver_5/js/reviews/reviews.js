"use strict";

const reviews = {
  reviewsArray: [],

  listReview() {
    $.ajax({
      url: './responses/getReview.json',
      type: 'GET',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(`Успешное получение данных`, data);
        for (let i = 0; i < data.reviews.length; i++) {
          this.reviewsArray.push(data.reviews[i]);
        }
        console.log(this.reviewsArray);
        this.render();
      },
      error: function (errorObj) {
        console.log('Ошибка получения данных', errorObj);
      }
    });

  },

  render() {
    console.log(`массив в который попадает в render`, this.reviewsArray);
    let reviewsContainer = $('.reviews__container');
    for (let i = 0; i < this.reviewsArray.length; i++) {
      new Review(this.reviewsArray[i].id,
        this.reviewsArray[i].text,
        this.reviewsArray[i].author,
        this.reviewsArray[i].verified, this.reviewsArray[i].date).render(reviewsContainer);
    }
  },

  addReview() {
    $.ajax({
      url: './responses/addReview.json',
      type: 'GET',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(`Успешное получение данных при добавлении`, data);
        alert(data.userMessage)
      },
      error: function (errorObj) {
        console.log('Ошибка получения данных', errorObj);
      }
    });
    let review = $('#review');
    let name = $('#name');
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    today = dd + '-' + mm + '-' + yyyy;
    let newReview = {
      id: this.reviewsArray.length + 1,
      text: review.val(),
      author: name.val(),
      date: today,
      verified: 0
    };
    this.reviewsArray.unshift(newReview);
    console.log(`массив в addReview после добавления отзыва`, this.reviewsArray);
    this.refresh();

    review.val('');
    name.val('');
  },

  deleteReview(reviewId) {
    $.ajax({
      url: './responses/removeReview.json',
      type: 'GET',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(data);
      },
      error: function (errorObj) {
        console.log('Ошибка получения данных', errorObj);
      }
    });
    for (let i = 0; i < this.reviewsArray.length; i++) {
      if (this.reviewsArray[i].id === +reviewId) {
        this.reviewsArray.splice(i, 1);
      }
    }
    console.log(`массив в deleteReview после удаления отзыва`, this.reviewsArray);
    this.refresh();
  },

  submitReview(reviewId) {
    $.ajax({
      url: './responses/approveReview.json',
      type: 'GET',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(data);
      },
      error: function (errorObj) {
        console.log('Ошибка получения данных', errorObj);
      }
    });
    for (let i = 0; i < this.reviewsArray.length; i++) {
      if (this.reviewsArray[i].id === +reviewId) {
        if (this.reviewsArray[i].verified) {
          this.reviewsArray[i].verified = 0
        } else if (!this.reviewsArray[i].verified) {
          this.reviewsArray[i].verified = 1
        }
      }
    }
    this.refresh();
  },

  refresh() {
    console.log(`массив в refresh`, this.reviewsArray);
    $('.reviews__container').empty();
    this.render();
  }
};