'use strict';

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
  }

  render() {
    this.$container.empty(); //сразу очищаем контейнер корзины


    let $bascketContainer = $('<div />', {//контейнер для мини-карточек корзины
      class: 'bascket_container',
    });

    for (let i = 0; i < this.basketItems.length; i++) {
      let $block1 = $(`<div class="cart-product" data-id="${this.basketItems[i].id_product}"><a href="${this.basketItems[i].page_url}"><img src="${this.basketItems[i].img_url}" alt="${this.basketItems[i].product_name}" class="cart-product__pic"></a><div class="cart-product__content"><h2 class="cart-product__headline">${this.basketItems[i].product_name}</h2><p class="cart-product__stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></p><p class="cart-product__price">${this.basketItems[i].product_amount}&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;${this.basketItems[i].price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total&nbsp;&nbsp;${this.basketItems[i].totalSum}$</p></div><div class="cart-product__delete" data-id="${this.basketItems[i].id_product}"><i class="fas fa-times-circle"></i></div></div>`);

      $block1.appendTo($bascketContainer);
    }

    $bascketContainer.appendTo(this.$container);

    let $block2 = $(`<p class="cart-product__total"><span class="cart-product__total-price">TOTAL</span><span class="cart-product__total-price">${this.totalPrice}.00</span></p><a href="check_out.php" class="cart-product__button cart-product__button_pink">Checkout</a><a href="basket.php" class="cart-product__button cart-product__button_black">Go to cart</a>`);
    $block2.appendTo(this.$container);

    $('.cart__qnt').empty();
    $('.cart__qnt').html(this.countGoods);

    if (this.totalPrice === 0) {
      $("#cart-drop").hide();
    }

    // drop for miniBasket
    $('.cart').off().on('click', function () {
      let $dropCart = $('#cart-drop');
      if ($dropCart.is(':visible')) {
        $dropCart.slideUp(500);
      } else {
        $dropCart.slideDown(700);
      }
    });
  }

  getItems() {
    this.countGoods = 0;
    this.totalPrice = 0;
    $.ajax({
      type: 'GET',
      url: './cart.php',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(`содержимое корзины из БД`, data);

        for (let key in data) {
          this.countGoods = this.countGoods + parseInt(data[key].product_amount);
          this.totalPrice = this.totalPrice + parseInt(data[key].price * data[key].product_amount);
        }
        this.basketItems = data;
        console.log(`содержимое корзины для первоначального рендера`, this.basketItems);
        console.log(`Общее кол-во товаров`, this.countGoods);
        console.log(`Общая стоимость товаров`, this.totalPrice);

        this.render();// отрисовываем товар в корзину

        $("#cart-drop").hide();

      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });

  }

  add($idProduct) {
    console.log(`нажата кнопка с ID = `, $idProduct);

    $.ajax({
      type: 'GET',
      url: './buy.php',
      dataType: 'json',
      context: this,
      data: {
        $idProduct: $idProduct,
      },
      success: function (data) {
        console.log(`ответ от БД `, data);
        this.getItems();
      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }

  remove($idProduct) {

    console.log(`нажата кнопка с ID = `, $idProduct);

    $.ajax({
      type: 'GET',
      url: './product_delete.php',
      dataType: 'json',
      context: this,
      data: {
        $idProduct: $idProduct,
      },
      success: function (data) {
        console.log(`ответ от БД `, data);
        this.getItems();
      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }

  eventHandlerForButtons() {
    let th = this;
    //Добавление товара в корзину
    $(document).on('click', '.product-cards__cart-btn', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`нажал на добавление товара`, idProduct);
      th.add(idProduct);
    });
    //Удаление товара из корзину
    $(document).on('click', '.product-cards__reset-btn', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`нажал на удаление товара`, idProduct);
      th.remove(idProduct);
    });
    $(document).on('click', '.cart-product__delete', function () {
      let idProduct = $(this).attr('data-id');
      console.log(`нажал на удаление товара крестиком`, idProduct);
      th.remove(idProduct);
    });
  }
}

