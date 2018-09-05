<?php
require_once 'vendor/autoload.php';

try {
    $loader = new Twig_Loader_Filesystem('templates');
    $twig = new Twig_Environment($loader);
    $template = $twig->loadTemplate('max_img.tpl');

    $id = (int)($_GET["id"]);
    $id = htmlspecialchars($_GET["id"]);
    $connect = @mysqli_connect("localhost", "root", "root", "my_bd");
    $looks_increment = mysqli_query($connect, "UPDATE `my_gallery` SET `looks` = `looks` + 1 WHERE id = '{$id}'");

    $result = mysqli_query($connect, "SELECT * FROM `my_gallery` WHERE id = '{$id}'");
    $max_img = mysqli_fetch_assoc($result);

    echo $template->render(['image' => $max_img]);

} catch (Exception $e) {
    die ('ERROR: ' . $e->getMessage());
}



