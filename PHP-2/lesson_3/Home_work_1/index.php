<?php
require_once 'vendor/autoload.php';

try {
    $loader = new Twig_Loader_Filesystem('templates');
    $twig = new Twig_Environment($loader);
    $template = $twig->loadTemplate('gallery.tpl');

    $connect = @mysqli_connect("localhost", "root", "root", "my_bd");
    $result = mysqli_query($connect, "SELECT * FROM `my_gallery` WHERE 1 ORDER BY `looks` DESC");
    $gallery = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $gallery[] = $row;
    }

    echo $template->render(['gallery' => $gallery]);

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}
