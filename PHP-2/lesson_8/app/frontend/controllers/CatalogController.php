<?php

namespace app\frontend\controllers;

use app\frontend\models\User;
use app\frontend\models\Goods;
use system\components\App;
use system\components\Controller;

class CatalogController extends Controller
{

    /**
     * 'site/index' action handler
     */
    public function actionIndex()
    {

        if (isset($_SESSION['user_id'])) {
            $id_user = $_SESSION['user_id'];

            $user = User::findOne(['id_user' => $id_user]);

            return $this->render('index', [
                'active' => ['page' => 'index'],
                'user' => $user
            ]);
        }


        // create new User model
        $user = new User();

        // try to load by HTML form
        if ($user->load(App::$current->request->post())) {
            // processing of loaded User model
        }

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('index', [
            'model' => $user,
            'active' => ['page' => 'index'],

        ]);
    }

    /**
     * 'site/man' action handler
     */
    public function actionMan()
    {
        if (isset($_SESSION['user_id'])) {
            $id_user = $_SESSION['user_id'];

            $user = User::findOne(['id_user' => $id_user]);

            return $this->render('man', [
                'active' => ['page' => 'man'],
                'user' => $user
            ]);
        }

        // create new User model
        $user = new User();

        // try to load by HTML form
        if ($user->load(App::$current->request->post())) {
            // processing of loaded User model
        }

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('man', [
            'model' => $user,
            'active' => ['page' => 'man'],
        ]);
    }

    /**
     * 'site/women' action handler
     */
    public function actionWomen()
    {
        if (isset($_SESSION['user_id'])) {
            $id_user = $_SESSION['user_id'];

            $user = User::findOne(['id_user' => $id_user]);

            return $this->render('women', [
                'active' => ['page' => 'women'],
                'user' => $user
            ]);
        }

        // create new User model
        $user = new User();

        // try to load by HTML form
        if ($user->load(App::$current->request->post())) {
            // processing of loaded User model
        }

        // render Twig template or JSON (with AJAX checking by Controller)
        $this->render('women', [
            'model' => $user,
            'active' => ['page' => 'women'],
        ]);
    }


}