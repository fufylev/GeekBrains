/* 1. Составьте список пользователей users, которые осуществили хотя бы один заказ (orders) в интернет-магазине. */

-- Изменяем таблицы "orders" и "orders_products" и создаем связи по ключам
DROP TABLE IF EXISTS orders;
CREATE TABLE `orders` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  KEY `index_of_user_id` (`user_id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Заказы';


DROP TABLE IF EXISTS orders_products;
CREATE TABLE `orders_products` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `order_id` bigint(20)  unsigned DEFAULT NULL,
  `product_id` bigint(20)  unsigned DEFAULT NULL,
  `total` int(10) unsigned DEFAULT '1' COMMENT 'Кол-во заказанных товарных позиций',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  CONSTRAINT `fk_order_id` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Состав заказать';

-- наполняем таблицы
INSERT INTO `orders` (user_id) VALUES (1), (3), (5);
INSERT INTO `orders_products` (order_id, product_id, total) VALUES ( 1, 4, 1) , ( 2, 5, 5), ( 3, 6, 2), ( 4, 7, 7);

-- Делаем запрос
SELECT name FROM users JOIN orders on users.id = orders.`user_id`;