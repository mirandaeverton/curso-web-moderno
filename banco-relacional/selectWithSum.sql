-- SUM with filters and group
SELECT
    regiao as "Região",
    sum(populacao) as Total
From `states`
GROUP BY regiao
ORDER BY Total DESC;

SELECT
    regiao as "Região",
    sum(populacao) as Total
FROM `states`
WHERE regiao = 'Sul'
GROUP BY regiao
ORDER BY Total DESC;


-- Simple SUM
SELECT
    sum(populacao) as Total
From `states`;