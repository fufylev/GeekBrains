$(document).ready(function () {

  /**
   * popup effect for language selected menu
   */
  $('.language-select').on('click', function () {
    $(this).toggleClass('open', 500);
  });

  $('.language-select li').on('click', function () {
    let dataLangSelect = $(this).data('lang');
    $('.language-select').data('location', dataLangSelect);
    $('.language-select li').removeClass('active');
    $(this).toggleClass('active');
  });


  /**
   * popup effect for currency selected menu
   */
  $('.currency-select').on('click', function () {
    $(this).toggleClass('open', 500);
  });

  $('.currency-select li').on('click', function () {
    let dataCurrSelect = $(this).data('lang');
    $('.currency-select').data('location', dataCurrSelect);
    $('.currency-select li').removeClass('active');
    $(this).toggleClass('active');
  });




});

