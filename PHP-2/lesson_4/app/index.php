<?php
/*session_start();
$user_id =  session_id();

$goods = file_get_contents('html/index.html');
$render = file_get_contents('html/goods_render.html');

$connect = @mysqli_connect("localhost", "root", "root", "brand");
$result = mysqli_query($connect, "SELECT * FROM `goods` WHERE 1");

$replace = ['{{ID}}', '{{NAME}}', '{{PRICE}}'];
for ($i = 1; $i <= 8; $i++) {
  $row = mysqli_fetch_assoc($result);
  $replace1 = [$row["id"], $row["short_description"], $row["price"]];
  $text .= str_replace($replace, $replace1, $render);
}

$goods = str_replace('{{GOODS}}', $text, $goods);
echo($goods);*/

require_once './html/index.html';