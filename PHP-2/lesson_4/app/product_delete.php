<?php
session_start();
$user_id = session_id();

$idProduct = (int)$_POST['$idProduct'];

$connect = @mysqli_connect("localhost", "root", "root", "brand");


$result = mysqli_query($connect, "DELETE FROM `cart` WHERE `cart`.`id_product` = $idProduct");


$response['result'] = $idProduct;
echo json_encode($response);