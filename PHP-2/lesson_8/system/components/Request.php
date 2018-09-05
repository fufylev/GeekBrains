<?php

namespace system\components;

/**
 * Class Request
 * @package system\components
 */
class Request extends BaseObject
{

    public $route;
    public $redirectedFrom;

    /**
     * Request constructor.
     */
    public function __construct()
    {
        $this->redirectedFrom = isset($_SERVER['REDIRECT_URL']) ? $_SERVER['REDIRECT_URL'] : false;

        if (empty($this->get('route'))) {
            $this->route = App::$current->config['defaultRoute'];
        } else {
            $this->route = strtolower($this->get('route'));
        }
    }

    /**
     * @param string|null $key
     * @return mixed
     */
    public function get(string $key = null)
    {
        if (is_null($key)) {
            // remove 'route' param from GET
            $data = $_GET;
            array_shift($data);

            return $data;
        } else {
            return (isset($_GET[$key])) ? $_GET[$key] : false;
        }
    }

    /**
     * @param string|null $key
     * @return mixed
     */
    public function post(string $key = null)
    {
        if (is_null($key)) {
            return $_POST;
        } else {
            return (isset($_POST[$key])) ? $_POST[$key] : false;
        }
    }

    /**
     * @return bool
     */
    public function isPost()
    {
        return ($_SERVER['REQUEST_METHOD'] == 'POST');
    }

    /**
     * @return bool
     */
    public function isGet()
    {
        return ($_SERVER['REQUEST_METHOD'] == 'GET');
    }

    /**
     * @return bool
     */
    public function isAjax()
    {
        $flag = (!empty($_SERVER['HTTP_X_REQUESTED_WITH']))
            ? strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])
            : 'normal';

        return ($flag == 'xmlhttprequest');
    }

    /**
     * @param string|null $url
     * @param bool $isGlobal
     */
    public function redirect(string $url = null, $isGlobal = false)
    {
        $redirect = "//";

        if (!is_null($url)) {
            if (!$isGlobal) {
                $redirect .= $_SERVER['HTTP_HOST'];
                $redirect .= ($url[0] == '/') ? $url : "/{$url}";
            } else {
                $redirect = $url;
            }
        } else {
            $redirect .= $_SERVER['HTTP_HOST'];
        }

        header('Location: ' . $redirect);
    }

    /**
     * Return to previous page
     */
    public function goBack()
    {
        header('Location: ' . $this->redirectedFrom);
    }

}