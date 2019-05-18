"use strict";

//инициализируем рендер
$(document).ready(function () {

  let productsArray = [1, 2, 3, 4, 5, 6, 7, 8];

  let $productsContainer = $('.product-cards__content');// контейнер для карточек товаров
  for (let i = 0; i < productsArray.length; i++) {
    new ProductCardsRender(productsArray[i], $productsContainer)
      .toGetProducts(productsArray[i]);// на основе класса ренедим карточки на главную страницу в контейнер
  }
  //Создаем корзину
  let basket = new Basket();
  basket.getItems();
  basket.eventHandlerForButtons();



});
