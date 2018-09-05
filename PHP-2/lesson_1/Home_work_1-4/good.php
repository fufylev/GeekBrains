<?php

/*1. Придумать класс, который описывает любую сущность из предметной области интернет-магазинов: продукт, ценник, посылка и т.п.
  2. Описать свойства класса из п.1 (состояние).
  3. Описать поведение класса из п.1 (методы).
*/

/**
 * Class Good - выводит (рендерит) карточки товаров по определенной категории на заданной странице
 */
class Good
{
    public $category; // категория товара: "man", "women" и т.д.
    public $pageName; // название страницы на которой надо отрисовать карточки товаров

    /**
     * Good constructor. Конструктор, в котором присваиваем свойствам определенные значения
     * @param $category - категория товара: "man", "women" и т.д.
     * @param $pageName - название страницы на которой надо отрисовать карточки товаров
     */
    public function __construct($category, $pageName)
    {  // передаем в конструктор название категории и название страницы на которую будем выводить карточки товаров
        $this->category = $category;
        $this->pageName = $pageName;
    }

    /**
     * метод отрисовки (рендера) карточек товаров
     */
    public function productCardsRender()
    {

        $goods = file_get_contents("../public/html/{$this->pageName}"); // в переменную передаем весь текст кода страницы "html/{$pageName}"

        $render = file_get_contents('html/goods_render.html'); // присваиваем переменной текст кода страницы рендера карточек

        $connect = @mysqli_connect("localhost", "root", "root", "brand"); // создаем связь с БД, !!!!! УЧИТЫВАЕМ что у меня пароль к БД - "root"!!!!!!!!!!!

        $result = mysqli_query($connect, "SELECT * FROM `goods` WHERE category = '{$this->category}'"); // делаем запрос к БД по заданной категории

        $replace = ['{{ID}}', '{{NAME}}', '{{PRICE}}']; // массив с названиеми шаблонов под замену. Данные имена будут найдены на странице 'html/goods_render.html' и заменены на данные из массива {$replaced}

        while ($row = mysqli_fetch_assoc($result)) {  // построчно перебираем товары в БД
            $replaced = [$row["id"], $row["short_description"], $row["price"]]; // данные из БД помещаем в массив
            $text = $text . str_replace($replace, $replaced, $render); // накапливаем HTML код в строке которую потом подстваим в {{GOODS}} на заданной странице
        }

        $goods = str_replace('{{GOODS}}', $text, $goods);  // на странице "html/{$this->pageName}" находим текст {{GOODS}} и заменяем его на сформировавшийся код карточек товаров

        echo($goods);  // выводим результат на страницу HTML

    }
}

/* 4. Придумать наследников класса из п.1. Чем они будут отличаться? */

/**
 * Class GoodByDataBase - наследник класса Good в котором дополнительно передаем название Базы данных и название таблицы
 */
class GoodByDataBase extends Good
{
    public $tableName; // название таблицы
    public $dataBaseName; // название БД

    // перегрузка родительского конструктора
    function __construct($category, $pageName, $tableName, $dataBaseName)
    {

        parent::__construct($category, $pageName); // наследуем конструктор родителя

        // вносим дополнения
        $this->tableName = $tableName;
        $this->dataBaseName = $dataBaseName;
    }

    // перегрузка родительского метода
    function productCardsRender()
    {

        parent::productCardsRender(); // наследуем метод родителя

        // вносим изменения
        $connect = @mysqli_connect("localhost", "root", "root", "{$this->dataBaseName}"); // создаем связь с БД, !!!!! УЧИТЫВАЕМ что у меня пароль к БД - "root" !!!!!!!!!!!

        $result = mysqli_query($connect, "SELECT * FROM `{$this->tableName}` WHERE category = '{$this->category}'"); // делаем запрос к БД по заданным категории и названию таблицы
    }
}