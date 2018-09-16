<?php

/* 2. Дано слово, состоящее только из строчных латинских букв.
Проверить, является ли оно палиндромом.
При решении этой задачи нельзя пользоваться циклами. */

function isPalindrome($string) {

    // выводим для проверки остаток строки после выполнения кода ниже для сравнения
    echo $string . '<br>';

    // если длина строки 0 или 1 то это полиндром априори
    /* после того как в результате выполнения кода после else{} от STRING останется один или ни одного символа,
    то код автоматически выведет на экран что это Полиндром */
    if ((strlen($string) == 1) || (strlen($string) == 0)) {
        echo "string is Palindrome";
    }

    else {
        // сравниваем первый и последний символы строки
        if (substr($string,0,1) == substr($string,(strlen($string) - 1),1)) {

            // если первый и последний символя равны то отрезаем по одному с обоих сторон и заново запускаем функцию - РЕКУРСИВНО
            return isPalindrome(substr($string,1,strlen($string) -2));
        }
        else { echo "string is not a Palindrome"; }
    }
}

isPalindrome("QwertytrewQ");
echo '<br><hr />';
isPalindrome("Hello");