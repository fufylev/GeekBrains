<?php


namespace app\frontend\controllers;

use app\common\models\Basket;
use app\frontend\models\User;
use system\components\Controller;
use app\frontend\models\Goods;

/**
 * Class BasketController
 * @package app\frontend\controllers
 */
class BasketController extends Controller
{

    /**
     * Initial basket getting
     */
    public function actionGet()
    {
        // if USER is logged in
        if (isset($_SESSION['user_id'])) {

            $id_user = $_SESSION['user_id']; // берём id пользователя из сессии

            // если в $_SESSION есть массив с корзиной то перегоняем его в БД
            // по всем правилам: смотрим есть ли у пользователя заказ, если нет то создаем заказ
            // потом с данным номером заказа  формируем корзину текущего пользователя из $_SESSION
            if (isset($_SESSION['basket'])) {


                $isInBasket = false; // задаем всегда для начала как FALSE

                $id_user = $_SESSION['user_id']; // берём id пользователя из сессии

                $isOrderExists = Basket::ifOrderExists($id_user); // проверяем есть ли у пользователя заказ

                if (!$isOrderExists) { // если заказа нет, то создаем новый заказ без суммы и кол-ва
                    $createOrder = Basket::createOrder($id_user);
                }
                $id_order = Basket::ifOrderExists($id_user); // получаем строку заказа пользователя
                $order = (int)$id_order['id_order']; // получаем номер заказа

                // получаем столбец с id товара из корзины
                $basket = Basket::getOneColumn($id_user, 'id_good');
                for ($i = 0; $i < count($_SESSION['basket']); $i++) {
                    $id_good = (int)$_SESSION['basket'][$i]['id_good'];
                    $price = (int)$_SESSION['basket'][$i]['price'];
                    $amount = (int)$_SESSION['basket'][$i]['amount'];

                    $isInBasket = false; // задаем всегда для начала как FALSE

                    foreach ($basket as $item) { // перебираем корзину
                        foreach ($item as $key) {
                            if ((int)$key == $id_good) {
                                $isInBasket = true; // если товар в корзине есть то меняем на TRUE
                            }
                        }
                    }

                    // далаем запрос на добавление в зависимости от $isInBasket
                    $add = Basket::addGood($id_user, $id_good, $price, $amount, $order, $isInBasket);

                }
                $_SESSION = []; // очищаем сессию
                $_SESSION['user_id'] = $id_user; // восстанавливаем юзера в правах :)

            }

            // если в $_SESSION ничего нет, то идем за корзиной в БД


            $basket = Basket::getBasket($id_user);

            echo json_encode(["basket" => $basket]);

            // if GUEST - если гость и не авторизировался, то начинаем работать с массивом $_SESSION['basket']
        } else {

            if (isset($_SESSION['basket'])) {
                // если сессия с товарами есть то отдаем ее в аякс
                echo json_encode($_SESSION);
            } else {
                // если сессии с массивом товаров нету то в аякс отправляем произвольный пустой массив
                // пустой массив в рендере покажет пустую корзину
                $result['basket'] = [];
                echo json_encode($result);
            }
        }
    }

    /**
     * FULL PAGE cart render function
     */
    public function actionCart()
    {

        // if USER is logged in
        if (isset($_SESSION['user_id'])) {

            $id_user = $_SESSION['user_id'];
            $user = User::findOne(['id_user' => $id_user]);
            $this->layout = "main";
            return $this->render('cart', [
                'active' => ['page' => 'cart'],
                'user' => $user
            ]);

            // if GUEST
        } else {
            $this->layout = "main";
            return $this->render('cart', [
                'active' => ['page' => 'cart'],
            ]);
        }
    }

    /**
     * add to cart function - метод добавления товаров в корзину
     */
    public function actionAdd()
    {

        // перехватываем из POST значения атрибутов кнопки
        $id_good = (int)$_POST['$id']; // получаем id товара из запроса
        $price = (int)$_POST['$price']; // получаем цену товара из запроса
        $good_name = $_POST['$name']; // получаем название товара из запроса

        // if USER is logged in - логика если пользователь авторизирован
        // по всем правилам: смотрим есть ли у пользователя заказ, если нет то создаем заказ
        // потом с данным номером заказа  формируем корзину текущего пользователя из $_SESSION
        if (isset($_SESSION['user_id'])) {

            try {
                $isInBasket = false; // задаем всегда для начала как FALSE

                $id_user = $_SESSION['user_id']; // берём id пользователя из сессии
                $is_in_order = 1; // пока оставим так TODO

                $isOrderExists = Basket::ifOrderExists($id_user); // проверяем есть ли у пользователя заказ

                if (!$isOrderExists) {// если заказа нет, то создаем новый заказ без суммы и кол-ва
                    $createOrder = Basket::createOrder($id_user);
                }
                $id_order = Basket::ifOrderExists($id_user); // получаем строку заказа пользователя
                $order = (int)$id_order['id_order']; // получаем номер заказа

                // получаем столбец с id товара из корзины
                $basket = Basket::getOneColumn($id_user, 'id_good');
                foreach ($basket as $item) { // перебираем корзину
                    foreach ($item as $key) {
                        if ((int)$key == $id_good) {
                            $isInBasket = true; // если товар в корзине есть то меняем на TRUE
                        }
                    }
                }

                // далаем запрос на добавление в зависимости от $isInBasket
                $add = Basket::addGood($id_user, $id_good, $price, 1, $order, $isInBasket);

                $response['result'] = $add;
                echo json_encode($response); // отправляем ответ в АЯКС запрос

            } catch (\Exception $e) {
                die ('ERROR: ' . $e->getMessage());
            }


            // if GUEST - если пользователь не авторизировался работаем с сессией
        } else {

            // если заказ уже сформирован то проверяем есть ли товар в массиве корзины
            if (isset($_SESSION['basket'])) {

                $isInSession = false;
                // проверяем товар в корзине
                for ($i = 0; $i < count($_SESSION['basket']); $i++) {
                    if ($_SESSION['basket'][$i]['id_good'] == $id_good) {
                        // если товавр в корзине то увеличиваем кол-во на 1
                        $newAmount = (int)($_SESSION['basket'][$i]['amount']) + 1;

                        $isInSession = true; // меняем статус

                        // перезаписываем массив по индексу $i
                        $_SESSION['basket'][$i] = [
                            'id_good' => $id_good,
                            'price' => $price,
                            'amount' => $newAmount,
                            'good_name' => $good_name
                        ];
                        break; // останавливаем перебор массива
                    }
                }

                // если товара нет в корзине то добавляем новую запись в массив
                if (!$isInSession) {
                    $_SESSION['basket'][] = [
                        'id_good' => $id_good,
                        'price' => $price,
                        'amount' => 1,
                        'good_name' => $good_name
                    ];
                }

                echo json_encode($_SESSION); // отправляем ответ в АЯКС запрос

            } else { // добавляем первый товар в ПУСТОЙ МАССИВ корзины


                $_SESSION['basket'][] = [
                    'id_good' => $id_good,
                    'price' => $price,
                    'amount' => 1,
                    'good_name' => $good_name
                ];

                echo json_encode($_SESSION); // отправляем ответ в АЯКС запрос
            }
        }
    }

    /**
     * PRODUCT DELETE function - метод удаления товара, всю строку стразу
     */
    public function actionDelete()
    {

        $id_good = (int)$_POST['$id']; // получаем id товара из запроса

        // if USER is logged in
        if (isset($_SESSION['user_id'])) {

            try {
                $isInBasket = false; // задаем всегда для начала как FALSE

                $id_user = $_SESSION['user_id']; // берём id пользователя из сессии

                $basket = Basket::getOneColumn($id_user, 'id_good'); // получаем столбец с id товара из корзины

                foreach ($basket as $item) {
                    foreach ($item as $key) {
                        if ((int)$key == $id_good) {
                            $isInBasket = true; // если товар в корзине есть то меняем на TRUE
                        }
                    }
                }

                if ($isInBasket) {

                    // далаем запрос на удаление в зависимости если товар в корзине
                    $delete = Basket::deleteGood($id_user, $id_good);

                    $response['result'] = $delete;
                    echo json_encode($response); // отправляем ответ в АЯКС запрос
                } else {
                    $response['result'] = 'THERE IS NO SUCH GOOD IN A BASKET';
                    echo json_encode($response); // отправляем ответ в АЯКС запрос
                }


            } catch (\Exception $e) {
                die ('ERROR: ' . $e->getMessage());
            }


            // if GUEST - если пользователь не авторизировался работаем с сессией
        } else {

            // если заказ уже сформирован
            if (isset($_SESSION['basket'])) {

                // проверяем товар в корзине
                for ($i = 0; $i < count($_SESSION['basket']); $i++) {
                    if ($_SESSION['basket'][$i]['id_good'] == $id_good) {
                        // стираем данную запись
                        // стирание делаем через перезапись массива
                        $newArr = []; // создаем новый массив для накопления
                        for ($j = 0; $j < count($_SESSION['basket']); $j++) {
                            $id_good_new = $_SESSION['basket'][$j]['id_good'];
                            $amount_new = $_SESSION['basket'][$j]['amount'];
                            $price_new = $_SESSION['basket'][$j]['price'];
                            $good_name_new = $_SESSION['basket'][$j]['good_name'];
                            if ($j != $i) {
                                $newArr[] = [
                                    'id_good' => $id_good_new,
                                    'price' => $price_new,
                                    'amount' => $amount_new,
                                    'good_name' => $good_name_new
                                ];
                            }
                        }
                        // и всю сессию заново перезатираем новым массивом
                        $_SESSION['basket'] = $newArr;
                        break; // останавливаем перебор массива
                    }
                }

                echo json_encode($_SESSION); // отправляем ответ в АЯКС запрос

            } else { // если товара нет ЧЕГО не должно быть
                $response['result'] = 'THERE IS NO SUCH GOOD IN A BASKET';
                echo json_encode($response); // отправляем ответ в АЯКС запрос
            }
        }
    }


    /**
     * goods subtraction function - метод уменьшения кол-ва товара в строке по конкретному пользователю
     */
    public function actionSubtract()
    {

        $id_good = (int)$_POST['$id']; // получаем id товара из запроса

        // if USER is logged in
        if (isset($_SESSION['user_id'])) {

            try {
                $isInBasket = false; // задаем всегда для начала как FALSE

                $id_user = $_SESSION['user_id']; // берём id пользователя из сессии

                $basket = Basket::getOneColumn($id_user, 'id_good'); // получаем столбец с id товара из корзины

                foreach ($basket as $item) { // ТУТ проверка в принципе не нужна
                    foreach ($item as $key) {
                        if ((int)$key == $id_good) {
                            $isInBasket = true; // если товар в корзине есть то меняем на TRUE
                        }
                    }
                }

                if ($isInBasket) {
                    $goods = Basket::getBasket($id_user); // получаем всю корзину по пользователю

                    foreach ($goods as $item) {
                        // если товаров ноль или один то вместо вычитания удаляем строку полностью
                        if ($item['id_good'] == $id_good && $item['amount'] == 1) {

                            // далаем запрос на удаление в зависимости от $isInBasket
                            $delete = Basket::deleteGood($id_user, $id_good);

                        } else { // если товара более 1 штуки то уменьшаем стоимость

                            $subsract = Basket::goodSubtract($id_user, $id_good);
                            break;

                        }
                    }

                    $response['result'] = 1;
                    echo json_encode($response); // отправляем ответ в АЯКС запрос
                } else {
                    $response['result'] = 'THERE IS NO SUCH GOOD IN A BASKET';
                    echo json_encode($response); // отправляем ответ в АЯКС запрос
                }


            } catch (\Exception $e) {
                die ('ERROR: ' . $e->getMessage());
            }


            // if GUEST - если пользователь не авторизировался работаем с сессией
        } else {

            // если заказ уже сформирован
            if (isset($_SESSION['basket'])) {

                // находим товар в корзине
                for ($i = 0; $i < count($_SESSION['basket']); $i++) {
                    if ($_SESSION['basket'][$i]['id_good'] == $id_good) {

                        // уменьшаем кол-во на 1
                        $newAmount = (int)($_SESSION['basket'][$i]['amount']) - 1;
                        $price = $_SESSION['basket'][$i]['price'];
                        $good_name = $_SESSION['basket'][$i]['good_name'];

                        if ($newAmount == 0) {
                            // если после вычитания кол-во товаров НОЛЬ, то вообще стираем данную запись
                            // стирание делаем через перезапись массива
                            $newArr = []; // создаем новый массив для накопления
                            for ($j = 0; $j < count($_SESSION['basket']); $j++) {
                                $id_good_new = $_SESSION['basket'][$j]['id_good'];
                                $amount_new = $_SESSION['basket'][$j]['amount'];
                                $price_new = $_SESSION['basket'][$j]['price'];
                                $good_name_new = $_SESSION['basket'][$j]['good_name'];
                                if ($j != $i) {
                                    $newArr[] = [
                                        'id_good' => $id_good_new,
                                        'price' => $price_new,
                                        'amount' => $amount_new,
                                        'good_name' => $good_name_new
                                    ];
                                }
                            }
                            // и всю сессию заново перезатираем новым массивом
                            $_SESSION['basket'] = $newArr;

                        } else { // если товаров более 1

                            // перезаписываем массив по индексу $i
                            $_SESSION['basket'][$i] = [
                                'id_good' => $id_good,
                                'price' => $price,
                                'amount' => $newAmount,
                                'good_name' => $good_name
                            ];
                        }
                        break; // останавливаем перебор массива
                    }
                }

                echo json_encode($_SESSION); // отправляем ответ в АЯКС запрос

            } else { // если товара нет ЧЕГО не должно быть
                $response['result'] = 'THERE IS NO SUCH GOOD IN A BASKET';
                echo json_encode($response); // отправляем ответ в АЯКС запрос
            }

        }

    }


}