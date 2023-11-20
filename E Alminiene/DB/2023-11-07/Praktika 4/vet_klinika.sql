DROP SCHEMA IF EXISTS `klinika`;
CREATE SCHEMA IF NOT EXISTS `klinika` DEFAULT CHARACTER SET utf8;

USE `klinika`;

DROP TABLE IF EXISTS `seimininkas`;

CREATE TABLE IF NOT EXISTS `seimininkas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavarde` VARCHAR(45) NOT NULL,
    `adresas` VARCHAR(255),
    `tel` INT(20),
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `pacientas`;
CREATE TABLE IF NOT EXISTS `pacientas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `seimininko_id` INT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavadinimas` VARCHAR(45) NOT NULL,
    `veisle` VARCHAR(45),
    `gime` DATE,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`seimininko_id`) REFERENCES `seimininkas`(`id`)
);

DROP TABLE IF EXISTS `specialistas`;

CREATE TABLE IF NOT EXISTS `specialistas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavarde` VARCHAR(45) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `kainos`;

CREATE TABLE IF NOT EXISTS `kainos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `paslauga` VARCHAR(100) NOT NULL,
    `kaina` INT(10) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `vizitas`;

CREATE TABLE IF NOT EXISTS `vizitas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `paciento_id` INT,
    `specialisto_id` INT,
    `paslaugos` VARCHAR(255) NOT NULL,
    `moketi` INT,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`paciento_id`) REFERENCES `pacientas`(`id`),
    FOREIGN KEY(`specialisto_id`) REFERENCES `specialistas`(`id`)
);

INSERT INTO `kainos` (`paslauga`, `kaina`) VALUES ('skiepai', 50.00);
INSERT INTO `kainos` (`paslauga`, `kaina`) VALUES ('nukirmijimas', 35.00);
INSERT INTO `pacientas` (`vardas`, `pavadinimas`, `veisle`, `gime`) VALUES ('rudis', 'suo', 'taksas', '2015-11-23');
INSERT INTO `seimininkas` (`id`, `vardas`, `pavarde`, `adresas`, `tel`) VALUES (1, 'Tomas', 'Tomaitis', 'Gelvonu g. 20', 8686986);
UPDATE `pacientas`
SET `seimininko_id` = 1
WHERE `id` = 1;