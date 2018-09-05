<?php

namespace system\components;

use PDO;

abstract class ActiveRecord extends Model
{

    /**
     * Database table name
     * @return string
     */
    protected static function tableName()
    {
        return static::modelName();
    }

    /**
     * Returns column names of table
     * @return array
     */
    private static function tableColumns()
    {
        // get main DB connection
        $db = App::$current->connection;

        // get description of current table
        $q = $db->prepare("DESCRIBE " . static::tableName());
        $q->execute();

        // return array with column names
        return $q->fetchAll(PDO::FETCH_COLUMN);
    }

    /**
     * Query to find item in database
     * @param array $params
     * @return mixed
     */
    private static function find(array $params)
    {
        // cache main connection
        $db = App::$current->connection;

        // prepare SQL string
        $queryString = "select * from `" . static::tableName() . "`";

        if (!is_null($params) && count($params) > 0) {
            $queryString .= " where ";

            // get column names
            $keys = array_keys($params);

            // create placeholders for binding
            for ($i = 0; $i < count($params); $i++) {
                if ($i == 0) {
                    $pair = "{$keys[$i]}=:{$keys[$i]}";
                } else {
                    $pair = " and {$keys[$i]}=:{$keys[$i]}";
                }
                $queryString .= $pair;
            }
        }

        // prepare database statement
        $query = $db->prepare($queryString);

        if (!is_null($params) && count($params) > 0) {
            // bind placeholders with values
            foreach ($params as $key => $value) {
                $type = static::paramType($value);
                $query->bindParam($key, $value, $type);
            }
        }

        // execute in database
        $query->execute();

        return $query;
    }

    /**
     * Recognizes value type for binding
     * @param $value
     * @return int
     */
    private static function paramType($value)
    {
        // check value type for binding
        switch (true) {
            case is_int($value):
                $type = PDO::PARAM_INT;
                break;
            case is_bool($value):
                $type = PDO::PARAM_BOOL;
                break;
            case is_null($value):
                $type = PDO::PARAM_NULL;
                break;
            default:
                $type = PDO::PARAM_STR;
        }

        return $type;
    }

    /**
     * Find single record by filter values
     * @param array $params
     * @return self
     */
    public static function findOne(array $params = [])
    {
        // get one result
        $sth = static::find($params);
        // set to class converting
        $sth->setFetchMode(PDO::FETCH_CLASS, static::class);

        // fetch as class object
        $model = $sth->fetch();
        return $model;
    }

    /**
     * Find all records by filter values
     * @param array $params
     * @return self[]
     */
    public static function findAll(array $params = [])
    {
        return static::find($params)->fetchAll(PDO::FETCH_CLASS, static::class);
    }

    /**
     * Find single record by ID filter
     * @param int $id
     * @return self
     */
    public static function findById(int $id)
    {
        return static::findOne(['id' => $id]);
    }

    /**
     * Saves current values into database
     * @return bool
     */
    public function save()
    {
        $db = App::$current->connection;

        // get columns to processing
        $tableColumns = static::tableColumns();
        array_shift($tableColumns); // remove id

        $columns = [];
        $values = [];

        foreach ($tableColumns as $col) {
            $columns[] = "`{$col}`";
            $values[] = ":{$col}";
        }

        // if already existing record
        if (isset($this->id)) {
            // update by ID
            $queryString = "update `" . static::tableName() . "` set UPDATES where `id`={$this->id};";
            $updates = [];

            foreach ($columns as $i => $item) {
                $updates[] = "{$columns[$i]}={$values[$i]}";
            }

            $queryString = str_replace('UPDATES', implode(',', $updates), $queryString);
        } else {
            // insert with new values
            $queryString = "insert into `" . static::tableName() . "` (COLUMNS) values (KEYS);";

            $queryString = str_replace('COLUMNS', implode(',', $columns), $queryString);
            $queryString = str_replace('KEYS', implode(',', $values), $queryString);
        }

        // prepare database statement
        $query = $db->prepare($queryString);

        foreach ($tableColumns as $property) {
            $newValue = (isset($this->$property)) ? $this->$property : null;
            $newType = static::paramType($newValue);

            $query->bindValue(':' . $property, $newValue, $newType);
        }

        // execute in database
        $result = $query->execute();

        // write to $this lastInsertId()
        if (!isset($this->id)) {
            if ($result) {
                $this->id = $db->lastInsertId();
            }
        }

        return $result;
    }

    /**
     * Delete current item from database
     * @return bool
     */
    public function delete()
    {
        if (isset($this->id)) {
            $db = App::$current->connection;

            // remove by ID
            $queryString = "delete from `" . static::tableName() . "` where id=:id";

            $query = $db->prepare($queryString);
            $query->bindValue(':id', $this->id, static::paramType($this->id));

            return $query->execute();
        } else {
            return false;
        }
    }

}