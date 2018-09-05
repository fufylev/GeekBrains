<?php

/* 1. Написать аналог «Проводника» в Windows для директорий на сервере при помощи итераторов. */

require_once 'header.html'; // подключаем стили

// Первоначальный путь
$path = '/';

// если есть путь отличный от "/"
if (isset($_GET[src])) {
    if ($_GET[src] == '') { // если путь пустой то присваиваем ему путь по умолчанию
        $dir = new DirectoryIterator('/');
    } else {
        $dir = new DirectoryIterator($_GET[src]);

        // делаем нарезку пути для формирования массива
        $path = $_GET[src];
        $path_cut = ltrim($path, "/"); // очищаем от слешев
        $path_cut = ltrim($path_cut, "/"); // очищаем от слешев еще раз - я не знаю откуда появляется второй слеш в пути из $_GET()
        $path_to_array = explode("/", $path_cut); // разрезаем строку и помещаем в массив
        array_pop($path_to_array); // удаляем последний элемент массива

        // собираем обратно строку без последнего элемента
        if (count($path_to_array) == 0) {
            $up_folder = '/'; // если массив пустой то выводим ссылку на верхний уровень
        } else {
            $up_folder = implode('/', $path_to_array); // получаем путь к папке на уровень выше
        }
    }
} else {
    $dir = new DirectoryIterator($path);
}

// текущая папка
$current_path = $dir->getPath();
// выводим строку с текущей папкой
echo "Текущий путь к папке: " . $current_path . "<br><br>";

// выводим строку для перехода в директорию на один уровень выше текущей
echo "<img src='img/up.png' width='15'>" . "&ensp;" . "<a href='?src=/$up_folder'>..</a><br>";

// Цикл по содержанию и рендеру директорий
foreach ($dir as $item) {
    if ($item != '.' && $item != '..') { // убираем первые две пустые строки с точками
        if ($item->isFile()) { // если это файл то выводим его ввиде строки
            echo "<img src='img/file.png' width='15'>" . "&ensp;" . $item . '<br>';
        }
        if ($item->isDir()) { // если это папка то выводим ее ввиде ссылки на данную директорию
            echo "<img src='img/folder.png' width='15'>" . "&ensp;" . "<a href='?src=$current_path/" . $item . "'>" . $item . "</a><br>";
        }
    }
}

require_once 'footer.html';
?>