<?php


namespace app\frontend\controllers;

use app\common\models\Page;
use system\components\Controller;


class PageController extends Controller
{

    public function actionIndex()
    {
        $pages = Page::findAll();

        return $this->render(
            'index',
            ['pages' => $pages]
        );
    }

    public function actionView($id)
    {
        $model = Page::findById($id);

        return $this->render('view', [
            'model' => $model
        ]);
    }

}