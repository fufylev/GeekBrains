<?php


namespace app\frontend\controllers;

use app\frontend\models\Goods;
use app\frontend\models\User;
use system\components\Controller;
use system\components\App;


class GoodsController extends Controller
{

    /**
     *
     */
    public function actionGet()
    {

        //получаем данные из запроса
        $next = (int)$_GET['$next'];
        $from = (int)$_GET['$from'];
        $category = strip_tags(htmlspecialchars($_GET['$category']));

        echo json_encode(["goods" => Goods::getGoods($category, $from, $next)]);
    }

    /**
     * 'goods/product_card' action handler
     */
    public function actionCard()
    {

        $this->layout = "main";
        if (isset($_SESSION['user_id'])) {
            $id_user = $_SESSION['user_id'];

            $user = User::findOne(['id_user' => $id_user]);

            $id_good = (int)$_GET['id'];
            $goods = Goods::getOneGood($id_good);

            return $this->render('good', [
                'active' => ['page' => 'good'],
                'user' => $user,
                'goods' => $goods
            ]);
        }

        $id_good = (int)$_GET['id'];
        $goods = Goods::getOneGood($id_good);

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('good', [

            'active' => ['page' => 'good'],
            'goods' => $goods
        ]);
    }


}

