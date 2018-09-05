'use strict';

/**
 *  Class for basket render both MINI and FULL
 */
class Basket {
  constructor() {
    this.id = 0;
    this.countGoods = 0; //Общая стоимость товаров
    this.productName = ''; //Общая стоимость товаров
    this.imgUrl = ''; //путь к картинки товара
    this.pageUrl = ''; //путь к странице с описанием товара
    this.price = 0; // стоимость товара
    this.basketItems = []; //Массив для хранения товаров
    this.$container = $('.drop-menu__flex-cart');
    this.$bigBasketContainer = $('.full-page-basket');
  }

  /**
   * FULL PAGE basket render method
   */
  fullPageBasketRender() {
    this.$bigBasketContainer.empty(); // FULL PAGE basket container to be cleaned

    // FULL PAGE basket container (header location)
    for (let i = 0; i < this.basketItems.length; i++) {

      // refresh the total sum for current product
      let totalSum = Math.round((this.basketItems[i].price) * (this.basketItems[i].amount));

      // HTML rendering for FULL PAGE basket
      let $block1 = "";
      $block1 = $(`
        <div class="shoping-cart">
            <div class="product-details">
                <a href="/goods/card/?id=${this.basketItems[i].id_good}"><img src="/assets/img/prod-${this.basketItems[i].id_good}.png" alt="men-${this.basketItems[i].id_good}" class="product-details__pic"></a>
                <div class="product-details__content">
                    <h2 class="product-details__brand">${this.basketItems[i].good_name}</h2>
                    <p class="product-details__value">Color:&#160;&#160;&#160;<span class="product-details__value_thin">Red</span></p>
                    <p class="product-details__value">Size:&#160;&#160;&#160;<span class="product-details__value_thin">Xll</span></p>
                </div>
            </div>
            <div class="product-price">$${this.basketItems[i].price}</div>
            <div class="product-quantity">
                <span class="cart-product__minus" data-id="${this.basketItems[i].id_good}"><i class="fas fa-minus"></i></span>&nbsp;&nbsp;
                <span class="cart-product__amount">${this.basketItems[i].amount} item(s)&nbsp;&nbsp;&nbsp;</span>
                <span class="cart-product__plus" data-id="${this.basketItems[i].id_good}" data-name="${this.basketItems[i].good_name}" data-price="${this.basketItems[i].price}"><i class="fas fa-plus"></i></span>
            </div>
            <div class="product-shipping">FREE</div>
            <div class="product-subtotal">$${totalSum}</div>
            <div class="product-action cart-product__delete" data-id="${this.basketItems[i].id_good}"><i class="fas fa-times-circle"></i></div>
        </div>
      `);

      $block1.appendTo(this.$bigBasketContainer);
    }


  }

  /**
   *  MINI basket render method
   */
  miniBasketRender() {

    this.$container.empty(); //MINI basket container to be cleaned

    // MINI basket container (header location)
    let $bascketContainer = $('<div />', {// container for MINI basket product cards
      class: 'bascket_container',
    });

    for (let i = 0; i < this.basketItems.length; i++) {

      // refresh the total sum for current product
      let totalSum = Math.round((this.basketItems[i].price) * (this.basketItems[i].amount));

      // HTML rendering for MINI basket
      //console.log(`кол-во товаров в корзине`, this.countGoods);
      //console.log(`стоимость товаров в корзине`, this.totalPrice);
      let $block1 = "";
      if (this.basketItems.length === 0) {
        $block1 = $(`<p class="cart-product">Your cart is empty now</p>`);
      } else {
        $block1 = $(`
        <div class="cart-product" data-id="${this.basketItems[i].id_good}">
            <a href="/goods/card/?id=${this.basketItems[i].id_good}"><img src="/assets/img/prod-${this.basketItems[i].id_good}.png" alt="${this.basketItems[i].good_name}" class="cart-product__pic"></a>
            <div class="cart-product__content">
                <h2 class="cart-product__headline">${this.basketItems[i].good_name}</h2>
                <!--<p class="cart-product__stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p>-->
                <span class="cart-product__minus" data-id="${this.basketItems[i].id_good}"><i class="fas fa-minus"></i></span>&nbsp;&nbsp;
                <span class="cart-product__amount">${this.basketItems[i].amount} item(s)&nbsp;&nbsp;&nbsp;</span>
                <span class="cart-product__plus" data-id="${this.basketItems[i].id_good}" data-name="${this.basketItems[i].good_name}" data-price="${this.basketItems[i].price}"><i class="fas fa-plus"></i></span>
                <p class="cart-product__price">$${this.basketItems[i].price}&nbsp;&nbsp;|&nbsp;&nbsp;Total&nbsp;&nbsp;$${totalSum}</p>
            </div>
            <div class="cart-product__delete" data-id="${this.basketItems[i].id_good}"><i class="fas fa-times-circle"></i></div>
        </div>
      `);
      }
      $block1.appendTo($bascketContainer);
    }

    $bascketContainer.appendTo(this.$container);

    // block for *Checkout* and *Go to cart* buttons
    let $block2 = $(`
      <p class="cart-product__total">
          <span class="cart-product__total-price">TOTAL</span>
          <span class="cart-product__total-price">$${this.totalPrice}</span>
      </p>
      <a href="/user/checkout/" class="cart-product__button cart-product__button_pink">Checkout</a>
      <a href="/basket/cart/" class="cart-product__button cart-product__button_black">Go to cart</a>
    `);

    $block2.appendTo(this.$container);

    // clean an HTML code for MINI basket
    $('.cart__qnt').empty();
    // refresh a total amount of the USER basket
    $('.cart__qnt').html(this.countGoods);

    /*if (this.countGoods === 0) {
      $("#cart-drop").hide();
    }*/
    /*// popup function for miniBasket
    $('.cart').off().on('click', function () {
      let $dropCart = $('#cart-drop');
      if ($dropCart.is(':visible')) {
        $dropCart.slideUp(500);
      } else {
        $dropCart.slideDown(700);
      }
    });*/
  }


  /**
   * getting data from a basket/order tables by a request
   */
  getItems() {
    // clear variables
    this.countGoods = 0;
    this.totalPrice = 0;

    $.ajax({
      type: 'GET',
      url: '/basket/get/',
      dataType: 'json',
      context: this,
      success: function (data) {
        let arr = data.basket;
        console.log(`содержимое корзины из БД`, arr);
        for (let i = 0; i < arr.length; i++) {
          this.countGoods = this.countGoods + parseFloat(arr[i].amount);
          this.totalPrice = this.totalPrice + parseFloat(arr[i].price * arr[i].amount);
        }
        this.basketItems = arr;
        this.miniBasketRender();
        this.fullPageBasketRender();
        // hide the MINI basket prior to show
        /*$("#cart-drop").hide();*/

      },
      error: function (error) {
        console.log('Что-то пошло не так при получении корзины', error);
      }
    });

  }


  /**
   * to add a product to the USER order
   * @param $id
   * @param $name
   * @param $price
   */
  add($id, $name, $price) {
    //console.log(`нажата кнопка добавить с ID = `, $id);
    $.ajax({
      type: 'POST',
      url: '/basket/add/',
      dataType: 'json',
      context: this,
      data: {
        $id: $id,
        $name: $name,
        $price: $price,
      },
      cache: false,
      success: function (data) {
        console.log(`ответ от БД при добавлении товара`, data);
        this.getItems();
      },
      error: function (error) {
        console.log('Что-то пошло не так при добавлении товара', error);
      }
    });
  }


  /**
   * to delete the product from the USER basket
   * @param $id
   */
  remove($id) {

    console.log(`нажата кнопка удалить с ID = `, $id);

    $.ajax({
      type: 'POST',
      url: '/basket/delete/',
      dataType: 'json',
      context: this,
      data: {
        $id: $id,
      },
      cache: false,
      success: function (data) {
        console.log(`ответ от БД при удалении товара`, data);
        this.getItems();
      },
      error: function (error) {
        console.log('Что-то пошло не так при удалении товара', error);
      }
    });
  }

  /**
   * to subtract the product from the USER basket
   * @param $id
   */
  subtract($id) {

    console.log(`нажата кнопка минус с ID = `, $id);

    $.ajax({
      type: 'POST',
      url: '/basket/subtract/',
      dataType: 'json',
      context: this,
      data: {
        $id: $id,
      },
      cache: false,
      success: function (data) {
        console.log(`ответ от БД при отнимании товара`, data);
        this.getItems();
      },
      error: function (error) {
        console.log('Что-то пошло не так при отнимании товара', error);
      }
    });
  }

  /**
   * likes adding function
   * @param $idProduct
   */
  like($idProduct) {
    //TODO
  }


  /**
   * add/del/like buttons handler
   */
  eventHandlerForButtons() {
    let self = this;

    // "Add to cart" button on product card
    $(document).on('click', '.product-cards__cart-btn', function () {
      let idProduct = $(this).attr('data-id');
      let price = $(this).attr('data-price');
      let name = $(this).attr('data-name');
      console.log(`"Add to cart" button pressed`, idProduct);
      self.add(idProduct, name, price);
    });
    // "Add to cart" button in MINI basket
    $(document).on('click', '.cart-product__plus', function () {
      let idProduct = $(this).attr('data-id');
      let price = $(this).attr('data-price');
      let name = $(this).attr('data-name');
      console.log(`"Add to cart" button pressed`, idProduct);
      self.add(idProduct, name, price);
    });

    // "delete" buttons on product card
    $(document).on('click', '.product-cards__reset-btn', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`"delete" button pressed`, idProduct);
      self.remove(idProduct);
    });
    // "delete" buttons in MINI basket
    $(document).on('click', '.cart-product__delete', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`MINI basket "delete" button pressed`, idProduct);
      self.remove(idProduct);
    });

    // "subtract" buttons in MINI basket
    $(document).on('click', '.cart-product__minus', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`MINI basket "delete" button pressed`, idProduct);
      self.subtract(idProduct);
    });

    // "like" button on product card
    $(document).on('click', '.product-cards__like-btn', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`"like" button pressed`, idProduct);
      self.like(idProduct);
    });

  }
}

