"use strict";

//инициализируем рендер
$(document).ready(function () {

  let productsArray = [9, 10, 3, 11, 12, 13, 6, 14, 15];

  /*let $productsContainer = $('.catalog-grid');// контейнер для карточек товаров
  for (let i = 0; i < productsArray.length; i++) {
    new ProductCardsRender(productsArray[i], $productsContainer)
      .toGetProducts(productsArray[i]);// на основе класса ренедим карточки на главную страницу в контейнер
  }*/
  //Создаем корзину
  let basket = new Basket();
  basket.getItems();
  basket.eventHandlerForButtons();

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [52, 400],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  });
});