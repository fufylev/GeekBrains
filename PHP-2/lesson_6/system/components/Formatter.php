<?php

namespace system\components;

/**
 * Class Formatter
 * @package system\components
 */
class Formatter
{

    /**
     * Normalizes controller and action names from URL
     *
     * @param $value
     * @return string
     */
    public static function fromRoute($value)
    {
        return implode(
            '',
            array_map(
                function ($x) {
                    return ucfirst($x);
                },
                explode('-', $value)
            )
        );
    }

    public static function integer($value)
    {
    }

    public static function float($value)
    {
    }

    public static function bool($value)
    {
    }

    public static function string($value)
    {
    }

    public static function email($value)
    {
    }

}