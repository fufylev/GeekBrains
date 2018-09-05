"use strict";

class ProductCardsRender {
  constructor(container, category) {
    this.category = category;
    this.productId = 0;
    this.productName = "";
    this.productPrice = 0;
    this.imgUrl = "";
    this.pageUrl = "";
    this.container = container;
  }

  getCatalog($next, $from) {
    let self = this;
    $.ajax({
      type: 'GET',
      url: './good_catalog.php',
      dataType: 'json',
      data: {
        $next: $next,
        $category: this.category,
        $from: $from,
      },
      success: function (data) {
        let arr = data.result;
        //console.log(`ответ от БД `, data.result);

        for (let i = 0; i <= arr.length; i++) {
          self.render(arr[i].id, arr[i].short_description, arr[i].price, arr[i].url);
        }

      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }


  render(id, productName, productPrice, imgUrl) {
    this.productId = id;
    this.productName = productName;
    this.productPrice = productPrice;
    this.imgUrl = imgUrl;
    this.pageUrl = './good_details.php';

    let $productCardsBox = $('<div />', {//контейнер самой карточки товара
      class: 'product-cards__box',
      id: this.productId,
    });

    let $linkToCard = $(`<a href="good_details.php?id=${this.productId}" class="product-cards__link"><img src="img/prod-${this.productId}.png" alt="pic${this.productId}" class="product-cards__pic"><h2 class="product-cards__name">${this.productName}</h2><p class="product-cards__footer"><span class="product-cards__price">$${this.productPrice}.00</span></p></a>`);

    $linkToCard.appendTo($productCardsBox);

    //контейнер для кнопок
    let $productCardsBtns = $('<div />', {
      class: 'product-cards__btns',
    });

    //код кнопки "Купить"
    let $cartBtn = $(`<button class="product-cards__cart-btn" data-id="${this.productId}"><img src="./img/add-to-cart.png" alt="cart" class="product-cards__cart-icon">Add to Cart</button>`);

    //код кнопки "Обновить"
    let $resetBtn = $(`<button class="product-cards__reset-btn" data-id="${this.productId}"><img src="./img/arrow-rectangle.png" alt="reset" class="product-cards__reset-icon"></button>`);

    //код кнопки "Лайк"
    let $likeBtn = $(`<button class="product-cards__like-btn" data-id="${this.productId}"><img src="./img/heart.png" alt="like" class="product-cards__like-icon"></button>`);

    // создаем вложенность товаров и получаем готовую карточку товара

    $cartBtn.appendTo($productCardsBtns);
    $resetBtn.appendTo($productCardsBtns);
    $likeBtn.appendTo($productCardsBtns);
    $productCardsBtns.appendTo($productCardsBox);
    $productCardsBox.appendTo(this.container);

  }
}


