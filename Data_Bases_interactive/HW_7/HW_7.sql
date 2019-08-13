/* 1. Создайте двух пользователей которые имеют доступ к базе данных shop. 
Первому пользователю shop_read должны быть доступны только запросы на чтение данных, 
второму пользователю shop — любые операции в пределах базы данных shop.*/

/* Первый пользователь */
CREATE USER 'shop_read'@'localhost';
GRANT USAGE, SELECT ON shop.* TO 'shop_read'@'localhost'; -- мой ответ
GRANT SELECT, SHOW VIEW ON shop.* TO 'shop_read'@'localhost' IDENTIFIED BY ''; -- вариант препода

/* Второй пользователь */
CREATE USER 'shop'@'localhost';
GRANT ALL ON shop.* TO 'shop'@'localhost';

GRANT ALL ON shop.* TO 'shop'@'localhost' IDENTIFIED BY ''; -- вариант препода