"use strict";

$(document).ready(function () {
  let $slides = $('.slider .slide');
  let $btnLeft = $('#btnLeft');
  let $btnRight = $('#btnRight');
  let ACTIVE_CLASS = 'active';
  let t = 0;//время анимации

  $slides.first().addClass(ACTIVE_CLASS);
  $slides.not('.' + ACTIVE_CLASS).hide();

  $btnLeft.on('click', function () {
    if ($slides.filter('.' + ACTIVE_CLASS).prev().hasClass('slide')) {
      $slides.filter('.' + ACTIVE_CLASS).hide();
      $slides.filter('.' + ACTIVE_CLASS).removeClass(ACTIVE_CLASS).prev().addClass(ACTIVE_CLASS);
      $slides.filter('.' + ACTIVE_CLASS).show("fade", {}, t);
    } else {
      $slides.filter('.' + ACTIVE_CLASS).hide();
      $slides.filter('.' + ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
      $slides.last().not("." + ACTIVE_CLASS).addClass(ACTIVE_CLASS);
      $slides.filter('.' + ACTIVE_CLASS).show("fade", {}, t);
    }
  });

  $btnRight.on('click', function () {
    if ($slides.filter('.' + ACTIVE_CLASS).next().hasClass('slide')) {
      $slides.filter('.' + ACTIVE_CLASS).hide();
      $slides.filter('.' + ACTIVE_CLASS).removeClass(ACTIVE_CLASS).next().addClass(ACTIVE_CLASS);
      $slides.filter('.' + ACTIVE_CLASS).show("fade", {}, t);
    } else {
      $slides.filter('.' + ACTIVE_CLASS).hide();
      $slides.filter('.' + ACTIVE_CLASS).removeClass(ACTIVE_CLASS);
      $slides.first().not("." + ACTIVE_CLASS).addClass(ACTIVE_CLASS);
      $slides.filter('.' + ACTIVE_CLASS).show("fade", {}, t);
    }
  });
});