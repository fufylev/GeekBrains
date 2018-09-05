<?php

define('ENV', 'backend');

// load auto loaders for classes
require_once '../../vendor/autoload.php';
require_once '../../system/bootstrap.php';

// load global configuration of application
$config = array_merge(
    include '../../system/config/main.php',
    include '../../system/config/database.php'
);

// include application namespace
use system\components\App;

// start new app instance
$app = new App($config);
$app->start();