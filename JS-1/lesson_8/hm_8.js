// 1. Для практикума из занятия 7 продумать, где можно применить замыкания.
/* Изменил объект food на замыкание - код в директории snake*/
function foodModule() {
    let x = null;
    let y = null;
    function setFoodCoordinates( point ) {
        x = point.x;
        y = point.y;
    }
    function getFoodCoordinates() {
        return { x: x, y: y };
    }
    function isFoodPoint( point ) {
        return x === point.x && y === point.y;
    }
    return {
        setFoodCoordinates: setFoodCoordinates,
        getFoodCoordinates: getFoodCoordinates,
        isFoodPoint: isFoodPoint
    }
}
let food = foodModule();

// 2. Не выполняя кода, ответить, что выведет браузер и почему:

/* Так как все переменные созданные при помощи var создаются сразу же и только после этого начинается выполняться скрипт,
то на момент выполнения скрипта `"a" in window` переменная `a === undefined` уже булет лежать в window
и поэтому в if мы не попадем поэтому alert выведет undefined
меня только напрягает то что пепеменная а в кавычках - по мне так это вообще не переменная а текст*/
if (!("a" in window)) {
    var a = 1;
}
alert(a); // undefined

/* Функция `a` не будет создана, она попадет в переменную `b`, в переменной
`b` будет лежать именно эта функция, но не в переменной `a`
алерт выведет саму функцию*/
var b = function a(x) {
    x && a(--x);
};
alert(a); // выведет function a(x) {x && a(--x);}

/* при таком методе декларации функции она будет создана это да выполнения скрипта, и при выполнении скрипта
* положит в переменную "а" эту функции и проигнорирует выполения скрипта `var a` так как такая переменная уже есть
* поэтому скрипт выведет саму функцию*/
function a(x) {
    return x * 2;
}
var a;
alert(a); // выведет function a(x) {return x * 2;}

/* скрипт "arguments[2] = 10;" положит в третий элемент параметра arguments 10 а потом алерт нам выведет 10 так как
* а и есть третий аргумент*/
function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);


/* я не понял данного кода */
function a() {
    alert(this);
}
a.call(null);

