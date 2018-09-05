<?php

//получаем данные из запроса
$next = (int)$_GET['$next'];
$from = (int)$_GET['$from'];
$category = htmlspecialchars($_GET['$category']);

try {
    $dbh = new PDO('mysql:dbname=brand;host=localhost', 'root', 'root');
} catch (PDOException $e) {
    echo "Error: Could not connect. " . $e->getMessage();
}

// установка error режима
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// выполняем запрос
try {
    // формируем SELECT запрос
    $data = [];

    //определяем какую категорию товаров загружать, если категория не указана то выводим все товары
    if ($category != '') {
        $sql = "SELECT * FROM `goods` WHERE category = '{$category}' LIMIT {$from},{$next}";
    } else {
        $sql = "SELECT * FROM `goods` LIMIT {$from},{$next}";
    }
    $sth = $dbh->query($sql);
    while ($row = $sth->fetchObject()) {
        $data[] = $row; // формируем массив с данными по запросу
    }

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}

$response['result'] = $data; // записываем результат запроса в массив
echo json_encode($response); // отправляем данные обратно в ajax запрос от JS
