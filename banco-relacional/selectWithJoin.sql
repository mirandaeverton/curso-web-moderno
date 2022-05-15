-- First mode: declaring the tables right in the FROM

-- It is extremely importat to use WHERE to filter the results. Otherwise, you may get a weird result.
SELECT  
    s.nome AS "State",
    c.nome AS 'City',
    regiao AS 'Region'
FROM `states` s, `cities` c
WHERE s.id = c.estado_id;

-- Second mode: using JOIN
SELECT
    s.nome AS 'State',
    c.nome AS 'City,',
    regiao AS 'Region'
FROM `states` s
INNER JOIN `cities` c
    ON s.id = c.estado_id;