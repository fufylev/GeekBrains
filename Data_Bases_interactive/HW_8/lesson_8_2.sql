-- ДЗ№2 ---------
/* 2. В таблице products есть два текстовых поля: name с названием товара и description с его описанием. 
Допустимо присутствие обоих полей или одно из них. 
Ситуация, когда оба поля принимают неопределенное значение NULL неприемлема. 
Используя триггеры, добейтесь того, чтобы одно из этих полей или оба поля были заполнены. 
При попытке присвоить полям NULL-значение необходимо отменить операцию. */

DELIMITER //
USE shop //
DROP TRIGGER IF EXISTS check_catalog_name_desc_insert//
CREATE TRIGGER check_catalog_name_desc_insert BEFORE INSERT ON products
FOR EACH ROW
BEGIN
  	IF (NEW.name = NULL AND NEW.description = NULL) THEN
  		SIGNAL SQLSTATE '45000' 
		SET MESSAGE_TEXT = "Попытка вставки NULL по NAME and DESCRIPTION";
  	END IF;
END//


INSERT INTO products VALUES (DEFAULT, NULL, NULL, NULL, NULL, DEFAULT, DEFAULT)//


-- создание таблицы для наглядности ---
CREATE TABLE `products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'Название',
  `description` text COMMENT 'Описание',
  `price` decimal(11,2) DEFAULT NULL COMMENT 'Цена',
  `catalog_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `index_of_catalog_id` (`catalog_id`),
  CONSTRAINT `fk_catalog_id` FOREIGN KEY (`catalog_id`) REFERENCES `catalogs` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COMMENT='Товарные позиции';