-- Lesson_2 Home work

-- CREATE DATABASE IF NOT EXISTS shop;
-- CREATE DATABASE IF NOT EXISTS sample;

-- ДОМАШНЕЕ ЗАДАНИЕ №1
DROP TABLE IF EXISTS shop.catalogs;
CREATE TABLE shop.catalogs (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Название раздела',
	UNIQUE unique_name(name(10))
) COMMENT = 'Разделы интернет-магазина';
/*
Ввиду того что NULL не число и не текс, это просто пустая ячейка то такое же значение NULL 
не вызовет ошибки при повторе так как "НИЧЕГО" не равно на "НИЧЕМУ"
*/
INSERT INTO shop.catalogs VALUES 
(DEFAULT, 'Мат платы'),
(DEFAULT, 'Видеокарты'),
(DEFAULT, NULL),
(DEFAULT, NULL),
(DEFAULT, NULL),
(DEFAULT, NULL),
(DEFAULT, 'Процессоры');
/* 
Но как только мы начнем менять NULL на 'empty' to это вызовет ошибку "Duplicate entry 'empty' for key 'unique_name'"
поэтому для выполнения этой команды нужно удалить уникальность поля 'name'
*/
UPDATE shop.catalogs SET shop.catalogs.name = 'empty' WHERE shop.catalogs.name IS NULL;

SELECT * FROM shop.catalogs;
-- Конец домашнего задания №1

----------------------------------------------------------------------------------------------------------------------
-- ДОМАШНЕЕ ЗАДАНИЕ №2
DROP TABLE IF EXISTS media_files_storage;
CREATE TABLE media_files_storage (
	id SERIAL PRIMARY KEY,
	file_name VARCHAR(255) COMMENT 'Название медиа файла',
	file_path VARCHAR(255) COMMENT 'Путь к файлу',
	file_description VARCHAR(255) COMMENT 'Описание Файла',
	file__key_words VARCHAR(255) COMMENT 'Ключевые слова',
	file_owner VARCHAR(255) COMMENT 'Принадлежность пользователю',
	UNIQUE unique_file_name(file_name)
) COMMENT = 'Бада данных медиафайлов';

INSERT INTO media_files_storage VALUES 
(DEFAULT, 'matrix_1999.mov', '/img/media/matrix_1999.mov', 'Фильма Матрица 1999 года выпуска', 'матрица, matrix', 'Максималист'),
(DEFAULT, 'matrix_1999.png', '/img/media/matrix_1999.png', 'Постер фильма Матрица 1999 года выпуска', 'матрица, matrix', 'Максималист'),
(DEFAULT, 'matrix_2003.mov', '/img/media/matrix_2003.mov', 'Фильма Матрица 2003 года выпуска', 'матрица, matrix', 'Максималист'),
(DEFAULT, 'matrix_2003.png', '/img/media/matrix_2003.png', 'Постер фильма Матрица 2003 года выпуска', 'матрица, matrix', 'Максималист');

SELECT * FROM media_files_storage;
-- Конец домашнего задания №2

----------------------------------------------------------------------------------------------------------------------
-- ДОМАШНЕЕ ЗАДАНИЕ №3
DROP TABLE IF EXISTS sample.cat;
CREATE TABLE sample.cat (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Название раздела',
	UNIQUE unique_name(name(10))
) COMMENT = 'Разделы интернет-магазина';

INSERT INTO sample.cat VALUES 
(DEFAULT, 'Товар 1'),
(DEFAULT, 'Товар 2'),
(DEFAULT, 'Товар 3'),
(DEFAULT, 'Товар 4'),
(DEFAULT, 'Товар 5'),
(DEFAULT, 'Товар 6'),
(DEFAULT, 'Товар 7'),
(DEFAULT, 'Товар 8'),
(DEFAULT, 'Товар 9'),
(DEFAULT, 'Товар 10'),
(DEFAULT, 'Товар 11'),
(DEFAULT, 'Товар 12');

SELECT * FROM sample.cat;

INSERT INTO sample.cat SELECT * FROM shop.catalogs on DUPLICATE KEY UPDATE sample.cat.name = shop.catalogs.name;
/* К сожалению не смог понять как сделать чтобы все столбцы заменить без перечисления имен - у меня один столбец, но если их будет много то строка запроса будет сложной */
SELECT * FROM sample.cat;
-- Конец домашнего задания №3