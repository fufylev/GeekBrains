<?php
/**
 * Created by PhpStorm.
 * User: andreyfufylev
 * Date: 12.07.2018
 * Time: 11:11
 */

namespace app\frontend\controllers;

use app\frontend\models\User;
use system\components\Controller;


class UserController extends Controller
{

    public function actionLogin()
    {

        //print_r($_POST);

        $login = strip_tags(htmlspecialchars($_POST['User']['login']));
        $password = md5(strip_tags(htmlspecialchars($_POST['User']['password'])));

        $user = User::findOne(['user_login' => $login]);
        //var_dump($user);

        if ($user->user_login == $login && $user->user_password == $password) {
            $_SESSION['user_id'] = $login;

            header("Location: /user/");

            //var_dump($_SESSION);
            //echo "попал ";
        } else {
            header("Location: /");
            //echo "не попал";
        }
    }

    public function action()
    {
        if (!$_SESSION['user_id']) {
            header("Location: /");
        }
        $this->layout = "user";
        //var_dump($_SESSION);
        $user = User::findOne(['user_login' => $this->login]);

        return $this->render('index', [
            'model' => $user
        ]);
    }

    public function actionLogout()
    {
        session_start();
        session_unset();
        session_destroy();
        header("Location: /");
    }

}