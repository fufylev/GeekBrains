/*1. Переделайте makeGETRequest() так, чтобы она использовала промисы.*/

/*let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest();
    // window.ActiveXObject ->  xhr = new ActiveXObject();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
            if(xhr.status !== 200){
                console.log('error')
            } else {
                cb(xhr.responseText)
            }
        }
    }
};*/

let getRequest = ( url ) => {
    let xhr = new XMLHttpRequest();
    console.log( xhr );
    return new Promise( ( resolve, reject ) => {
        xhr.open( 'GET', url, true );
        console.log( xhr.readyState );
        console.log( xhr.status );
        xhr.onreadystatechange = () => {
            if ( xhr.readyState === 4 ) {
                if ( xhr.status !== 200 ) {
                    reject( 'Error!!!' );
                } else {
                    resolve( xhr );
                }
            }
        }
    } )
};

getRequest( 'responses/catalogData.json' )
    .then( ( data ) => {
        console.log( `Ответ отсервака - ${ data.responseText }` );
    } )
    .catch( ( error ) => {
        console.log( error )
    } );

/* 2. Добавьте в соответствующие классы методы добавления товара в корзину, удаления товара из корзины и получения списка товаров корзины.*/
const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor( container = '.products' ) {
        this.data = [];
        this.container = container;
        this.productsAll = [];
        this._getProducts()
            .then( () => {
                this._render();
                this._eventHandlerForButtons();
            } );
    }
    
    _getProducts() {
        return fetch( 'responses/catalogData.json' )
            .then( result => result.json() )
            .then( data => {
                this.data = data;
            } )
            .catch( error => console.log( error ) );
    }
    
    /*calcSum(){
        // let result = 0;
        // for (let product of this.productsAll) {
        //     result += product.price
        // }
        // return result
        return this.productsAll.reduce((accum, item) => accum += item.price, 0);
    }*/
    _render() {
        const block = document.querySelector( this.container );
        for ( let product of this.data ) {
            const prod = new ProductItem( product );
            this.productsAll.push( prod );
            block.insertAdjacentHTML( 'beforeend', prod.render() );
        }
    }
    
    /**
     * Метод навешивания обработчика на кнопки в карточках товаров - я проверил - всё работает
     */
    _eventHandlerForButtons() {
        const addBtn = document.querySelectorAll( '.buy-btn' );
        for ( let i = 0; i < addBtn.length; i++ ) {
            addBtn[ i ].addEventListener( 'click', event => cart.increment(
                +event.target.dataset.id,
                event.target.dataset.name,
                +event.target.dataset.price,
                event.target.dataset.url
            ) );
        }
    }
}


class ProductItem {
    constructor( product ) {
        this.product_name = product.product_name;
        this.price = product.price;
        this.id_product = product.id_product;
        this.img = product.img_url;
        
    }
    
    render() {
        return `<div class="product-item">
                  <img src="${ this.img }" alt="${ this.product_name }">
                  <div class="desc">
                      <h3>${ this.product_name }</h3>
                      <p>${ this.price } руб.</p>
                      <button class="buy-btn"
                                data-id="${ this.id_product }"
                                data-name="${ this.product_name }"
                                data-price="${ this.price }"
                                data-url="${ this.img }">Купить</button>
                  </div>
              </div>`
    }
}

class Cart {
    constructor() {
        this.countGoods = 0; //Общая стоимость товаров
        this.totalPrice = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров
        this.container = '.cart-content'; // контейнер для корзины
        this.productsAll = [];
        this._getBasket()
            .then( () => {
                this.init();
            } );
    }
    
    init() {
        this._render(); // отрисовываем корзину
        this._eventHandlerForButtons();
    }
    
    /**
     * метод получения списка товаров в корзине
     * @returns {Promise<any | void>}
     * @private
     */
    _getBasket() {
        return fetch( 'responses/getBasket.json' )
            .then( result => result.json() )
            .then( data => {
                this.basketItems = data;
                this.countGoods = data.countGoods;
                this.totalPrice = data.totalPrice;
            } )
            .catch( error => console.log( error ) );
    }
    
    /**
     * метод отрисовки корзины
     */
    _render() {
        document.querySelector( this.container ).innerHTML = "";
        const block = document.querySelector( this.container );
        for ( let product of this.basketItems.basket ) {
            const prod = new CartItem( product );
            this.productsAll.push( prod );
            block.insertAdjacentHTML( 'beforeend', prod.render() );
        }
        let outlet = `<div>В корзине <span class="red">${ this.countGoods }</span>  ${ CorrectEndOfWord.operation( this.countGoods, [ 'товар', 'товара', 'товаров' ] ) }
                        на сумму <span class="red">${ this.totalPrice } </span>  ${ CorrectEndOfWord.operation( this.totalPrice, [ 'рубль', 'рубля', 'рублей' ] ) }
                      </div> `;
        block.insertAdjacentHTML( 'beforeend', outlet );
    }
    
    increment( id, name, price, url ) {
        //console.log( id, name, price, url  );
        let isInBasket = false;
        // проверяем если ли товар в корзине, по умолчанию false
        for ( let item of this.basketItems.basket ) {
            if ( +item.id_product === +id ) {
                isInBasket = true; // товар есть в корзине
                // увеличиваем данные по товару в корзине и пересчитываем сумму
                +item.product_amount++;
                item.totalSum = parseInt( item.totalSum ) + parseInt( item.price );
                this.countGoods++;
                this.totalPrice = parseInt( this.totalPrice ) + parseInt( item.price );
            }
        }
        if ( !isInBasket ) {
            let basketItem = {
                "id_product": id,
                "product_name": name,
                "price": price,
                "product_amount": 1,
                "totalSum": price,
                "img_url": url,
                "page_url": ''
            };
            this.basketItems.basket.push( basketItem );
            this.countGoods++;
            this.totalPrice = parseInt( this.totalPrice ) + parseInt( price );
        }
        this.init();
    }
    
    /**
     * Метод уменьшения кол-ва данного товара в корзине на одну единицу
     * @param id
     */
    decrement( id, name, price, url ) {
        //console.log( id, name, price, url  );
        let i = 0;
        for ( let item of this.basketItems.basket ) {
            //console.log( `${ i } элемент в массиве`, this.basketItems[ i ].id_product );
            //let el = parseInt( this.basketItems[ i ].id_product );
            if ( item.id_product === +id ) {
                
                this.totalPrice -= item.price;
                this.countGoods--;
                item.product_amount--;
                item.totalSum -= item.price;
                if ( item.product_amount <= 0 ) {
                    this.basketItems.basket.splice( i, 1 )
                }
            }
            i++;
        }
        //console.log( `новый массив`, this.basketItems );
        this.init();
    }
    
    /**
     * Метод удаления всей позиции данного товара из корзины
     * @param id
     */
    remove( id ) {
    }
    
    _eventHandlerForButtons() {
        
        const incrementBtn = document.querySelectorAll( '.increment-btn' );
        for ( let i = 0; i < incrementBtn.length; i++ ) {
            incrementBtn[ i ].addEventListener( 'click', event => cart.increment(
                +event.target.dataset.id,
                event.target.dataset.name,
                +event.target.dataset.price,
                event.target.dataset.url
            ) );
        }
        
        const decrementBtn = document.querySelectorAll( '.decrement-btn' );
        for ( let i = 0; i < decrementBtn.length; i++ ) {
            decrementBtn[ i ].addEventListener( 'click', event => cart.decrement(
                +event.target.dataset.id,
                event.target.dataset.name,
                +event.target.dataset.price,
                event.target.dataset.url
            ) );
        }
    }
}

class CartItem {
    constructor( product ) {
        this.product_name = product.product_name;
        this.product_amount = product.product_amount;
        this.price = product.price;
        this.totalSum = product.totalSum;
        this.id_product = product.id_product;
        this.img = product.img_url;
    }
    
    render() {
        return `<div class="cart-item">
                  <img src="${ this.img }" alt="${ this.product_name }" class="cart-item-img">
                  <div class="cart-desc">
                      <h3 class="cart-name">${ this.product_name }</h3>
                      <div class="cart-options">
                          <span class="decrement-btn"
                                    data-id="${ this.id_product }"
                                    data-name="${ this.product_name }"
                                    data-price="${ this.price }"
                                    data-url="${ this.img }">-</i></span>
                          <span class="cart-amount">&emsp;${ this.product_amount } шт.&emsp;</span>
                          <span class="increment-btn"
                                    data-id="${ this.id_product }"
                                    data-name="${ this.product_name }"
                                    data-price="${ this.price }"
                                    data-url="${ this.img }">+</span>
                      </div>
                      <span class="cart-price">${ this.price } руб.</span><br>
                      <span class="cart-price">Итого: ${ this.totalSum } руб.</span>
                  </div>
              </div>`
    }
}

const products = new ProductsList();
const cart = new Cart();