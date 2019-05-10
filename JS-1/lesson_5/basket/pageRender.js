"use strict";

/**
 * Рендер всех элементов на странице
 * @type {{container: HTMLElement, renderBasket(): void, renderGoods(): void}}
 */
const pageRender = {
    
    container: document.getElementById( 'container' ),
    
    /**
     * рендер товаров на нативном JS без хитростей - вспомнил как это делается по старинке
     */
    renderGoods() {
        
        let cartGrid = document.createElement( 'div' );
        cartGrid.classList.add( 'cart-grid' );
        
        // прогоняем через цикл массив товаров
        for ( let i = 0; i < goods.goods.length; i++ ) {
            
            let cartBox = document.createElement( 'div' );
            cartBox.classList.add( 'cart-box' );
            cartGrid.appendChild( cartBox );
            
            let img = document.createElement( 'img' );
            img.classList.add( 'cart-box_pic' );
            img.setAttribute( 'src', `${ goods.goods[ i ].img }` );
            cartBox.appendChild( img );
            
            let capture = document.createElement( 'div' );
            cartBox.appendChild( capture );
            
            let name = document.createElement( 'p' );
            name.classList.add( 'name' );
            name.textContent = `${ goods.goods[ i ].name }`;
            capture.appendChild( name );
            
            let price = document.createElement( 'p' );
            price.classList.add( 'price' );
            price.textContent = `Цена ${ goods.goods[ i ].price } руб`;
            capture.appendChild( price );
            
            let br = document.createElement( 'br' );
            cartBox.appendChild( br );
            
            let button = document.createElement( 'button' );
            button.textContent = 'Купить';
            button.setAttribute( 'data-price', `${ goods.goods[ i ].price }` );
            button.setAttribute( 'data-name', `${ goods.goods[ i ].data_name }` );
            button.classList.add( 'buy-btn' );
            cartBox.appendChild( button );
            
            cartGrid.appendChild( cartBox );
        }
        this.container.appendChild( cartGrid );
    },
    
    /**
     * А ТУТ Я ПОШЁЛ ПО ЛЕГКОМУ ПУТИ - вставил готовый кусок кода через косые кавычки
     */
    renderBasket() {
        let basket =
            `<div id="basket" class="cart-calculation cart-grid">
                <div>
                  <p class="qnt">Количество товаров: &emsp;<span id="basket-count">Корзина пустая</span>&ensp; </p>
                  <p class="sum">На сумму:&emsp;<span id="basket-price">0</span> &ensp;руб</p>
                </div>
                <div>
                  <p class="name">В корзину добавлен:&emsp;<span id="basket-goodName">0</span> &ensp;</p>
                  <p class="price">Cо стоимостью&emsp;<span id="basket-goodPrice">0</span> &ensp;руб</p>
                </div>
            </div>`;
        this.container.insertAdjacentHTML( 'afterend', basket );
    },
};