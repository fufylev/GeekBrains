DROP TABLE IF EXISTS accounts;

START TRANSACTION;
SELECT total FROM accounts WHERE user_id = 4 ;
UPDATE accounts SET total = total - 2000 WHERE user_id = 4 ;
UPDATE accounts SET total = total + 2000 WHERE user_id IS NULL ;
SELECT * FROM accounts;
COMMIT ;

SHOW VARIABLES LIKE 'innodb_log_%' ;