<?php

namespace module;

use module\traits\TraitClass;

require_once 'traits/TraitClass.php';

$obj = TraitClass::getInstance();
echo $obj->getCount();

$obj1 = TraitClass::getInstance();
echo $obj1->getCount();

$obj2 = TraitClass::getInstance();
echo $obj2->getCount();