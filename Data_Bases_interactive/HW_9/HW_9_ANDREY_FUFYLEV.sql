-- ДЗ№1 ---------
/* 1. Создайте таблицу logs типа Archive. 
Пусть при каждом создании записи в таблицах users, catalogs и products в таблицу logs помещается время и дата создания записи, 
название таблицы, идентификатор первичного ключа и содержимое поля name. */

USE shop;

DROP TABLE IF EXISTS logs;
CREATE TABLE `logs` (
  `inserted_data` varchar(255) DEFAULT NULL COMMENT 'Вставленные данные'
) ENGINE=ARCHIVE DEFAULT CHARSET=utf8 COMMENT='Log таблица';

DELIMITER //

DROP TRIGGER IF EXISTS users_log//
CREATE TRIGGER users_log AFTER INSERT ON users
FOR EACH ROW
BEGIN
	set @inserted_data = CONCAT(NOW(),', TABLE_NAME - users, id - ', NEW.id, ', содержимое поля name - ', NEW.name );
  	INSERT INTO `logs` (`inserted_data`) VALUES (@inserted_data);
END//

DROP TRIGGER IF EXISTS catalogs_log//
CREATE TRIGGER catalogs_log AFTER INSERT ON catalogs
FOR EACH ROW
BEGIN
	set @inserted_data = CONCAT(NOW(),', TABLE_NAME - catalogs, id - ', NEW.id, ', содержимое поля name - ', NEW.name );
  	INSERT INTO `logs` (`inserted_data`) VALUES (@inserted_data);
END//

DROP TRIGGER IF EXISTS products_log//
CREATE TRIGGER products_log AFTER INSERT ON products
FOR EACH ROW
BEGIN
	set @inserted_data = CONCAT(NOW(),', TABLE_NAME - products, id - ', NEW.id, ', содержимое поля name - ', NEW.name );
  	INSERT INTO `logs` (`inserted_data`) VALUES (@inserted_data);
END//

DELIMITER ;

INSERT INTO `users` (`id`, `name`) VALUES (NULL, 'New insert'); -- тригер сработал - проверено
INSERT INTO `catalogs` (`id`, `name`) VALUES (NULL, 'New insert'); -- тригер сработал - проверено
INSERT INTO `products` (`id`, `name`) VALUES (NULL, 'New insert'); -- тригер сработал - проверено


/* 2. (по желанию) Создайте SQL-запрос, который помещает в таблицу users миллион записей.  */