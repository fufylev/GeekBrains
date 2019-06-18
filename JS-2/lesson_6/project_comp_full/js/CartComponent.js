Vue.component( 'cart', {
    data() {
        return {
            cartUrl: `/getBasket.json`,
            showCart: false,
            cartItems: [],
            isActive: true,
            imgCart: `https://placehold.it/50x100`
        }
    },
    computed: {
        cartCount() {
            return this.cartItems.reduce((accum, item) => accum += item.quantity, 0);
        },
        cartSum() {
            return this.cartItems.reduce((accum, item) => accum += (item.quantity * item.price), 0);
        }
    },
    methods: {
        addProduct( product ) {
            this.$parent.getJson( `${API}/addToBasket.json` )
                .then( data => {
                    if ( data.result ) {
                        let find = this.cartItems.find( el => el.id_product === product.id_product );
                        if ( find ) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign( { quantity: 1 }, product );
                            this.cartItems.push( prod );
                        }
                    } else {
                        this.$root.$refs.error.showError('Ошибка добавления в корзину');
                    }
                } )
        },
        remove( product ) {
            this.$parent.getJson( `${API}/deleteFromBasket.json` )
                .then( data => {
                    if ( data.result ) {
                        if ( product.quantity > 1 ) {
                            product.quantity--;
                        } else {
                            this.cartItems.splice( this.cartItems.indexOf( product ), 1 );
                        }
                    } else {
                        this.$root.$refs.error.showError('Ошибка удаления из корзины');
                    }
                } )
        },
        show() {
            this.isActive = true;
            console.log(this.isActive);
        },
        hide() {
            this.isActive = false;
        }
    },
    mounted() {
        this.$parent.getJson( `${ API + this.cartUrl }` )
            .then( data => {
                for ( let el of data.contents ) {
                    this.cartItems.push( el )
                }
            } );
    },
    template: `<div>
                    <button class="btn-cart" type="button" @click='showCart = !showCart'>Корзина</button>
                    <transition name="scale">
                        <div id="cart-block" v-show="showCart">
                                        <p v-if="!cartItems.length">Корзина пуста</p>
                                        <cart-item
                                        v-for="item of cartItems"
                                        :key="item.id_product"
                                        :cart-item="item"
                                        :img="imgCart"
                                        @remove="remove"></cart-item>
                                        <p v-if="cartItems.length">{{ cartCount }} {{ $root.correctWord(cartCount, [ 'товар', 'товара', 'товаров' ]) }}
                                        на сумму {{ cartSum }} {{ $root.correctWord(cartSum, [ 'рубль', 'рубля', 'рублей' ]) }}</p>
                        </div>
                    </transition>
                    
               </div>`
} );

Vue.component( 'cart-item', {
    props: [ 'cartItem', 'img' ],
    template: `<div class="cart-item">
                <div class="product-bio">
                    <img :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Quantity: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}} each</p>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">{{cartItem.quantity*cartItem.price}}</p>
                    <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                </div>
            </div>`
} );

/*Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
        this.event = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                vnode.context[binding.expression](event);
            }
        };
        document.body.addEventListener('click', this.event)
    },
    unbind: function (el) {
        document.body.removeEventListener('click', this.event)
    },
});*/
/*
new Vue({
    el: "#cart-block",
    data: {
        isActive: true
    },
    methods: {
        show: function() {
            this.isActive = true;
        },
        hide: function() {
            this.isActive = false;
        }
    }
});*/
