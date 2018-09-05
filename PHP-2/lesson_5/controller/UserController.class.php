<?php

class UserController extends Controller
{
    public $view = 'user';
    public $title;

    function index($data)
    {
        $this->title = 'Личный кабинет';
        //print_r($_SESSION);

        if ($_SESSION['user_id']) {
            header("Location: /user/cabinet/");
        }
    }

    public function login()
    {
        //print_r($_SESSION);

        $login = strip_tags(htmlspecialchars($_POST['login']));
        $password = md5(strip_tags(htmlspecialchars($_POST['password'])));

        if (!empty(User::checkUser($login, $password))) {
            $_SESSION['user_id'] = $login;
            header("Location: /user/cabinet/");
        } else {
            header("Location: /user");
        }

    }

    public function logout()
    {
        session_start();
        session_unset();
        session_destroy();
        header("Location: /user");
    }

    function cabinet()
    {

        if (!$_SESSION['user_id']) {
            header("Location: /user");
        }
    }

    public function reg()
    {
        return true;
    }

    public function addUser()
    {

        $user_name = strip_tags(htmlspecialchars($_POST['user_name']));
        $user_login = strip_tags(htmlspecialchars($_POST['user_login']));
        $user_password = md5(strip_tags(htmlspecialchars($_POST['user_password'])));
        $user_email = strip_tags(htmlspecialchars($_POST['user_email']));

        /*echo $user_name . " - имя <br>";
        echo $user_login . " - логин <br>";
        echo $user_password . " - пароль <br>";
        echo $user_email . " - почта <br>";*/

        if (User::ifLoginExists($user_login)) {

            header("Location: /user/reg/");

        } else {

            User::addUser($user_name, $user_login, $user_password, $user_email);
            header("Location: /user");

        }

    }

}
