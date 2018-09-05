"use strict";

//инициализируем рендер
$(document).ready(function () {

  //Создаем корзину
  let basket = new Basket();
  basket.getItems();
  basket.eventHandlerForButtons();


});
