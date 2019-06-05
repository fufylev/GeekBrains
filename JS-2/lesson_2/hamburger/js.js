'use strict';

/*
3. *Некая сеть фастфуда предлагает несколько видов гамбургеров:
### Маленький (50 рублей, 20 калорий).
### Большой (100 рублей, 40 калорий).
### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
### С сыром (+10 рублей, +20 калорий).
### С салатом (+20 рублей, +5 калорий).
### С картофелем (+15 рублей, +10 калорий).
### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) и полить майонезом (+20 рублей, +5 калорий).
### Напишите программу, рассчитывающую стоимость и калорийность гамбургера. Можно использовать примерную архитектуру класса из методички,
 но можно использовать и свою. */

class Hamburger {
    constructor() {
        this.caloriesEl = null;
        this.priceEl = null;
        this.sizeValue = {};
        this.toppingValue = {};
        this.adds = [];
        this.addsValue = {};
        this.init();
    }
    
    /**
     * Инициализирует переменные, навешиваем обработчики событий.
     */
    init() {
        this.priceEl = 0;
        this.caloriesEl = 0;
        this.addsValue.priceCount = 0;
        this.addsValue.caloriesCount = 0;
        
        // Проверяем, что задано по умолчанию
        const checked = document.querySelectorAll( 'input[checked]' );
        
        for ( let i = 0; i < checked.length; i++ ) {
            if ( checked[ i ].name === 'size' ) {
                this.getSize( checked[ i ].dataset.price, checked[ i ].dataset.calories );
            } else if ( checked[ i ].name === 'topping' ) {
                this.getTopping( checked[ i ].dataset.price, checked[ i ].dataset.calories );
            }
        }
        
        this.getSum();
        
        const chooseBurger = document.querySelectorAll( '.choose-burger' );
        
        for ( let i = 0; i < chooseBurger.length; i++ ) {
            chooseBurger[ i ].addEventListener( 'click', event => this.clickFunc( event ) );
        }
    }
    
    /**
     * Обработчик события клика.
     * @param {MouseEvent} event Клик мышью.
     */
    clickFunc( event ) {
        const name = event.target.name;
        if ( name === 'size' ) {
            this.getSize( event.target.dataset.price, event.target.dataset.calories );
        } else if ( name === 'topping' ) {
            this.getTopping( event.target.dataset.price, event.target.dataset.calories );
        } else if ( name === 'adds' ) {
            this.getAdds( event.target.value, event.target.dataset.price, event.target.dataset.calories );
        }
        this.getSum();
    }
    
    /**
     * Создает объект с информацией о гамбургере в зависимости от выбранного рамера.
     * @param {String} price Цена в зависимости от размера гамбургера.
     * @param {String} calories Калории в зависимости от размера гамбургера.
     */
    getSize( price, calories ) {
        this.sizeValue = {
            price: price,
            calories: calories,
        };
        this.getSum();
    }
    
    /**
     * Создает объект с информацией о гамбургере в зависимости от выбранной начинки.
     * @param {String} price Цена в зависимости от выбранной начинки.
     * @param {String} calories Калории в зависимости от выбранной начинки.
     */
    getTopping( price, calories ) {
        this.toppingValue = {
            price: price,
            calories: calories,
        };
        this.getSum();
    }
    
    /**
     * Создаёт массив выбранных добавок.
     * @param {String} value Вид добавки
     * @param {String} price Цена в зависимости от выбранной добавки.
     * @param {String} calories Калории в зависимости от выбранной добавки.
     */
    getAdds( value, price, calories ) {
        if ( this.adds.indexOf( value ) === -1 ) { // если нет, то добавляем
            this.adds.push( value );
        } else if ( this.adds.indexOf( value ) !== -1 ) { // если есть, то удаляем
            this.adds.splice( ( this.adds.indexOf( value ) ), 1 );
        }
        console.log( this.adds );
        for ( let i = 0; i < this.adds.length; i++ ) {
            console.log( this.adds[ i ] );
            if ( this.adds[ i ] === value ) {
                this.addsValue = {
                    priceCount: price,
                    caloriesCount: calories,
                };
                console.log( this.addsValue );
            }
        }
        this.getSum();
    }
    
    /**
     *
     */
    getSum() {
        this.priceEl = +( this.sizeValue.price ) + +( this.toppingValue.price ) + +( this.addsValue.priceCount );
        this.caloriesEl = +( this.sizeValue.calories ) + +( this.toppingValue.calories ) + +( this.addsValue.caloriesCount );
        this.render();
    }
    
    /**
     * Отображает цену и калорийность.
     */
    render() {
        ( document.querySelector( '#price' ) ).innerHTML = this.priceEl;
        ( document.querySelector( '#calorific' ) ).innerHTML = this.caloriesEl;
    }
    
}

let food = new Hamburger();
