<?php
/**
 * Created by PhpStorm.
 * User: andreyfufylev
 * Date: 27.06.2018
 * Time: 16:30
 */

/* 1. Создать структуру классов ведения товарной номенклатуры.
а) Есть абстрактный товар.
б) Есть цифровой товар, штучный физический товар и товар на вес.
в) У каждого есть метод подсчета финальной стоимости.
г) У цифрового товара стоимость постоянная – дешевле штучного товара в два раза. У штучного товара обычная стоимость,
у весового – в зависимости от продаваемого количества в килограммах. У всех формируется в конечном итоге доход с продаж.
д) Что можно вынести в абстрактный класс, наследование? */

abstract class Goods
{
    protected $idProduct;
    protected $name;
    protected $price;
    protected $sum;
    protected $amount;

    function __construct($idProduct, $name, $price, $amount)
    {
        $this->idProduct = $idProduct;
        $this->name = $name;
        $this->price = $price;
        $this->amount = $amount;
    }

    abstract protected function getOutcomes();

    abstract protected function print();
}

class Digital extends Goods
{
    function __construct($idProduct, $name, $price, $amount)
    {
        parent::__construct($idProduct, $name, $price, $amount);
    }

    public function getOutcomes()
    {
        return $this->sum = $this->price * $this->amount;

    }

    public function print()
    {
        $this->getOutcomes();
        echo "Outcome of <b>{$this->name}</b> sales is <b>{$this->sum}$</b>" . "<br><hr>";
    }
}

class Physical extends Goods
{
    function __construct($idProduct, $name, $price, $amount)
    {
        parent::__construct($idProduct, $name, $price, $amount);
    }

    public function getOutcomes()
    {
        return $this->sum = $this->price * $this->amount;

    }

    public function print()
    {
        $this->getOutcomes();
        echo "Outcome of <b>{$this->name}</b> sales is <b>{$this->sum}$</b>" . "<br><hr>";
    }
}

class Weight extends Goods
{

    public $discount;
    public $weight;

    function __construct($idProduct, $name, $price, $weight)
    {
        $this->idProduct = $idProduct;
        $this->name = $name;
        $this->price = $price;
        $this->weight = $weight;
    }

    public function getOutcomes()
    {
        switch ($this->weight) {
            case $this->weight < +1:
                $this->discount = 1;
                break;
            case $this->weight > 1 || $this->weight <= 5:
                $this->discount = 0.9;
                break;
            case $this->weight > 5 || $this->weight <= 10:
                $this->discount = 0.8;
                break;
            case $this->weight > 10:
                $this->discount = 0.75;
                break;
        }

        return $this->sum = $this->price * $this->weight * $this->discount;
    }

    public function print()
    {
        $this->getOutcomes();
        echo "Outcome of <b>{$this->name}</b> sales is <b>{$this->sum}$</b>" . "<br><hr>";
    }
}


$digital = new Digital(12, 'Window 10', 100, 12);
$digital->print();

$physical = new Physical(14, 'Windows 10 BOX MEMORY STICK', 199, 17);
$physical->print();

$physical = new Weight(12, 'Walnuts', 12, 12);
$physical->print();