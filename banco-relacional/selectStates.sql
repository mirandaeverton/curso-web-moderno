SELECT * FROM `states`;

-- Simplest form
SELECT 
    nome, sigla 
FROM `states`;

-- Personalizing columns names and order
SELECT 
    Sigla, 
    nome AS 'Nome do Estado' 
FROM `states`;

-- Simple filter
SELECT 
    Sigla, 
    nome AS 'Nome do Estado' 
FROM `states`
WHERE regiao = 'Sul';

-- Filter with order
SELECT 
    nome, 
    regiao 
FROM `states`
WHERE populacao >= 10
ORDER BY populacao DESC;