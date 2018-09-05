<?php
/**
 * Created by Artyom Manchenkov
 * Copyright © 2015-2018 [DeepSide Interactive]
 */

namespace app\frontend\models;

use system\components\ActiveRecord;

/**
 * Class User
 * @package app\models
 */
class User extends ActiveRecord
{
    // user model code
    protected static function tableName()
    {             // Переопределение названия таблицы в базе данных, на случай замены имени
        return 'user';                                  // Возвращает новое имя таблицы в БД например 'profiles'
    }
}