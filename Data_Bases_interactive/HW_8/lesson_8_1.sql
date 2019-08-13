-- ДЗ№1 ---------
/*1. Создайте хранимую функцию hello(), которая будет возвращать приветствие, в зависимости от текущего времени суток. 
С 6:00 до 12:00 функция должна возвращать фразу "Доброе утро", 
с 12:00 до 18:00 функция должна возвращать фразу "Добрый день", 
с 18:00 до 00:00 — "Добрый вечер", 
с 00:00 до 6:00 — "Доброй ночи".*/

DELIMITER //
USE shop //

DROP FUNCTION IF EXISTS hello//
CREATE FUNCTION hello()
RETURNS VARCHAR(255) DETERMINISTIC
BEGIN
  	set @night = 'Доброй ночи';
  	set @morning = 'Доброе утро';
  	set @afternoon = 'Добрый день';
  	set @evening = 'Добрый вечер';
  	set @hrs = (SELECT DATE_FORMAT(NOW(), "%k"));
	IF(@hrs >=12 AND @hrs <18) THEN
		RETURN @afternoon;
	ELSEIF (@hrs >=18 AND @hrs <0) THEN
		RETURN @evening;
	ELSEIF (@hrs >=0 AND @hrs <6) THEN
		RETURN @night;
	ELSEIF (@hrs >=6 AND @hrs <12) THEN
		RETURN @morning;
  	END IF;
END//

SELECT  hello()//
