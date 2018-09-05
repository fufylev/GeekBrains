<?php

namespace system\components;

/**
 * Class BaseObject
 * @package system\components
 */
class BaseObject
{

    /**
     * Magic method to get property values
     *
     * @param string $name method name
     * @return mixed
     */
    public function __get($name)
    {
        $magicGet = "get" . ucfirst($name);

        if (method_exists($this, $magicGet)) {
            try {
                return $this->{$magicGet}();
            } catch (\Exception $e) {
                echo $e->getMessage();
                die();
            }
        } else {
            return false;
        }
    }

    /**
     * Magic method to set property values
     *
     * @param string $name method name
     * @param mixed $value new property value
     * @return mixed
     */
    public function __set($name, $value)
    {
        $magicSet = "set" . ucfirst($name);

        if (method_exists($this, $magicSet)) {
            try {
                return $this->{$magicSet}($value);
            } catch (\Exception $e) {
                echo $e->getMessage();
                die();
            }
        } else {
            return false;
        }
    }

}