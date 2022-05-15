CREATE TABLE IF NOT EXISTS cities (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10, 2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES `states` (id)
);

-- CREATE TABLE IF NOT EXISTS test (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY);

-- DROP TABLE IF EXISTS test;