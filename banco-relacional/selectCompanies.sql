SELECT co.nome AS 'Company', c.nome AS 'City'
FROM companies co, companies_branch_offices cbo, cities c 
WHERE co.id = cbo.empresa_id
AND c.id = cbo.cidade_id
AND sede;