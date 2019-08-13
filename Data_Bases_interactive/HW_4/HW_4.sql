-- ДОМАШНЯЯ РАБОТА ПО УРОКУ №4 -------------------------------------------------

-- ЗАДАНИЕ №1 ------------------------------------------------------------------
/*Подсчитайте средний возраст пользователей в таблице users.*/
USE shop;
DROP TABLE IF EXISTS shop.users;
CREATE TABLE shop.users (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Имя покупателя',
	birthday_at DATE COMMENT 'Дата рождения',
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) COMMENT = 'Покупатели';

INSERT INTO shop.users (id, name, birthday_at) VALUES 
						(DEFAULT, 'Вася', '1979-05-16'),
                        (DEFAULT, 'Алиса', '1989-07-17'),
                        (DEFAULT, 'Олеся', '1999-07-07'),
                        (DEFAULT, 'Вован', '1986-09-11'),
                        (DEFAULT, 'София', '2008-01-12'),
                        (DEFAULT, 'Василиса', '1979-03-14'),
                        (DEFAULT, 'Андрей', '1991-04-16'),
                        (DEFAULT, 'Денис', '1993-05-31'),
                        (DEFAULT, 'Татьяна', '1996-12-25'),
                        (DEFAULT, 'Елена', '2019-05-13');

SELECT 
	FLOOR(AVG(FLOOR((TO_DAYS(NOW()) - TO_DAYS(birthday_at)) / 365.25))) AS average_age
FROM 
	users;
       
       
       
-- ЗАДАНИЕ №2 -------------------------------------------------------------------
/*
Подсчитайте количество дней рождения, которые приходятся на каждый из дней недели. 
Следует учесть, что необходимы дни недели текущего года, а не года рождения.
*/
-- Сделаем несколько промежуточных выборок на основании внесенных данных из ЗАДАНИЕ №1
-- Преобразуем дату рождения на текущий год 
SELECT name, CONCAT(DATE_FORMAT(now(), '%Y'), DATE_FORMAT(birthday_at, '-%m-%d')) AS current_year_birthday FROM users;
-- Смотрим какие дни недели получаются
SELECT DATE_FORMAT(CONCAT(YEAR(NOW()), DATE_FORMAT(birthday_at, '-%m-%d')), '%W') AS week_day_to_this_year FROM users;

-- РЕЗУЛЬТИРУЮЩАЯ СТРОКА ПОИСКА
SELECT 
	DATE_FORMAT(CONCAT(YEAR(NOW()), DATE_FORMAT(birthday_at, '-%m-%d')), '%W') AS week_day,
	COUNT(*) AS number_of_birthdays
	FROM users 
	GROUP BY week_day 
	ORDER BY FIELD(week_day, 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');




-- ЗАДАНИЕ №3 -------------------------------------------------------------------
/*
(по желанию) Подсчитайте произведение чисел в столбце таблицы.
*/
USE shop;
DROP TABLE IF EXISTS numbers;
CREATE TABLE numbers (
id serial primary key,
value INT NOT NULL
) COMMENT = 'Игра с числами в столбце';

INSERT INTO numbers (value) 
				VALUES 
                (1), (2), (3), (4), (5);

-- Я нашел только такое решение
SELECT CEILING(EXP(SUM(LN(value)))) FROM numbers;
-- как это сделать без помощи скрипта любого ЯП я не знаю

	