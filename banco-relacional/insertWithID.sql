INSERT INTO `states` (id, nome, sigla, regiao, populacao)
VALUES (1000, 'NOVO', 'NV', 'Sul', 2.54);

-- It always gets the latest ID and increments it, even if there are holes in the ID range
INSERT INTO `states` (nome, sigla, regiao, populacao)
VALUES ('MAIS NOVO', 'MN', 'Sul', 2.51);

SELECT * FROM `states`;