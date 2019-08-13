/* 2. Создайте представление, которое выводит название (name) товарной позиции из таблицы products и соответствующее название (name) каталога из таблицы catalogs. */

PREPARE product_name FROM 'SELECT p.id, p.name, c.name FROM products AS p JOIN catalogs AS c ON c.id = p.`catalog_id` having id = ?';
SET @id = 4 ;
EXECUTE product_name USING @id;