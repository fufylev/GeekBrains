<?php

require_once('good.php'); // подгружаем файл

//Создаем сущность класса "Good"
$indexPage = new Good('man', 'man.html'); // передаем в конструктор класса параметры
$indexPage->productCardsRender(); //

// Создаем сущность класса "GoodByDataBase" наследника класса "Good"
// Чтобы запустить наследника надо закомментировать верхние две строки кода и раскомментировать обе нижние строки кода (инача произойдет дублирование кода)

//$indexPage = new GoodByDataBase('women', 'women.html', 'goods', 'brand'); // передаем в конструктор класса параметры
//$indexPage->productCardsRender();