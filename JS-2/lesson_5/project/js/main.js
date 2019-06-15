const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/*1. Добавить методы и обработчики событий для поля поиска.
Создать в объекте данных поле searchLine и привязать к нему содержимое поля ввода.
На кнопку «Искать» добавить обработчик клика, вызывающий метод FilterGoods.
2. Добавить корзину. В html-шаблон добавить разметку корзины.
Добавить в объект данных поле isVisibleCart, управляющее видимостью корзины.
3. *Добавлять в .goods-list заглушку с текстом «Нет данных» в случае, если список товаров пуст.*/

const app = new Vue( {
    el: '#app',
    data: {
        isVisibleCart: false,
        searchLine: '',
        catalogUrl: `/catalogData.json`,
        products: [],
        cartItems: [],
        isCartFull: false,
        cartProductsCount: 0,
        cartProductsSum: 0,
        countDeclination: '',
        priceDeclination: '',
        imgCatalog: `https://placehold.it/200x150`,
        imgCart: `https://placehold.it/50x70`,
    },
    methods: {
        getJson( url ) {
            return fetch( url )
                .then( result => result.json() )
                .catch( error => console.log( error ) )
        },
        addProduct( product ) {
            this.getJson( `${ API }/addToBasket.json` )
                .then( data => {
                    if ( data.result ) {
                        let find = this.cartItems.find( el => el.id_product === product.id_product );
                        this.cartProductsCount++;
                        this.cartProductsSum += product.price;
                        if ( find ) {
                            find.quantity++;
                            
                            //this._updateCart( find );
                        } else {
                            let prod = Object.assign( { quantity: 1 }, product );
                            this.cartItems.push( prod );
                            
                            //this.render();
                        }
                        this.isCartFull = !!this.cartItems.length;
                       
                        //console.log( this.cartProductsCount, this.cartProductsSum );
                    } else {
                        console.log( 'Error!' );
                    }
                } )
        },
        removeProduct( product ) {
            this.getJson( `${ API }/deleteFromBasket.json` )
                .then( data => {
                    if ( data.result ) {
                        let id = +product.id_product;
                        //console.log( `id - ${id}` );
                        let find = this.cartItems.find( el => el.id_product === id );
                        this.cartProductsCount--;
                        this.cartProductsSum -= product.price;
                        if ( find.quantity > 1 ) {
                            find.quantity--;
                        } else {
                            this.cartItems.splice( this.cartItems.indexOf( find ), 1 );
                        }
                        this.isCartFull = !!this.cartItems.length;
                        
                        //console.log( this.cartProductsCount, this.cartProductsSum );
                    } else {
                        console.log( 'Error!' );
                    }
                } )
        },
        FilterGoods( value ) {
            const regexp = new RegExp( value, 'i' );
            this.filtered = this.products.filter( el => regexp.test( el.product_name ) );
            this.products.forEach( el => {
                const block = document.querySelector( `.product-item[data-id="${ el.id_product }"]` );
                if ( this.filtered.includes( el ) ) {
                    block.classList.remove( 'invisible' )
                } else {
                    block.classList.add( 'invisible' )
                }
            } )
        },
        init() {
            document.querySelector( '.search-form' ).addEventListener( 'submit', e => {
                e.preventDefault();
            } );
            if ( this.cartItems.length ) {
                this.isCartFull = true;
            }
        },
        correctWord( value, words ) {
            let cases = [ 2, 0, 1, 1, 1, 2 ];
            return words[ ( value % 100 > 4 && value % 100 < 20 ) ? 2 : cases[ ( value % 10 < 5 ) ? value % 10 : 5 ] ];
        },
    },
    mounted() {
        this.init();
        this.getJson( `${ API + this.catalogUrl }` )
            .then( data => {
                for ( let el of data ) {
                    this.products.push( el )
                }
            } );
        this.getJson( `getProducts.json` )
            .then( data => {
                for ( let el of data ) {
                    this.products.push( el )
                }
            } );
        
    }
} );