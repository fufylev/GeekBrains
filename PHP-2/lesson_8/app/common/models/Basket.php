<?php

namespace app\common\models;

use PDO;
use system\components\ActiveRecord;
use system\components\App;


class Basket extends ActiveRecord
{

    // user model code
    protected static function tableName()
    {
        return 'basket';
    }

    public static function ifOrderExists($id_user)
    {

        $db = App::$current->connection;

        $sql = "SELECT `id_order` FROM orders WHERE id_user = $id_user";

        $stmt = $db->prepare($sql);
        $stmt->execute();

        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        return $res;

    }

    public static function createOrder($id_user)
    {

        $db = App::$current->connection;

        $sql = "INSERT INTO `orders` (`id_user`, `amount`, `id_order_status`) 
                    VALUES (:id_user, :amount, :id_order_status)";
        $stmt = $db->prepare($sql);
        $stmt->execute([':id_user' => $id_user, ':amount' => 0, ':id_order_status' => 1]);
        return $stmt;

    }


    /**
     * @param $user_id
     * @return array
     */
    public static function getBasket($user_id)
    {

        $db = App::$current->connection;
        $data = [];
        $sql = "SELECT *	
            FROM goods
            LEFT JOIN basket
            ON basket.id_good = goods.id_good
            WHERE basket.id_user = $user_id";

        $stmt = $db->prepare($sql);
        $stmt->execute();

        while ($res = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $res;
        };
        return $data;

    }

    /**
     * @param $user_id
     * @param $column
     * @return array
     */
    public static function getOneColumn($user_id, $column)
    {

        $db = App::$current->connection;
        $data = [];
        $sql = "SELECT $column	
            FROM basket
            WHERE id_user = $user_id";

        $stmt = $db->prepare($sql);
        $stmt->execute();

        while ($res = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $res;
        };
        return $data;

    }

    public static function addGood($user_id, $id_good, $price, $amount, $id_order, $isInBasket)
    {

        $db = App::$current->connection;

        //return ['result' => [$user_id, $id_good, $price, $is_in_order, $id_order, $isInBasket]];

        // if good is already in BASKET
        if ($isInBasket) {
            $sql = "UPDATE `basket` SET `amount` = `amount` + ? WHERE id_good = ?";

            $stmt = $db->prepare($sql);
            $stmt->execute([$amount, $id_good]);
            return $stmt;

            // add new line with product
        } else {
            $sql = "INSERT INTO `basket` (`id_user`, `id_good`, `price`, `amount`, `is_in_order`, `id_order`) VALUES (:id_user, :id_good, :price, :amount, :is_in_order, :id_order)";
            $stmt = $db->prepare($sql);
            $stmt->execute([':id_user' => $user_id, ':id_good' => $id_good, ':price' => $price, ':amount' => $amount, ':is_in_order' => 1, ':id_order' => $id_order]);

            return $stmt;
        }


    }

    public static function deleteGood($id_user, $id_good)
    {

        $db = App::$current->connection;

        $sql = "DELETE FROM `basket` WHERE `basket`.`id_user` = $id_user && `basket`.`id_good` = $id_good";
        $stmt = $db->prepare($sql);
        $stmt->execute();

        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        return $res;
    }

    public static function goodSubtract($id_user, $id_good)
    {

        $db = App::$current->connection;

        $sql = "UPDATE `basket` SET `amount` = `amount` - ? WHERE `basket`.`id_user` = ? && `basket`.`id_good` = ?";

        //$sql = "DELETE FROM `basket` WHERE `basket`.`id_user` = $id_user && `basket`.`id_good` = $id_good";
        $stmt = $db->prepare($sql);
        $stmt->execute([1, $id_user, $id_good]);

        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        return $res;
    }

}