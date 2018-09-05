<?php

namespace system\components;

abstract class Controller extends BaseObject
{

    /**
     * @var string Controller name
     */
    public $name;

    /**
     * @var string Controller layout view
     */
    public $layout = 'main';

    /**
     * @var string Controller default action
     */
    public $defaultAction = 'index';

    /**
     * Controller constructor.
     * @param string $name
     */
    public function __construct()
    {
        $class = explode('\\', static::class);

        $this->name = strtolower(str_replace(
            'Controller',
            '',
            array_pop($class)
        ));
    }

    /**
     * @param string $view
     * @param array $params
     */
    public function render(string $view, array $params = [])
    {
        if (App::$current->request->isAjax()) {
            $this->renderJson($params);
        } else {
            $view = new View(
                $this->name, //controller name
                $this->layout, //main layout
                $view //view name
            );

            $view->render($params);
        }
    }

    /**
     * @param $data
     */
    public function renderJson($data)
    {
        echo json_encode($data, JSON_PRETTY_PRINT);
    }

    /**
     * @param $actionName
     * @param $params
     * @return mixed
     */
    public function executeAction($actionName, $params)
    {
        if (method_exists($this, $actionName)) {
            return $this->$actionName(
                ...array_values($params)
            );
        } else {
            Debug::error("No routes for action [{$actionName}]");
        }
    }

}
