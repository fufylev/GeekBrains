const cartItem = {
    props: ['cartItem', 'img'],
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
};
export const cart = {
    data(){
        return {
            cartUrl: `/getBasket.json`,
            showCart: false,
            cartItems: [],
            imgCart: `https://placehold.it/50x100`
        }
    },
    components: {
      'cart-item': cartItem
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result){
                            find.quantity++
                        }
                    })
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson(`api/cart`, prod)
                    .then(data => {
                        if(data.result){
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(product){
            if(product.quantity > 1){
                this.$parent.putJson(`/api/cart/${product.id_product}`, {quantity: -1})
                    .then(data => {
                        if(data.result){
                            product.quantity--
                        }
                    })
            } else {
                this.$parent.deleteJson(`/api/cart/${product.id_product}`)
                    .then(data => {
                        if(data.result){
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        }
                    })
            }
        },
    },
    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el)
                }
            });
    },
    template: `<div>
<button class="btn-cart" type="button" @click='showCart = !showCart'>Корзина</button>
<div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Cart is empty</p>
                <cart-item 
                v-for="item of cartItems" 
                :key="item.id_product"
                :cart-item="item"
                :img="imgCart"
                @remove="remove"></cart-item>
            </div>
</div>`
};