$(document).ready(function(){
  $('.owl-carousel').slick({
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6500,
    arrows: true,
    dots: true,
    draggable: true,
    lazyLoad: true,
    nextArrow: $(".top-slider__next"),
    prevArrow: $(".top-slider__prev"),
    touchMove: true,
    pauseOnHover: true,
  });
  $('.single-item').slick({
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3500,
    arrows: true,
    dots: false,
    draggable: true,
    lazyLoad: true,
    nextArrow: $(".testimonials__next"),
    prevArrow: $(".testimonials__prev"),
    touchMove: true,
    pauseOnHover: true,
  });
  $('.single-item-1').slick({
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4500,
    arrows: false,
    dots: true,
    draggable: true,
    lazyLoad: true,
    touchMove: true,
    pauseOnHover: true,
  });
});