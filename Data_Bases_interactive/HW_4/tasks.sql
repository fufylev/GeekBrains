-- task 1
SELECT
AVG(
  (
    (YEAR(CURRENT_DATE) - YEAR(date_bith)) -                      
    (DATE_FORMAT(CURRENT_DATE, '%m%d') < DATE_FORMAT(date_bith, '%m%d')) 
  )) AS avarage_age
FROM users;

-- task 2
SELECT 
    COUNT(DAYNAME(date_bith)) as total,  
    DAYNAME(MAKEDATE(YEAR(CURRENT_DATE), DAYOFYEAR(date_bith))) as dayname 
FROM users 
GROUP BY dayname;

-- task 3
SELECT 
    ROUND(EXP(SUM(LOG(value))), 2) 
FROM storehouses_products;