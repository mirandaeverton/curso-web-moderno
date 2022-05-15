ALTER TABLE companies MODIFY cnpj VARCHAR(14);

INSERT INTO companies ( nome, cnpj )
VALUES
    ('Bradesco', '95694186000132'),
    ('Vale', '27887148000146'),
    ('Cielo', '01598317000134');

DESC companies;
SELECT * FROM companies;
SELECT * FROM cities;

INSERT INTO companies_branch_offices
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),
    (1, 2, 0),
    (2, 1, 0),
    (2, 2, 1);

SELECT * FROM companies_branch_offices;