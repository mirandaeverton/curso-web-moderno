-- VSCode plugin doesnt show it right. It mixes a few columns (in this case, the 'nome' and 'id' columns).
SELECT * FROM `cities` c
    INNER JOIN `mayors` m ON c.id = m.cidade_id;

SELECT * FROM `cities` c
    LEFT JOIN `mayors` m ON c.id = m.cidade_id;

SELECT * FROM `cities` c
    RIGHT JOIN `mayors` m ON c.id = m.cidade_id;

-- MySQL doesnt have the FULL JOIN command.
    -- SELECT * FROM `cities` c
    --     FULL JOIN `mayors` m ON c.id = m.cidade_id;
-- So, you can simulate it like this:
SELECT * FROM `cities` c
    LEFT JOIN `mayors` m ON c.id = m.cidade_id
UNION
SELECT * FROM `cities` c
    RIGHT JOIN `mayors` m ON c.id = m.cidade_id;