<?php

namespace app\backend\controllers;

use system\components\Controller;

class SiteController extends Controller
{

    /**
     * 'site/index' action handler
     */
    public function actionIndex()
    {

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('index', [
            'message' => 'backend => site/index',
        ]);
    }

}