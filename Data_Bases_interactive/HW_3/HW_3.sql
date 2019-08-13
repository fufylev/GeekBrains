-- ДОМАШНЯЯ РАБОТА ПО УРОКУ №3

-- ЗАДАНИЕ №1
/*Пусть в таблице users поля created_at и updated_at оказались незаполненными. 
Заполните их текущими датой и временем.*/
USE shop;
DROP TABLE IF EXISTS shop.users;
CREATE TABLE shop.users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Имя покупателя',
	birthday_at DATE COMMENT 'Дата рождения',
	created_at VARCHAR(255),
	updated_at VARCHAR(255) 
) COMMENT = 'Покупатели';

INSERT INTO shop.users (id, name, birthday_at) VALUES 
						(1, 'Вася', '1979-01-27'),
                        (2, 'Вадим', '1989-01-27'),
                        (3, 'Батя', '1999-01-27'),
                        (4, 'Вован', '1986-01-27'),
                        (5, 'Димон', '2008-01-27');
                        
UPDATE users SET created_at = NOW(), updated_at = NOW() WHERE created_at IS NULL || updated_at IS NULL;
SELECT * FROM users;



-- ЗАДАНИЕ №2 -------------
/*Таблица users была неудачно спроектирована. 
Записи created_at и updated_at были заданы типом VARCHAR и в них долгое время помещались значения в формате "20.10.2017 8:10". 
Необходимо преобразовать поля к типу DATETIME, сохранив введеные ранее значения.*/
USE shop;
TRUNCATE users;

INSERT INTO shop.users (id, n ame, birthday_at, created_at, updated_at) VALUES 
						(DEFAULT, 'Вася', '1979-01-27', '20.10.2017 8:10:00','20.10.2017 8:10:00'),
                        (DEFAULT, 'Вадим', '1989-01-27', '20.10.2018 10:10:00','20.10.2018 10:10:00'),
                        (DEFAULT, 'Батя', '1999-01-27', '16.12.2011 17:10:00','16.12.2011 17:10:00'),
                        (DEFAULT, 'Вован', '1986-01-27', '20.10.2007 12:10:00','20.10.2017 12:10:00'),
                        (DEFAULT, 'Димон', '2008-01-27', '01.01.2012 17:17:00','01.01.2012 17:17:00');
SELECT * FROM users; -- проверяем выполнение запроса

/*
Учимся подбирать формат даты через SELECT
SELECT DATE_FORMAT(STR_TO_DATE(users.`created_at`, '%d.%m.%Y %k:%i'), '%Y-%m-%d %k:%i') AS new_date FROM users;
SELECT DATE_FORMAT(STR_TO_DATE(users.`created_at`, '%d.%m.%Y %T'), '%Y-%m-%d %T') AS new_date FROM users;
*/

-- составляем запрос на UPDATE
UPDATE users SET 
		created_at = DATE_FORMAT(STR_TO_DATE(users.`created_at`, '%d.%m.%Y %T'), '%Y-%m-%d %T'), 
		updated_at = DATE_FORMAT(STR_TO_DATE(users.`updated_at`, '%d.%m.%Y %T'), '%Y-%m-%d %T');
-- меняем тип данных столбцов
ALTER TABLE users MODIFY users.`created_at` DATETIME DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users MODIFY users.`updated_at` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;
SELECT * FROM users; -- проверяем выполнение запроса




-- ЗАДАНИЕ №3 -------------------------
/*
В таблице складских запасов storehouses_products в поле value могут встречаться самые разные цифры: 
0, если товар закончился и выше нуля, если на складе имеются запасы. 
Необходимо отсортировать записи таким образом, чтобы они выводились в порядке увеличения значения value. 
Нулевые запасы должны выводиться в конце, после всех записей.
*/
USE shop;
DROP TABLE IF EXISTS storehouse_products;
CREATE TABLE storehouse_products (
	id SERIAL PRIMARY KEY,
	storehouse_id INT UNSIGNED,
	product_id INT UNSIGNED,
	value INT UNSIGNED COMMENT 'Запас товарной позиции на складе',
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COMMENT 'Запасы на складе';

INSERT INTO `storehouse_products` (`id`, `storehouse_id`, `product_id`, `value`, `created_at`, `updated_at`) VALUES
(DEFAULT, 1, 1, 0, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(DEFAULT, 1, 2, 2500, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(DEFAULT, 1, 3, 0, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(DEFAULT, 1, 4, 30, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(DEFAULT, 1, 5, 500, '2019-05-13 17:50:28', '2019-05-13 17:50:28'),
(DEFAULT, 1, 6, 1, '2019-05-13 17:50:28', '2019-05-13 17:50:28');

-- ну и как то вот так:
SELECT * FROM storehouse_products ORDER BY IF(value <> 0, 0, 1), value;




-- ЗАДАНИЕ №4 -------------------------
/*
(по желанию) Из таблицы users необходимо извлечь пользователей, родившихся в августе и мае. 
Месяцы заданы в виде списка английских названий ('may', 'august')
*/
USE shop;
DROP TABLE IF EXISTS shop.users;
CREATE TABLE shop.users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Имя покупателя',
	birthday_at DATE COMMENT 'Дата рождения',
	created_at VARCHAR(255),
	updated_at VARCHAR(255) 
) COMMENT = 'Покупатели';

INSERT INTO shop.users (id, name, birthday_at) VALUES 
						(DEFAULT, 'Вася', '1979-01-27'),
                        (DEFAULT, 'Вадим', '1989-02-27'),
                        (DEFAULT, 'Батя', '1999-03-27'),
                        (DEFAULT, 'Вован', '1986-04-27'),
                        (DEFAULT, 'Димон', '2008-05-27'),
                        (DEFAULT, 'Вован', '1986-06-27'),
                        (DEFAULT, 'Вован', '1986-07-27'),
                        (DEFAULT, 'Вован', '1986-08-27'),
                        (DEFAULT, 'Вован', '1986-09-27');

SELECT name, birthday_at, CASE
				WHEN DATE_FORMAT(birthday_at, '%c') = 1 THEN 'January'
				WHEN DATE_FORMAT(birthday_at, '%c') = 2 THEN 'February'
				WHEN DATE_FORMAT(birthday_at, '%c') = 3 THEN 'March'
				WHEN DATE_FORMAT(birthday_at, '%c') = 4 THEN 'April'
				WHEN DATE_FORMAT(birthday_at, '%c') = 5 THEN 'May'
				WHEN DATE_FORMAT(birthday_at, '%c') = 6 THEN 'June'
				WHEN DATE_FORMAT(birthday_at, '%c') = 7 THEN 'July'
				WHEN DATE_FORMAT(birthday_at, '%c') = 8 THEN 'August'
				WHEN DATE_FORMAT(birthday_at, '%c') = 9 THEN 'September'
				WHEN DATE_FORMAT(birthday_at, '%c') = 10 THEN 'October'
				WHEN DATE_FORMAT(birthday_at, '%c') = 11 THEN 'November'
				WHEN DATE_FORMAT(birthday_at, '%c') = 12 THEN 'December'
                ELSE 'unknown'
			END AS month
	FROM users HAVING month IN ('May', 'August');

-- ИЛИ
SELECT name, DATE_FORMAT(birthday_at, '%M') AS month FROM users;
SELECT name FROM users WHERE DATE_FORMAT(birthday_at, '%M') IN ('May', 'August');


-- ЗАДАНИЕ №5 -------------------------
/*
(по желанию) Из таблицы catalogs извлекаются записи при помощи запроса. SELECT * FROM catalogs WHERE id IN (5, 1, 2); 
Отсортируйте записи в порядке, заданном в списке IN.
*/
SELECT * FROM catalogs WHERE id IN (5, 1, 2);
SELECT * FROM catalogs WHERE id IN (5, 1, 2) ORDER BY FIELD(id, 5,1,2);
