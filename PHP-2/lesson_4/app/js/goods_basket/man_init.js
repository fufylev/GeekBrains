"use strict";

//инициализируем рендер
$(document).ready(function () {
  let next = 6; // переменная для отправки след "next" страниц в рендер
  let from = 0; // с какой позиции брать данные в БД

  let $productsContainer = $('.catalog-grid'); // контейнер для карточек товаров
  let category = 'man';

  //запускаем рендер товаров на страницу по заданным параметрам
  let goods = new ProductCardsRender($productsContainer, category);
  goods.getCatalog(next, from);

  //Создаем корзину
  let basket = new Basket();
  basket.getItems();
  basket.eventHandlerForButtons();

  //вешаем обработчик на ссылку показа следующих товаров
  $(document).on('click', '.next', function () {
    from += 6; // задаем по сколько товаров показывать
    goods.getCatalog(next, from); // запускаем рендер для следующих товаров
  });

});

