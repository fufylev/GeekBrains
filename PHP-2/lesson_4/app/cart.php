<?php
session_start();
$user_id = session_id();

$connect = @mysqli_connect("localhost", "root", "root", "brand");
$basket = mysqli_query($connect, "SELECT * FROM `cart` WHERE id_session = '{$user_id}'");


$cart = [];

while ($basket_row = mysqli_fetch_assoc($basket)) {
    $id = (int)$basket_row['id_product'];
    $good = mysqli_query($connect, "SELECT * FROM `goods` WHERE id = '{$id}'");
    $good_row = mysqli_fetch_assoc($good);
    $price = (int)$good_row['price'];
    $product_name = $good_row['short_description'];
    $product_amount = (int)$basket_row['quantity'];
    $img_url = $good_row['url'];

    $cart[] = [
        "id_product" => $id,
        "product_name" => $product_name,
        "price" => $price,
        "product_amount" => $product_amount,
        "totalSum" => $price * $product_amount,
        "img_url" => $img_url,
        "page_url" => "good_details.php"
    ];
}

echo json_encode($cart);