<?php

namespace app\frontend\models;

use PDO;
use system\components\ActiveRecord;
use system\components\App;

class Goods extends ActiveRecord
{
    // user model code
    protected static function tableName()
    {
        return 'goods';
    }

    /**
     * getting goods by below listed parameters
     * @param $category
     * @param $from
     * @param $next
     * @return array
     */
    public static function getGoods($category, $from, $next)
    {

        $db = App::$current->connection;

        $data = [];

        //$sql = "SELECT * FROM goods WHERE login = :login AND password = :password";
        //$sql = "SELECT * FROM goods";

        if ($category != '') {
            $sql = "SELECT *
            FROM goods
            JOIN categories
            ON goods.id_category = categories.id_category
            WHERE categories.category_name = '{$category}' LIMIT {$from},{$next} ";
        } else {
            $sql = "SELECT * FROM `goods` LIMIT {$from},{$next}";
        }

        $stmt = $db->prepare($sql);
        $stmt->execute();

        while ($res = $stmt->fetch(PDO::FETCH_ASSOC)) {
            $data[] = $res; // формируем массив с данными по запросу
        }

        return $data;

    }

    /**
     * to get exact good by id
     * @param $id
     * @return mixed
     */
    public static function getOneGood($id)
    {

        $db = App::$current->connection;

        $sql = "SELECT *
            FROM goods
            LEFT JOIN categories
            ON goods.id_category = categories.id_category
            WHERE goods.id_good = $id";

        $stmt = $db->prepare($sql);
        $stmt->execute();


        $res = $stmt->fetch(PDO::FETCH_ASSOC);
        //print_r($res);
        return $res;

    }

}