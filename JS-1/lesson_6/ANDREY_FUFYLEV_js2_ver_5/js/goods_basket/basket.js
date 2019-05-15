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

    let $block2 = $(`<p class="cart-product__total"><span class="cart-product__total-price">TOTAL</span><span class="cart-product__total-price">${this.totalPrice}.00</span></p><a href="check_out.html" class="cart-product__button cart-product__button_pink">Checkout</a><a href="shoping_cart_list.html" class="cart-product__button cart-product__button_black">Go to cart</a>`);
    $block2.appendTo(this.$container);

    $('.cart__qnt').empty();
    $('.cart__qnt').html(this.countGoods);

    if (this.totalPrice === 0 ) {
      $("#cart-drop").hide();
    }

    // drop for miniBasket
    $('.cart').off().on('click', function(){
      let $dropCart = $('#cart-drop');
      if($dropCart.is(':visible')){
        $dropCart.slideUp(500)// fadeOut(100);
      } else {
        $dropCart.slideDown(700)// fadeIn(400);
      }
    });
  }

  getItems() {
    $.ajax({
      type: 'GET',
      url: './responses/getBasket.json',
      dataType: 'json',
      context: this,
      success: function (data) {
        console.log(`содержимое корзины из заглушки`, data);
        this.countGoods = data.basket.length;
        console.log(`Общее кол-во товаров`, this.countGoods);
        this.totalPrice = data.total_price;
        console.log(`Общая стоимость товаров`, this.totalPrice);
        for (let key in data.basket) {
          this.basketItems.push(data.basket[key]);
        }
        console.log(`содержимое корзины для первоначального рендера`, this.basketItems);

        this.render();// отрисовываем товар в корзину
        $("#cart-drop").hide();

      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }

  add(idProduct) {
    let index = 0; //
    let isInBasket = false; // проверяем если ли товар в корзине, по умолчанию false

    $.ajax({
      type: 'GET',
      url: './responses/catalogData.json?hash=' + Math.random(),
      dataType: 'json',
      context: this,
      success: function (data) {
        for (let i = 0; i < data.length; i++) {
          if (+data[i].id_product === +idProduct) {
            index = i;
          }
        }
        //console.log(index);
        // проверяем если ли товар в корзине, по умолчанию false
        for (let i = 0; i < this.basketItems.length; i++) {
          if (+this.basketItems[i].id_product === +idProduct) {

            isInBasket = true; // товар есть в корзине
            // увеличиваем данные по товару в корзине и пересчитываем сумму
            +this.basketItems[i].product_amount++;
            this.basketItems[i].totalSum = parseInt(this.basketItems[i].totalSum) + parseInt(this.basketItems[i].price);

            this.countGoods++;
            this.totalPrice = parseInt(this.totalPrice) + parseInt(this.basketItems[i].price);

          }
        }
        //console.log(isInBasket);
        // если товара нет в корзине то добавляем его в массив
        if (!isInBasket) {
          let basketItem = {
            "id_product": data[index].id_product,
            "product_name": data[index].product_name,
            "price": data[index].price,
            "product_amount": 1,
            "totalSum": data[index].price,
            "img_url": data[index].img_url,
            "page_url": data[index].page_url
          };
          console.log(`то что добавляем в корзину`, basketItem);
          this.basketItems.push(basketItem);
          this.countGoods++;
          this.totalPrice = parseInt(this.totalPrice) + parseInt(data[index].price);
        }
        //console.log(this.basketItems);
        this.render();
      },
      error: function (error) {
        console.log('Что-то пошло не так', error);
      }
    });
  }

  remove(idProduct) {

    for (let i = 0; i < this.basketItems.length; i++) {
      console.log(`${i} элемент в массиве`, this.basketItems[i].id_product);
      let el = parseInt(this.basketItems[i].id_product);
      if (el === +idProduct) {
        console.log(`удаляем ${idProduct} из`, this.basketItems);
        this.totalPrice -= this.basketItems[i].totalSum;
        this.countGoods -= this.basketItems[i].product_amount;
        this.basketItems.splice(i, 1);
      }
    }
    console.log(`новый массив`, this.basketItems);
    this.render();

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

