<?php

namespace module\traits;
require_once 'Singleton.php';

class TraitClass
{

    use Singleton;

    public $count = 0;

    public function getCount()
    {
        return $this->count++ . "<br>";
    }

}