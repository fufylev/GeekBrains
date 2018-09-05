<?php

namespace app\frontend\controllers;

use app\frontend\models\User;
use system\components\App;
use system\components\Controller;

class SiteController extends Controller
{

    /**
     * 'site/index' action handler
     */
    public function actionIndex()
    {
        // create new User model
        $user = new User();

        // try to load by HTML form
        if ($user->load(App::$current->request->post())) {
            // processing of loaded User model
        }

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('index', [
            'message' => 'site/index',
            'model' => $user,
        ]);
    }

}