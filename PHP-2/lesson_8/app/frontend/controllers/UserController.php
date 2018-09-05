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
use app\common\models\Basket;


class UserController extends Controller
{
    /**
     * Login to an account
     */
    public function actionLogin()
    {

        //print_r($_POST);

        $login = strip_tags(htmlspecialchars($_POST['User']['login']));
        $password = md5(strip_tags(htmlspecialchars($_POST['User']['password'])));

        $user = User::findOne(['user_login' => $login]);
        $user_id = (int)($user->id_user);
        //var_dump($user);

        if ($user->user_login == $login && $user->user_password == $password) {
            $_SESSION['user_id'] = $user_id;

            header("Location: /");

            //var_dump($_SESSION);
            //echo "попал ";
        } else {
            header("Location: /");
            //echo "не попал";
        }
    }

    /**
     * LogOut from an account
     */
    public function actionLogout()
    {
        session_unset();
        session_destroy();
        session_start();
        header("Location: /");
    }

    /**
     * redirect to a register form
     */
    public function actionReg()
    {

        $this->layout = "main";
        return $this->render('reg', [
            /*'active' => ['page' => 'man'],
            'user' => $user*/

        ]);

    }

    /**
     * Register as a User in a DB
     */
    public function actionRegister()
    {

        $user_name = strip_tags(htmlspecialchars($_POST['user_name']));
        $user_login = strip_tags(htmlspecialchars($_POST['user_login']));
        $user_email = strip_tags(htmlspecialchars($_POST['user_email']));
        $user_password = md5(strip_tags(htmlspecialchars($_POST['user_password'])));

        $newUser = new User();
        $newUser->user_name = $user_name;
        $newUser->user_login = $user_login;
        $newUser->user_email = $user_email;
        $newUser->user_password = $user_password;
        $newUser->save();

        header("Location: /");

    }

    public function actionCheckout()
    {

        $this->layout = "main";
        return $this->render('checkout', [
            'active' => ['page' => 'checkout'],


        ]);

    }


}