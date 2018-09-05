<?php

class App
{
    public static function Init()
    {
        date_default_timezone_set('Europe/Moscow');
        db::getInstance()->Connect(Config::get('db_user'), Config::get('db_password'), Config::get('db_base'));

        if (php_sapi_name() !== 'cli' && isset($_SERVER) && isset($_GET)) {
            self::web(isset($_GET['path']) ? $_GET['path'] : '');
        }
    }

    protected static function web($url)
    {
        //var_dump($url);
        $url = explode("/", $url);
        if (isset($url[0])) {
            $_GET['page'] = $url[0];
            if (isset($url[1])) {
                if (is_numeric($url[1])) {
                    $_GET['id'] = $url[1];
                } else {
                    $_GET['action'] = $url[1];
                }
                if (isset($url[2])) {
                    $_GET['id'] = $url[2];
                }
            }
        } else {
            $_GET['page'] = 'Index';
        }

        //var_dump($_GET);

        if (isset($_GET['page'])) {
            $controllerName = ucfirst($_GET['page']) . 'Controller';
            //var_dump($controllerName);
            $methodName = isset($_GET['action']) ? $_GET['action'] : 'index';
            //var_dump($methodName);

            if ($methodName == '/' || empty($methodName)) {
                $methodName = 'index';
            }

            $controller = new $controllerName();
            //var_dump($controller);
            $data = [
                'content_data' => $controller->$methodName($_GET),
                'title' => $controller->title,
                'pages' => Page::getPages()
                //'categories' => Category::getCategories(0)
            ];
            //var_dump($data);
            $view = $controller->view . '/' . $methodName . '.html';
            //var_dump($view);
            //var_dump($_GET);
            if (!isset($_GET['asAjax'])) {
                $loader = new Twig_Loader_Filesystem(Config::get('path_templates'));
                $twig = new Twig_Environment($loader);
                $template = $twig->loadTemplate($view);

                echo $template->render($data);
            } else {
                echo json_encode($data);
            }
        }
    }
}
