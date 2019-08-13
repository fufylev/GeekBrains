DROP TABLE IF EXISTS rubrics;
CREATE TABLE rubrics (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) COMMENT 'Название раздела',
	UNIQUE unique_name(name(10))
) COMMENT = 'Разделы интернет-магазина';

INSERT INTO rubrics VALUES 
(DEFAULT, 'Мат платы'),
(DEFAULT, 'Видеокарты'),
(DEFAULT, 'Сетевая карта'),
(DEFAULT, 'Дисковод'),
(DEFAULT, NULL),
(DEFAULT, NULL),
(DEFAULT, 'Процессоры');

INSERT INTO products 
(name, description, price, catalog_id)
VALUES
('ASUS4', 'Материнская плата', 7120.00, 5),
('ASUS5', 'Материнская плата', 19310.00, 5),
('ASUS6', 'Материнская плата', 5060.00, 5);

SELECT name FROM catalogs
UNION ALL
SELECT name FROM rubrics
ORDER BY name DESC;

(SELECT name FROM catalogs
ORDER BY name DESC
LIMIT 2)
UNION ALL
(SELECT name FROM rubrics
ORDER BY name DESC
LIMIT 2);

SELECT
id, name, catalog_id
FROM
products
WHERE
catalog_id = (SELECT id FROM catalogs WHERE name = "Материнские платы");

SELECT
id, name, catalog_id
FROM
products
WHERE
price = (SELECT MAX(price) FROM products);

SELECT
id, name, catalog_id
FROM
products
WHERE
price < (SELECT AVG(price) FROM products);

SELECT
id, name, (SELECT name FROM catalogs WHERE id = catalog_id) AS 'catalod'
FROM 
products;

SELECT 
products.id, 
products.name, 
(SELECT catalogs.name FROM catalogs WHERE catalogs.id = products.catalog_id) AS 'catalog'
FROM
products;

SELECT
id, name, catalog_id
FROM
products
WHERE
catalog_id IN (SELECT id FROM catalogs);

SELECT
id, name, catalog_id
FROM
products
WHERE
catalog_id = 1 AND price < ANY (SELECT price FROM products WHERE catalog_id = 5);

SELECT
id, name, catalog_id
FROM
products
WHERE
catalog_id = 5 AND price < ALL (SELECT price FROM products WHERE catalog_id = 1);

SELECT * FROM catalogs WHERE EXISTS (SELECT * FROM products WHERE catalog_id = catalogs.id);
SELECT * FROM catalogs WHERE EXISTS (SELECT 1 FROM products WHERE catalog_id = catalogs.id);
SELECT * FROM catalogs WHERE NOT EXISTS (SELECT * FROM products WHERE catalog_id = catalogs.id);

SELECT AVG(price) FROM (SELECT MIN(price) AS price FROM products GROUP BY catalog_id) AS prod;


DROP TABLE IF EXISTS tbl1;
CREATE TABLE tbl1 (
	value VARCHAR(255)
);

INSERT INTO tbl1 VALUES 
('Мат платы'),
('Видеокарты'),
('Сетевая карта');


DROP TABLE IF EXISTS tbl2;
CREATE TABLE tbl2 (
	value VARCHAR(255)
);

INSERT INTO tbl2 VALUES 
('Мат платы 2'),
('Видеокарты 2'),
('Сетевая карта 2');

SELECT * FROM tbl1, tbl2;
SELECT * FROM tbl1 join tbl2;
SELECT tbl1.*, tbl2.* FROM tbl1, tbl2;

SELECT t1.value, t2.value FROM tbl1 AS t1, tbl2 AS t2;

select p.name, p.price, c.name from catalogs as c join products as p where c.id = p.`catalog_id`;

select p.name, p.price, c.name from catalogs as c join products as p on c.id = p.`catalog_id`;

select * from catalogs as fst join catalogs as snd on fst.id = snd.id;

select * from catalogs as fst join catalogs as snd using(id);

select p.name, p.price, c.name from catalogs as c left join products as p on c.id = p.`catalog_id`;
select p.name, p.price, c.name from products as p right join catalogs as c on c.id = p.`catalog_id`;

update catalogs join products on catalogs.id = products.`catalog_id` set price = price * 0.9 where catalogs.name = 'Материнские платы';

delete products, catalogs from catalogs join products on catalogs.id = products.`catalog_id` where catalogs.`name` = 'Материнские платы';

show create table products;

alter table products change catalog_id catalog_id bigint unsigned default null;
alter table products drop foreign key products_ibfk_1;
alter table products add constraint fk_catalog_id FOREIGN KEY (`catalog_id`) references catalogs (id) on delete no action on update no action;
alter table products drop foreign key fk_catalog_id;
alter table products add constraint fk_catalog_id FOREIGN KEY (`catalog_id`) references catalogs (id) on delete cascade on update cascade;

update catalogs set id = 7 where name = 'Материнские платы';
delete from catalogs where name = 'Материнские платы';

