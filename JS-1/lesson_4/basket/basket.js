"use strict";

/*
• создать объект Basket с полем goodList и методами countTotalPrice,
countTotalNumber и putProduct (методы должны считать общую стоимость того,
что в goodList, общее количество того, что в goodList и добавлять товар в
корзину)
• создать массив товаров с полями name и price
• после этого пройтись по нему в цикле и положить в корзину по одному
товару на четной позиции и по 2 товара на нечетной позиции
• внутри корзины в массиве goodList у каждого товара должно быть поле
count – количество товаров этого вида в корзине (например, 5 красных шаров)
• вывести общую стоимость корзины и общее количество товаров в корзине
*/


/**
 * Объект корзины
 * @type {{goodList: *[], countTotalNumber(): string, putProduct(): void, countTotalPrice(): string}}
 */
const Basket = {
    goodList: [
        {
            "id_product": 1,
            "name": "MANGO PEOPLE T-SHIRT",
            "price": 50,
            "count": 0
        },
        {
            "id_product": 2,
            "name": "RUFFLE OFF SHOULDER",
            "price": 55,
            "count": 0
        },
        {
            "id_product": 3,
            "name": "MANGO PEOPLE T-SHIRT",
            "price": 60,
            "count": 0
        },
        {
            "id_product": 4,
            "name": "GIGI BRUSHED TOP",
            "price": 55,
            "count": 0
        }
    ],
    /**
     * Метод подсчета стоимости корзины
     * @returns {string} - Сумма товаров в корзине
     */
    countTotalPrice() {
        let totalPrice = 0;
        this.goodList.forEach( function ( item ) {
            totalPrice += ( item[ 'count' ] * item[ 'price' ] );
        } );
        return `Сумма товаров в корзине - $${ totalPrice }`;
    },
    
    /**
     * Метод подсчета кол-ва товаров
     * @returns {string} - Общее кол-во товаров в корзине
     */
    countTotalNumber() {
        let totalNumber = 0;
        this.goodList.forEach( function ( item ) {
            totalNumber += item[ 'count' ];
        } );
        return `Общее кол-во товаров в корзине - ${ totalNumber }`;
    },
    
    /**
     * Метод добавления в корзину - добавление согласно практического задания
     */
    putProduct() {
        this.goodList.forEach( function ( item, index ) {
            if ( ( index + 1 ) % 2 === 0 ) { // если четное
                item[ 'count' ]++;
            } else { // если нечетное
                item[ 'count' ] += 2;
            }
        } );
        console.log( `Ваша корзина после добавления товаров` );
        console.log( this.goodList );
    }
};

Basket.putProduct();
console.log( Basket.countTotalNumber() );
console.log( Basket.countTotalPrice() );