<?php
session_start();
$user_id = session_id();

$idProduct = (int)$_POST['$idProduct'];

$connect = @mysqli_connect("localhost", "root", "root", "brand");
$isInBasket = false;
$basket = mysqli_query($connect, "SELECT * FROM `cart` WHERE id_session = '{$user_id}'");

while ($basket_row = mysqli_fetch_assoc($basket)) {
    if ((int)$basket_row['id_product'] == $idProduct) {
        $isInBasket = true;
    }
}

if ($isInBasket) {
    $result = mysqli_query($connect, "UPDATE `cart` SET `quantity` = `quantity` + 1 WHERE id_product = '{$idProduct}'");
} else {
    $result = mysqli_query($connect, "INSERT INTO `cart` (`id_product`, `id_session`, `quantity`) VALUES ('{$idProduct}', '{$user_id}', 1);");
}

$response['result'] = $idProduct;
echo json_encode($response);