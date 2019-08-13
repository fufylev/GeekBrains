SELECT COUNT(*), SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade;

-- порядок ключевых слов
SELECT COUNT(*), SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade ORDER BY decade DESC; 
SELECT COUNT(*) AS total, SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade ORDER BY total DESC; 
SELECT COUNT(*) AS total, SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade ORDER BY total DESC LIMIT 2;

-- CONCAT

SELECT GROUP_CONCAT(name), SUBSTRING(`birthday_at`,1,3) AS decade FROM users GROUP BY decade;
SELECT GROUP_CONCAT(name SEPARATOR ' ' ), SUBSTRING(`birthday_at`,1,3) AS decade FROM users GROUP BY decade;
SELECT GROUP_CONCAT(name ORDER BY name DESC SEPARATOR ' ' ), SUBSTRING(`birthday_at`,1,3) AS decade FROM users GROUP BY decade;

-- AGREGATE FUNCTION

SELECT COUNT(id) FROM catalogs;
SELECT COUNT(*) FROM catalogs;
SELECT catalog_id, COUNT(*) AS total FROM products GROUP BY catalog_id;

DROP TABLE IF EXISTS tbl;
CREATE TABLE tbl (
		id INT NOT NULL,
		value INT DEFAULT NULL);
INSERT INTO tbl VALUES (1, 230), (2, NULL), (3, 500), (4, NULL);
SELECT * FROM tbl;
SELECT COUNT(id), COUNT(VALUE) FROM tbl;
SELECT COUNT(*) FROM tbl;

SELECT COUNT(DISTINCT id) AS total_ids, COUNT(DISTINCT catalog_id) AS total_catalog_ids FROM products;
SELECT MIN(price) AS min, MAX(price) AS max FROM products;
SELECT catalog_id, MIN(price) AS min, MAX(price) AS max FROM products GROUP BY catalog_id;

-- max price to be better got my means of sort
SELECT id, name, price FROM products ORDER BY price DESC LIMIT 1;

SELECT AVG(price) FROM products;
SELECT ROUND(AVG(price), 2) FROM products;

SELECT catalog_id, ROUND(AVG(price), 2) AS avarege_price FROM products GROUP BY catalog_id;

SELECT catalog_id, ROUND(AVG(price * 1.), 2) AS avarege_price FROM products GROUP BY catalog_id;

SELECT SUM(price) FROM products;
SELECT catalog_id, SUM(price) AS sum FROM products GROUP BY catalog_id;

-- GROUP BY
SELECT * FROM products;
SELECT COUNT(*) AS total, SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade HAVING total >=2;

SELECT name, description, price, catalog_id FROM products GROUP BY name, description, price, catalog_id;

USE shop;
DROP TABLE IF EXISTS products_new;
CREATE TABLE products_new (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Название',
	description TEXT COMMENT 'Описание',
	price DECIMAL (11,2) COMMENT 'Цена',
	catalog_id INT UNSIGNED,
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
	updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	KEY index_of_catalog_id(catalog_id)
) COMMENT = 'Товарные позиции';

INSERT INTO products_new SELECT null,name, description, price, catalog_id, NOW(), NOW() FROM products GROUP BY name, description, price, catalog_id;

DROP TABLE IF EXISTS products;
ALTER TABLE products_new RENAME products;
SELECT * FROM products;

SELECT MAX(name), YEAR(birthday_at) AS birthday_year FROM users GROUP BY birthday_year ORDER BY birthday_year;
SELECT ANY_VALUE(name), YEAR(birthday_at) AS birthday_year FROM users GROUP BY birthday_year ORDER BY birthday_year;
 

SELECT COUNT(*) AS total, SUBSTRING(`birthday_at`, 1,3) AS decade FROM users GROUP BY decade WITH ROLLUP;

