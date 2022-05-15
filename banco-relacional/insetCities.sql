-- Hard coding the FOREIGN KEY
INSERT INTO cities (nome, area, estado_id)
VALUES ("Campinas", 795, 25);

-- Integrating SELECT with INSERT to find the FOREIGN KEY
INSERT INTO cities (nome, area, estado_id)
VALUES (
    "Caruaru", 
    920.6,
    (SELECT id FROM `states` WHERE sigla = 'PE')     
);

INSERT INTO cities (nome, area, estado_id)
VALUES (
    "Niterói", 
    133.9,
    (SELECT id FROM `states` WHERE sigla = 'RJ')     
);

INSERT INTO cities (nome, area, estado_id)
VALUES (
    "Juazeiro do Norte", 
    248.2,
    (SELECT id FROM `states` WHERE sigla = 'CE')     
);

SELECT * FROM cities;

