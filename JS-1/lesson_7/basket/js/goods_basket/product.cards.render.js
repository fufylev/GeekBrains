"use strict";

class ProductCardsRender {
  constructor(productId, container) {
    this.productId = productId;
    this.productName = "";
    this.productPrice = 0;
    this.imgUrl = "";
    this.pageUrl = "";
    this.container = container;
  }

  toGetProducts(idProduct) {
    $.ajax({
      url: './responses/catalogData.json',
      type: 'GET',
      dataType: 'json',
      context: this,
      success: function (data) {
        let productName = "";
        let productPrice = 0;
        let imgUrl = "";
        let pageUrl = "";

        for (let i = 0; i < data.length; i++) {
          if (+data[i].id_product === +idProduct) {
            productName = data[i].product_name;
            productPrice = data[i].price;
            imgUrl = data[i].img_url;
            pageUrl = data[i].page_url;
          }
        }
        this.render(productName, productPrice, imgUrl, pageUrl)
      },
      error: function (errorObj) {
        console.log('Ошибка получения данных', errorObj);
      },
    });

  }

  render(productName, productPrice, imgUrl, pageUrl) {
    this.productName = productName;
    this.productPrice = productPrice;
    this.imgUrl = imgUrl;
    this.pageUrl = pageUrl;

    let $productCardsBox = $('<div />', {//контейнер самой карточки товара
      class: 'product-cards__box',
      id: this.productId,
    });

    let $linkToCard = $(`<a href="${this.pageUrl}" class="product-cards__link"><img src="${this.imgUrl}" alt="pic${this.productId}" class="product-cards__pic"><h2 class="product-cards__name">${this.productName}</h2><p class="product-cards__footer"><span class="product-cards__price">$${this.productPrice}.00</span><span class="product-cards__stars"><i
                            class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i
                            class="fas fa-star"></i><i class="fas fa-star"></i></span></p></a>`);

    $linkToCard.appendTo($productCardsBox);

    //контейнер для кнопок
    let $productCardsBtns = $('<div />', {
      class: 'product-cards__btns',
    });

    //код кнопки "Купить"
    let $cartBtn = $(`<button class="product-cards__cart-btn" data-id="${this.productId}"><img src="./img/add-to-cart.png" alt="cart" class="product-cards__cart-icon">Add to Cart</button>`);

    //код кнопки "Обновить"
    let $resetBtn = $(`<button class="product-cards__reset-btn" data-id="${this.productId}"><i class="fas fa-trash-alt"></i></button>`);

    //код кнопки "Лайк"
    let $likeBtn = $(`<button class="product-cards__like-btn" data-id="${this.productId}"><i class="far fa-heart"></i></button>`);

    // создаем вложенность товаров и получаем готовую карточку товара

    $cartBtn.appendTo($productCardsBtns);
    $resetBtn.appendTo($productCardsBtns);
    $likeBtn.appendTo($productCardsBtns);
    $productCardsBtns.appendTo($productCardsBox);
    $productCardsBox.appendTo(this.container);

  }
}


