<?php

namespace system\components;

abstract class Model
{

    public $errors = [];

    /**
     * Attributes validation rules
     * @return array
     */
    protected function rules()
    {
        /**
         * Example
         *
         * [
         *  'login'     => ['string', 'min' => 0, 'max' => 10],
         *  'password'  => ['string', 'min' => 8],
         *  'email'     => ['email'],
         *  'status'    => ['integer']
         * ]
         */
        return [];
    }

    /**
     * Model class name
     * @return string
     */
    protected static function modelName()
    {
        // get names of current class
        $classNames = explode('\\', static::class);
        // get file name
        $name = array_pop($classNames);

        return $name;
    }

    /**
     * Loads attributes values from GET/POST
     * @param array $request
     * @return bool
     */
    public function load(array $request)
    {
        if (isset($request[static::modelName()])) {
            // load model data from request by Model[key]
            $data = $request[static::modelName()];

            // set new values to object
            foreach ($data as $key => $value) {
                $this->$key = $value;
            }

            // return loading state
            return true;
        } else {
            return false;
        }
    }

    /**
     * Add error string into array
     * @param string $attribute
     * @param string $string
     */
    public function addError(string $attribute, string $string)
    {
        $this->errors[$attribute] = $string;
    }

    /**
     * Validates object attributes with rules
     * @return bool
     */
    public function validate()
    {
        // TODO: complete model attributes validation with rules
        foreach ($this->rules() as $param => $type) {
            echo "<p>Param: <b>{$param}</b>, type: <b>{$type}</b>";
        }
    }
}
