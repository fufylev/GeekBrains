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

const API = 'responses';

class List {
    constructor( url, container ) {
        this.container = container;
        this.url = url;
        this.data = [];
        this.allProducts = [];
        this.filtered = [];
        this.productsCountAll = 0;
        this.productsSummAll = 0;
        this._init();
    }
    
    getJson( url ) {
        return fetch( url ? url : `${ API + this.url }` )
            .then( result => result.json() )
            .catch( error => console.log( error ) );
    }
    
    handleData( data ) {
        this.data = [ ...data ];
        this.render();
    }
    
    calcSum() {
        return this.allProducts.reduce( ( accum, item ) => accum += item.price, 0 );
    }
    
    getItem( id ) {
        return this.allProducts.find( el => el.id_product === id );
    }
    
    render() {
        const block = document.querySelector( this.container );
        for ( let product of this.data ) {
            const prod = new lists[ this.constructor.name ]( product );
            this.allProducts.push( prod );
            block.insertAdjacentHTML( 'beforeend', prod.render() );
        }
        document.querySelector( '.cart-shipping' ).textContent = `Shipping: $${ Math.floor( this.productsSummAll / 100 ) }`;
        document.querySelector( '.cart-total' ).textContent = `Total: $${ this.productsSummAll }`;
        document.querySelector( '.cart__text_content' ).textContent = `${ this.productsCountAll } ${ correctEndOfWord.operation( this.productsCountAll, [ 'item', 'items', 'items' ] ) } $${ this.productsSummAll }`;
        
    }
    
    filter( value ) {
        const regexp = new RegExp( value, 'i' );
        this.filtered = this.allProducts.filter( el => regexp.test( el.product_name ) );
        this.allProducts.forEach( el => {
            const block = document.querySelector( `.product-item[data-id="${ el.id_product }"]` );
            if ( this.filtered.includes( el ) ) {
                block.classList.remove( 'invisible' )
            } else {
                block.classList.add( 'invisible' )
            }
        } )
    }
    
    _init() {
        return false
    }
}

class Item {
    constructor( el, img = `https://placehold.it/200x200` ) {
        this.product_name = el.product_name;
        this.price = el.price;
        this.id_product = el.id_product;
        this.img = el.url;
    }
    
    render() {
        return `<div class="product-item" data-id="${ this.id_product }">
                  <img src="${ this.img }" alt="${ this.product_name }" class='product-item__img'>
                  <div class='product-item__price'>
                  <span class='product-item__price-text'>$${ this.price }</span></div>
                  <div class='product-item__desc'>
                      <h3 class='product-item__name'>${ this.product_name }</h3>
                      <div class="product-item__btns">
                        <div class="buy-btn" data-id="${ this.id_product }" onselectstart="return false" onmousedown="return false">ADD TO CART</div>
                        <a href="#" class="product-item__btns-icon"><i class="fas fa-heart"></i></a>
                        <a href="#" class="product-item__btns-icon"><i class="fas fa-check-square"></i></a>
                      </div>
                  </div>
              </div>`
    }
}

class ProductsList extends List {
    constructor( cart, url = '/catalogData.json', container = '.products' ) {
        super( url, container );
        this.cart = cart;
        this.getJson()
            .then( data => this.handleData( data ) );
    }
    
    _init() {
        document.querySelector( this.container ).addEventListener( 'click', e => {
            if ( e.target.classList.contains( 'buy-btn' ) ) {
                let id = +e.target.dataset[ 'id' ];
                cart.addProduct( this.getItem( id ) )
            }
        } );
        document.querySelector( '.search-form' ).addEventListener( 'submit', e => {
            e.preventDefault();
            this.filter( document.querySelector( '.search-field' ).value );
        } );
        document.querySelector( '.search__form' ).addEventListener( 'submit', e => {
            e.preventDefault();
            this.filter( document.querySelector( '.search__field' ).value );
        } )
    }
}


class ProductItem extends Item {
}

class Cart extends List {
    constructor( url = '/getBasket.json', container = '.cart-block_container' ) {
        super( url, container );
        
        this.getJson()
            .then( data => this.handleData( data.contents ) );
    }
    
    addProduct( product ) {
        this.getJson( `${ API }/addToBasket.json` )
            .then( data => {
                if ( data.result ) {
                    this.productsSummAll += product.price;
                    this.productsCountAll++;
                    console.log( this.productsCountAll, this.productsSummAll );
                    let find = this.allProducts.find( el => el.id_product === product.id_product );
                    if ( find ) {
                        find.quantity++;
                        this._updateCart( find );
                    } else {
                        let prod = Object.assign( { quantity: 1 }, product );
                        this.data = [ prod ];
                        this.render();
                    }
                } else {
                    console.log( 'Error!' );
                }
            } )
    }
    
    removeProduct( element ) {
        this.getJson( `${ API }/deleteFromBasket.json` )
            .then( data => {
                if ( data.result ) {
                    let id = +element.dataset[ 'id' ];
                    let find = this.allProducts.find( el => el.id_product === id );
                    this.productsSummAll -= find.price;
                    this.productsCountAll--;
                    console.log( this.productsCountAll, this.productsSummAll );
                    if ( find.quantity > 1 ) {
                        find.quantity--;
                        this._updateCart( find );
                        this._updateCartSum();
                    } else {
                        this.allProducts.splice( this.allProducts.indexOf( find ), 1 );
                        document.querySelector( `.cart-item[data-id="${ id }"]` ).remove();
                        this._updateCartSum();
                    }
                } else {
                    console.log( 'Error!' );
                }
            } )
    }
    
    _updateCart( product ) {
        let block = document.querySelector( `.cart-item[data-id="${ product.id_product }"]` );
        block.querySelector( '.cart__product-quantity' ).textContent = `${ product.quantity }`;
        
        
    }
    
    _updateCartSum() {
        document.querySelector( '.cart-shipping' ).textContent = `Shipping: $${ Math.floor( this.productsSummAll / 100 ) }`;
        document.querySelector( '.cart-total' ).textContent = `Total: $${ this.productsSummAll }`;
        document.querySelector( '.cart__text_content' ).textContent = `${ this.productsCountAll } ${ correctEndOfWord.operation( this.productsCountAll, [ 'item', 'items', 'items' ] ) } $${ this.productsSummAll }`;
    }
    
    _init() {
        document.querySelector( this.container ).addEventListener( 'click', e => {
            if ( e.target.classList.contains( 'del-btn' ) ) {
                this.removeProduct( e.target );
            }
        } );
        document.querySelector( '.cart__text' ).addEventListener( 'click', () => {
            document.querySelector( '.cart-block' ).classList.toggle( 'invisible' );
        } )
    }
}

class CartItem extends Item {
    constructor( el, img = `https://placehold.it/50x100` ) {
        super( el, img );
        this.quantity = el.quantity;
        this.img = el.img;
        this.itemses = el;
    }
    
    render() {
        console.log( this.itemses );
        return `<div class="cart-item" data-id="${ this.id_product }">
                    <div class="cart__product">
                        <img src="${ this.img }" alt="Some image" class="cart__product-img">
                        <div class="cart__product-desc">
                            <p class="cart__product-title">${ this.product_name }</p><br>
                            <span class="cart__product-quantity">${ this.quantity } x </span>
                            <span class="cart__product-single-price">$${ this.price }</span>
                        </div>
                    </div>
                    <div class="cart__product-del del-btn"
                    data-id="${ this.id_product }" onselectstart="return false" onmousedown="return false">
                    &times;</div>
                 </div>`
    }
}

let lists = {
    ProductsList: ProductItem,
    Cart: CartItem
};
const cart = new Cart();
const products = new ProductsList( cart );
const cartResult = `<div class="cart-number">
                            <div class="cart-shipping"></div>
                            <div class="cart-total"></div>
                        </div>
                        <div class="cart-btns">
                            <div class="cart-page"><a href="#" class="cart-page_link">CART</a></div>
                            <div class="cart-check"><a href="#" class="cart-check_link">CHECKOUT</a></div>
                        </div>`;
document.querySelector( '.cart-block-sum_container' ).insertAdjacentHTML( 'beforeend', cartResult );
//products.getJson(`getProducts.json`).then(data => products.handleData(data));