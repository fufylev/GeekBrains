<?php

namespace system\components;

use Twig_Loader_Filesystem;
use Twig_Environment;

class View
{

    public $layout;
    public $view;


    private $_render;

    public function __construct($controllerName, $layout, $view)
    {

        $this->layout = $layout;

        $this->view = "{$controllerName}/{$view}";
    }

    public function render(array $params)
    {

        //var_dump($params);
        $loader = new Twig_Loader_Filesystem(
            App::$current->config['components']['twig']['templates']
        );

        $this->_render = new Twig_Environment($loader, array(
            'cache' => App::$current->config['components']['twig']['cache'],
        ));

        try {
            $viewFile = $this->_render->render(
                "{$this->view}.twig",
                $params
            );

            $navbar = $this->_render->render(
                "widgets/navbar.twig",
                $params
            );

            $bottom = $this->_render->render(
                "widgets/bottom.twig",
                $params
            );


            if ($this->layout) {
                $layoutFile = $this->_render->render(
                    "layouts/{$this->layout}.twig",
                    [
                        'app' => App::$current->config['app'],
                        'content' => $viewFile,
                        'navbar' => $navbar,
                        'bottom' => $bottom,
                    ]
                );
            } else {
                $layoutFile = $viewFile;
            }

        } catch (\Exception $error) {
            echo $error->getMessage();
            die();
        }


        echo $layoutFile;
    }

}
