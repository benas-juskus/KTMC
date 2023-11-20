DROP SCHEMA IF EXISTS `stomatologijos_klinika`;

CREATE SCHEMA IF NOT EXISTS `stomatologijos_klinika`;

USE `stomatologijos_klinika`;

DROP TABLE IF EXISTS `pacientas`;

CREATE TABLE IF NOT EXISTS `pacientas` (
    `korteles_id` INT NOT NULL AUTO_INCREMENT,
    `pavarde` VARCHAR(45) NOT NULL,
    `adresas` VARCHAR(255) NOT NULL,
    `gimimo_data` DATE NOT NULL,
    PRIMARY KEY (`korteles_id`)
);

INSERT INTO `pacientas` (`pavarde`, `adresas`, `gimimo_data`)
VALUES ('Jonaitis', 'Gatvienes g. 1 - 18', '1983-11-21');
INSERT INTO `pacientas` (`pavarde`, `adresas`, `gimimo_data`)
VALUES ('Petraitis', 'Adreso g. 2 - 28', '1989-04-10');
INSERT INTO `pacientas` (`pavarde`, `adresas`, `gimimo_data`)
VALUES ('Kazenaite', 'Kaimelio g. 3 - 30', '1993-10-15');

DROP TABLE IF EXISTS `stomatologas`;

CREATE TABLE IF NOT EXISTS `stomatologas` (
    `stomatologo_id` INT NOT NULL AUTO_INCREMENT,
    `pavarde` VARCHAR(45) NOT NULL,
    `kvalifikacija` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`stomatologo_id`),
    UNIQUE KEY (`pavarde`)
);

INSERT INTO `stomatologas` (`pavarde`, `kvalifikacija`)
VALUES ('Mamontovas', 'Higienistas');
INSERT INTO `stomatologas` (`pavarde`, `kvalifikacija`)
VALUES ('Sandeep', 'Gydytojas - Odontologas');
INSERT INTO `stomatologas` (`pavarde`, `kvalifikacija`)
VALUES ('Nausėda', 'Odontologas - Chirurgas');

DROP TABLE IF EXISTS `vizitas`;

CREATE TABLE IF NOT EXISTS `vizitas` (
    `vizito_id` INT NOT NULL AUTO_INCREMENT,
    `paciento_kortele` INT NOT NULL,
    `specialistas` INT NOT NULL,
    `data` DATE NOT NULL,
    `laikas` TIME NOT NULL,
    `trukme` TIME NULL,
    `gydymo_tipas` VARCHAR(255) NULL,
    `PP` VARCHAR(255) NULL,
    `kaina` INT NULL,
    PRIMARY KEY (`vizito_id`),
    FOREIGN KEY (`paciento_kortele`) REFERENCES `pacientas`(`korteles_id`),
    FOREIGN KEY (`specialistas`) REFERENCES `stomatologas`(`stomatologo_id`),
    CONSTRAINT `unique_vizitas` UNIQUE (`paciento_kortele`,`data`, `specialistas`),
    CONSTRAINT `unique_laikas` UNIQUE (`data`,`laikas`, `specialistas`)
);

INSERT INTO `vizitas` (`paciento_kortele`, `specialistas`, `data`, `laikas`)
VALUES (2, 3, '2023-12-05', '11:30');
INSERT INTO `vizitas` (`paciento_kortele`, `specialistas`, `data`, `laikas`)
VALUES (1, 1, '2023-12-09', '14:15');
INSERT INTO `vizitas` (`paciento_kortele`, `specialistas`, `data`, `laikas`)
VALUES (3, 2, '2023-12-07', '14:45');

UPDATE `vizitas`
SET `trukme` = '01:00:00',
`gydymo_tipas` = 'Danties ekstrakcija',
`PP` = 'Anamneze: Sekmingas 6 danties pasalinimas.',
`kaina` = 60
WHERE `vizito_id` = 1;