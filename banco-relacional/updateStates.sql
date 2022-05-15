-- Simple update
UPDATE `states`
SET nome = 'Maranhão'
WHERE sigla = 'MA';

SELECT nome 
FROM `states`
WHERE sigla = 'MA';

-- A little more complex update
UPDATE `states`
SET
    nome = 'Paraná',
    populacao = 11.32
WHERE sigla = 'PR';

SELECT
    nome,
    sigla,
    populacao
FROM `states`
WHERE sigla = 'PR';

-- Using table aliases
SELECT
    st.nome,
    st.sigla,
    st.populacao
FROM `states` `st`
WHERE sigla = 'PR';