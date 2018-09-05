<?php

namespace system\components;

/**
 * Class Router
 * @package system\components
 *
 */
class Router extends BaseObject
{

    /**
     * @var Controller Current controller
     */
    private $_controller = false;

    /**
     * @var string Current controller action
     */
    private $_action = false;

    public function __construct(string $route)
    {
        $route = explode('/', $route);
        $namespace = App::$current->config['controllerNamespace'];

        // app\controllers\NameController
        $controllerName = $namespace . '\\' . Formatter::fromRoute($route[0]) . "Controller";

        try {
            $this->_controller = new $controllerName();

            $this->_action = 'action';
            $this->_action .= (isset($route[1]))
                ? Formatter::fromRoute($route[1])
                : $this->_controller->defaultAction;

        } catch (\Exception $e) {
            Debug::trace($e);
        }
    }

    public function route()
    {
        try {
            $this->_controller->executeAction(
                $this->_action,
                App::$current->request->get()
            );
        } catch (\Exception $e) {
            Debug::trace($e);
        }
    }

    public function getController()
    {
        return $this->_controller;
    }

    public function getAction()
    {
        return $this->_action;
    }

}
