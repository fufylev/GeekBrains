<?php

class User extends Model
{
    protected static $table = 'users';

    protected static function setProperties()
    {
        /*self::$properties['name'] = [
          'type' => 'varchar',
          'size' => 512
        ];*/
    }

    public static function checkUser($login, $password)
    {

        return db::getInstance()->Select("SELECT * FROM users WHERE user_login = '{$login}' AND user_password = '{$password}'");

    }

    public static function ifLoginExists($user_login)
    {

        return db::getInstance()->Select("SELECT * FROM users WHERE user_login = '{$user_login}'");

    }

    public static function addUser($user_name, $user_login, $user_password, $user_email)
    {

        return db::getInstance()->Query("INSERT INTO `users` (`user_name`, `user_login`, `user_password`, `user_email`) VALUES (:user_name, :user_login, :user_password, :user_email)", [':user_name' => $user_name, ':user_login' => $user_login, ':user_password' => $user_password, ':user_email' => $user_email]);

    }

}