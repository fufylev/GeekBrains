"use strict";

/**
 * Class for product cards rendering
 */
class ProductCardsRender {
  constructor(container, category) {
    this.category = category;
    this.productId = 0;
    this.productName = "";
    this.productPrice = 0;
    this.container = container;
  }

  /**
   * product call function
   * @param $next - how much cards to be shown more started from the "$from"
   * @param $from - start position in DB for product cards render
   */
  getCatalog($next, $from) {
    let self = this;
    $.ajax({
      type: 'GET',
      url: '/goods/get/',
      dataType: 'json',
      data: {
        $next: $next,
        $category: this.category,
        $from: $from,
      },
      success: function (data) {
        let arr = data.goods;
        console.log(`ответ от БД `, data.goods);

        for (let i = 0; i <= arr.length; i++) {
          self.render(arr[i].id_good, arr[i].good_name, arr[i].price);
        }
      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }

  /**
   * render function for product cards for all site' pages
   * @param id
   * @param productName
   * @param productPrice
   */
  render(id, productName, productPrice) {
    this.productId = id;
    this.productName = productName;
    this.productPrice = productPrice;
    let $productCardsBox = $('<div />', {//контейнер самой карточки товара
      class: 'product-cards__box',
      id: this.productId,
    });

    let $linkToCard = $(`
      <a href="/goods/card/?id=${this.productId}" class="product-cards__link">
          <img src="/assets/img/prod-${this.productId}.png" alt="pic${this.productId}" class="product-cards__pic">
          <h2 class="product-cards__name">${this.productName}</h2>
          <p class="product-cards__footer"><span class="product-cards__price">$${this.productPrice}.00</span></p>
      </a>
    `);

    $linkToCard.appendTo($productCardsBox);

    // buttons container
    let $productCardsBtns = $('<div />', {
      class: 'product-cards__btns',
    });

    // "Add to cart" button HTML code
    let $cartBtn = $(`
      <button class="product-cards__cart-btn" data-id="${this.productId}" data-name="${this.productName}" data-price="${this.productPrice}">
          <p class="product-cards__cart-icon"><i class="fas fa-cart-plus"></i></p>Add to Cart
      </button>`);

    // "delete" button HTML code
    let $resetBtn = $(`
      <button class="product-cards__reset-btn" data-id="${this.productId}" data-name="${this.productName}" data-price="${this.productPrice}">
        <i class="fas fa-trash-alt"></i>
      </button>`);

    // "like" button HTML code
    let $likeBtn = $(`
      <button class="product-cards__like-btn" data-id="${this.productId}" data-name="${this.productName}" data-price="${this.productPrice}">
        <i class="far fa-heart"></i>
      </button>`);

    // create of an HTML blocks nesting
    $cartBtn.appendTo($productCardsBtns);
    $resetBtn.appendTo($productCardsBtns);
    $likeBtn.appendTo($productCardsBtns);
    $productCardsBtns.appendTo($productCardsBox);
    $productCardsBox.appendTo(this.container);

  }
}


