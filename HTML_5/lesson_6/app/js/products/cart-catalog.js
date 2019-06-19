/**
 * добавил класс со статическим методом для правильного вывода окончания слова при разном кол-ве
 * @param value - какое число обрабатываем
 * @param words - массив слов которые надо обработать
 * @returns {*} - возвращаем слово с правильным окончанием
 */
class correctEndOfWord {
    constructor() {
    }
    
    static operation( value, words ) {
        return declOfNum( value, words );
        
        function declOfNum( number, words ) {
            let cases = [ 2, 0, 1, 1, 1, 2 ];
            return words[ ( number % 100 > 4 && number % 100 < 20 ) ? 2 : cases[ ( number % 10 < 5 ) ? number % 10 : 5 ] ];
        }
    }
}

class ProductsList {
    constructor( container = '.products' ) {
        this.data = [];
        this.container = container;
        this.productsAll = [];
        this.totalPrice = 0;
        this.countGoods = 0;
        this.init();
    }
    
    init() {
        this._fetchProducts();
        this._render();
        //this._totalPriceAll();
    }
    
    _fetchProducts() {
        this.data = [
            {id: 1, title: 'Canon Ef 24 70mm', price: 582},
            {id: 2, title: 'Samsung Galaxy Ace', price: 435},
            {id: 3, title: 'Iphone Case Cover Original', price: 19},
            /*{id: 4, title: 'PowerMac Desktop Computer', price: 1050},
            {id: 5, title: 'Cam Optia AF Webcam', price: 710},
            {id: 6, title: 'Cuisinart Brew Central Coffeemaker', price: 168},*/
        ];
    }
    
    _render() {
        const block = document.querySelector( this.container );
        for ( let product of this.data ) {
            const prod = new ProductItem( product );
            this.productsAll.push( prod );
            block.insertAdjacentHTML( 'beforeend', prod.render() );
        }
    }
    
    /*_totalPriceAll() {
        const block = document.querySelector( this.container );
        for ( let item of this.productsAll ) {
            this.totalPrice += item.price;
            this.countGoods++;
        }
        let outlet = `<div>В каталоге ${ this.countGoods } ${ correctEndOfWord.operation( this.countGoods, [ 'товар', 'товара', 'товаров' ] ) }
                        на сумму ${ this.totalPrice }  ${ correctEndOfWord.operation( this.totalPrice, [ 'рубль', 'рубля', 'рублей' ] ) }
                      </div> `;
        block.insertAdjacentHTML( 'afterend', outlet );
    }*/
}

class ProductItem {
    constructor( product, img = `img/catalog/1408108347447.jpg` ) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img
    }
    
    render() {
        return `<div class="product-item">
                  <img src="${ this.img }" alt="${ this.title }" class='product-item__img'>
                  <div class='product-item__desc'>
                      <h3 class='product-item__name'>${ this.title }</h3>
                      <p class='product-item__price'>$${ this.price }</p>
                      <div class="product-item__btns">
                        <div class="buy-btn" data-id="${ this.id }">ADD TO CART</div>
                        <a href="#" class="product-item__btns-icon"><i class="fas fa-heart"></i></a>
                        <a href="#" class="product-item__btns-icon"><i class="fas fa-check-square"></i></a>
                      </div>
                  </div>
              </div>`
    }
}

class Cart {
    constructor() {
        this.countGoods = 0; //Общая стоимость товаров
        this.totalPrice = 0; //Общая стоимость товаров
        this.basketItems = []; //Массив для хранения товаров
        this.$container = document.querySelector( '.cart' ); // контейнер для корзины
        this.init();
    }
    
    init() {
        this._fetchItems();
        this._render(); // отрисовываем корзину
        this._eventHandlerForButtons();
    }
    
    /**
     * метод получения списка товаров в корзине
     */
    _fetchItems() {
    }
    
    /**
     * метод отрисовки корзины
     */
    _render() {
    }
    
    /**
     * Метод добавления товара в корзину или увеличения на 1 единицу данной позиции товара
     * @param id
     */
    increment( id ) {
        console.log( id ); // уже получаем айдишник товара
    }
    
    /**
     * Метод уменьшения кол-ва данного товара в корзине на одну единицу
     * @param id
     */
    decrement( id ) {
    }
    
    /**
     * Метод удаления всей позиции данного товара из корзины
     * @param id
     */
    remove( id ) {
    }
    
    /**
     * Метод навешивания обработчика на кнопки в карточках товаров - я проверил - всё работает
     */
    _eventHandlerForButtons() {
        const addBtn = document.querySelectorAll( '.buy-btn' );
        for ( let i = 0; i < addBtn.length; i++ ) {
            addBtn[ i ].addEventListener( 'click', event => this.increment( +event.target.dataset.id ) );
        }
    }
    
}

class CartItem {
    constructor( product, img = `https://placehold.it/228x228` ) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img
    }
    
    render() {
        return `<div class="cart-item">
                  <img src="${ this.img }" alt="${ this.title }">
                  <div class="desc">
                      <h3>${ this.title }</h3>
                      <p>${ this.price }</p>
                      <div class="options">
                          <span class="increment-btn" data-id="${ this.id }">+</span>
                          <span>&nbsp;&nbsp;</span>
                          <span class="decrement-btn" data-id="${ this.id }">-</span>
                      </div>
                  </div>
              </div>`
    }
}
$(document).ready( () => {
    const products = new ProductsList('.products');
    const products1 = new ProductsList('.products_second');
//const cart = new Cart();
});


/* 1. Добавьте пустые классы для корзины товаров и элемента корзины товаров. Продумайте, какие методы понадобятся для работы с этими сущностями.
2. Добавьте для каталога метод, определяющий суммарную стоимость всех товаров.
 */