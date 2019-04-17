"use strict";

// Практическое задание №1

// 1. Задать температуру в градусах по Цельсию. Вывести в alert
// соответствующую температуру в градусах по Фаренгейту.
//   Подсказка: расчёт идёт по формуле:
//   Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по
// Цельсию

let tempCelsius = +prompt('Введите текущую температуру в градусах по Цельсию', "");
let tempFahrenheit = Math.round(tempCelsius * 1.8) + 32;
alert(`${tempCelsius} градусов Цельсия равно ${tempFahrenheit} градусов по Фаренгейту`);

// 2. Объявить две переменные: admin и name. Записать в name строку
// "Василий". Скопировать значение из name в admin. Вывести в консоль
// переменную admin (должно вывести "Василий").

let admin, name = 'Василий';
admin = name;
console.log(admin);


// 3. Вывести в консоль значения выражений и объяснить почему получились
// такие значения используя комментарии к каждому выражению:

console.log(10 + 10 + "10");
/* результат = 2010. Первые две цифры складываются как ЧИСЛА - получаем 20, а так как
   третий аргумент это строка то происходит канкотенация и получаем строку "2010" */

console.log(10 + "10" + 10);
/*результат = 101010. Уже при первом действии происходит канкатенация первых двух
    значений так как второе являлось строкой в результате получаем строку "1010" ну и третий аргумент также
    канкатинируется к получившейся строке и получаем строку "101010" */

console.log(10 + 10 + +"10");
/*результат = 30. Так как перед последним аргументом стоит унарный плюс то он
   автоматически преобразует строку "10" в число и в конце происходит сложение трех чисел  10+10+10=30 */

console.log(10 / -"");
/*результат = -Infinity. так как перед "" стоит унарный минус то он преобразут знаменатель
   в -0 (минус ноль), а при делении на ноль получаем бесконечность, но унарный минус добавил
   к бесконечности знак минуса */

console.log(10 / +"2,5");
/*результатом будет NaN так как во втором аргументе ввиде строки между 2 и 5 стоит
   запятая и это воспринимается как набор символов, а не число, соответственно унарный плюс не может это
   транслировать в число при делении на НЕ ЧИСЛО - результат будет NaN */


// 4. Напишите, являются ли данные имена переменных корректными:

let mode = "normal"; // правильное назначение переменной

let my_valu3 = 102; // правильное назначение переменной, но имя переменной не очень удачное - нужно задавать понятные / логические имена

// let 3my_value3 = "102"; нельзя начинать имя переменной начиная с цифры - вызовет ошибку

let __hello__ = "world"; // правильное назначение переменной

let $$$ = "money"; // правильное назначение переменной, но имя переменной не очень удачное - нужно задавать понятные / логические имена

// let !0_world = true; нельзя начинать имя переменной начиная со спец символов - вызовет ошибку