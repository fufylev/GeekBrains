/* 1. В базе данных shop и sample присутвуют одни и те же таблицы учебной базы данных. 
Переместите запись id = 1 из таблицы shop.users в таблицу sample.users. 
Используйте транзакции. */

START TRANSACTION ;
INSERT INTO sample.users SELECT * FROM shop.users WHERE shop.users.id = 1;
DELETE FROM shop.users WHERE shop.users.id = 1;
COMMIT;

SELECT * FROM sample.users WHERE sample.users.id = 1;

--- БД ----
Drop table if exists sample.users;
CREATE TABLE sample.users (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL COMMENT 'Имя покупателя',
  `birthday_at` date DEFAULT NULL COMMENT 'Дата рождения',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COMMENT='Покупатели';