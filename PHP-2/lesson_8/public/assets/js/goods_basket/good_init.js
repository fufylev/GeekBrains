"use strict";

//инициализируем рендер
$(document).ready(function () {
  let next = 8; // переменная для отправки след "next" страниц в рендер
  let from = 0; // с какой позиции брать данные в БД

  let $productsContainer = $('.product-cards__content'); // контейнер для карточек товаров
  let category = '';

  //запускаем рендер товаров на страницу по заданным параметрам
  let goods = new ProductCardsRender($productsContainer, category);
  goods.getCatalog(next, from);

  //Создаем корзину
  let basket = new Basket();
  basket.getItems();
  basket.eventHandlerForButtons();

  //вешаем обработчик на ссылку показа следующих товаров
  $(document).on('click', '.next', function () {
    from += 8; // задаем по сколько товаров показывать
    goods.getCatalog(next, from); // запускаем рендер для следующих товаров
  });

});