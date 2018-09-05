<?php

namespace module\traits;

trait Singleton
{
    protected $a = 0;
    private static $instance; // Экземпляр объекта

    // Защищаем от создания через new Singleton
    private function __construct()
    { /* ... @return Singleton */
    }

    // Защищаем от создания через клонирование
    private function __clone()
    { /* ... @return Singleton */
    }

    // Защищаем от создания через unserialize
    private function __wakeup()
    { /* ... @return Singleton */
    }

    // Возвращает единственный экземпляр класса. @return Singleton
    public static function getInstance()
    {
        if (empty (self::$instance)) {
            self::$instance = new self ();
        }
        return self::$instance;
    }

    /*public function doAction()
    {
      $this->a++;
      return "запуск Singleton {$this->a}-й раз<br>";
    }*/
}