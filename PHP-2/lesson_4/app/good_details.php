<?php
$good = file_get_contents('html/product_details.html');
$render = file_get_contents('html/goods_render.html');
$id = $_GET["id"];

$connect = @mysqli_connect("localhost", "root", "root", "brand");

$result = mysqli_query($connect, "SELECT * FROM `goods` WHERE `id` = {$id}");
$data = mysqli_fetch_assoc($result);

$price = $data["price"];
$sh_dscr = $data["short_description"];
$lg_dscr = $data["long_description"];
$color = $data["color"];
$material = $data["material"];
$designer = $data["designer"];
$category = $data["category"];

$good = str_replace("{{ID}}", $id, $good);
$good = str_replace("{{GENDER}}", $category, $good);
$good = str_replace("{{PRODUCT_NAME}}", $sh_dscr, $good);
$good = str_replace("{{PRODUCT_LONG_DESCRIPTION}}", $lg_dscr, $good);
$good = str_replace("{{MATERIAL}}", $material, $good);
$good = str_replace("{{DESIGNER}}", $designer, $good);
$good = str_replace("{{PRICE}}", $price, $good);
$good = str_replace("{{PRICE}}", $price, $good);

$goods = mysqli_query($connect, "SELECT * FROM `goods` WHERE category = '{$category}'");

$replace = ['{{ID}}', '{{NAME}}', '{{PRICE}}'];

while ($row = mysqli_fetch_assoc($goods)) {
    $replace1 = [$row["id"], $row["short_description"], $row["price"]];
    $text .= str_replace($replace, $replace1, $render);
}
$good = str_replace('{{GOODS}}', $text, $good);

echo($good);
