"use strict";

$(document).ready(function () {

  let reviewsContainer = $('.reviews__container');

  $('.form_btn').on('click', function () {
    reviews.addReview();
  });

  reviewsContainer.on('click', '.del_review_btn', function () {
    let reviewId = $(this).attr('data-id');
    reviews.deleteReview(reviewId);
  });

  reviewsContainer.on('click', '.submit_review_btn', function () {
    let reviewId = $(this).attr('data-id');
    reviews.submitReview(reviewId);
  });
});