'use strict';

let number = prompt( 'Введите число от 0 до 999' );


/* это если пойти по легкому пути при максимуме цифр 3*/
if ( !( parseInt( number ) > 999 ) ) {
    let ones = number % 10,
        tens = ( ( number - ones ) / 10 ) % 10,
        hundreds = ( number - number % 100 ) / 100;
    console.log( `You input is - ${ number }` );
    console.log( { 'hundreds': hundreds, 'tens': tens, 'ones': ones } );
} else {
    console.log( 'Your input exceeds the number of 999' );
}


/* Если пойти по сложному пути с возможностью задания вплоть до триллионных частей */
let arr = [ 'hundreds', 'tens', 'ones' ]; // тут можно сделать архив вплоть до триллионов
let output = {};
let str = number.split( '' );
if ( !( parseInt( number ) > 999 ) ) { // тут можно увеличить число в зависимости от разрядности arr[]
    let dif = arr.length - str.length; // проверяем есть ли разница в длине массивов
    let index = 0; // задаем доп индекс для перебора str[]
    for ( let i = 0; i < arr.length; i++ ) {
        // используем тернарник для перебора - нули будут присваиваться до тех пор пока dif > 0
        output[ `${ arr[ i ] }` ] = dif > 0 ? 0 : parseInt( str[ index++ ] );
        dif--; // уменьшаем разницу пока она не станет нулём
    }
    console.log( `You input is - ${ number }` );
    console.log( output );
} else {
    console.log( 'Your input exceeds the number of 999' );
}

