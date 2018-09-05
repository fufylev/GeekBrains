<?php

/* 2. *Для примера 6 из сегодняшнего урока реализовать хранение в БД, которое позволит логике example6.php работать. */

include 'Twig/Autoloader.php';
Twig_Autoloader::register();

// подключение к бд
try {
    $dbh = new PDO('mysql:dbname=world;host=localhost', 'root', 'root');
} catch (PDOException $e) {
    echo "Error: Could not connect. " . $e->getMessage();
}

// установка error режима
$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// выполняем запрос
try {
    // формируем SELECT запрос
    // в результате каждая строка таблицы будет объектом
    $sql = "SELECT country.Code AS code, country.Name AS name, country.Region AS region, country.Population AS population, countrylanguage.Language AS language, city.Name AS capital FROM country, city, countrylanguage WHERE country.Code = city.CountryCode AND country.Capital = city.ID AND country.Code = countrylanguage.CountryCode AND countrylanguage.IsOfficial = 'T' ORDER BY population DESC LIMIT 0,20";
    $sth = $dbh->query($sql);
    while ($row = $sth->fetchObject()) {
        $data[] = $row;
    }

    // закрываем соединение
    unset($dbh);

    $loader = new Twig_Loader_Filesystem('templates');

    $twig = new Twig_Environment($loader);

    $template = $twig->loadTemplate('countries2.tpl');

    echo $template->render(array(
        'data' => $data
    ));

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}
//