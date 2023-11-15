DROP SCHEMA IF EXISTS `klinika`;
CREATE SCHEMA IF NOT EXISTS `klinika` DEFAULT CHARACTER SET utf8;

USE `klinika`

DROP TABLE IF EXISTS `klinika`.`seimininkas`;

CREATE TABLE IF NOT EXISTS `klinika`.`seimininkas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavarde` VARCHAR(45) NOT NULL,
    `adresas` VARCHAR(255),
    `tel` INT(20),
    PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `klinika`.`pacientas`;
CREATE TABLE IF NOT EXISTS `klinika`.`pacientas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `seimininko_id` INT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavadinimas` VARCHAR(45) NOT NULL,
    `veisle` VARCHAR(45),
    `gime` DATE,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`seimininko_id`) REFERENCES `seimininkas`(`id`)
);

DROP TABLE IF EXISTS `klinika`.`specialistas`;

CREATE TABLE IF NOT EXISTS `klinika`.`specialistas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavarde` VARCHAR(45) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `klinika`.`kainos`;

CREATE TABLE IF NOT EXISTS `klinika`.`kainos` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `paslauga` VARCHAR(100) NOT NULL,
    `kaina` INT(10) NOT NULL,
    PRIMARY KEY(`id`)
);

DROP TABLE IF EXISTS `klinika`.`vizitas`;

CREATE TABLE IF NOT EXISTS `klinika`.`vizitas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `paciento_id` INT,
    `specialisto_id` INT,
    `paslaugos` VARCHAR(255) NOT NULL,
    `moketi` INT,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`paciento_id`) REFERENCES `pacientas`(`id`),
    FOREIGN KEY(`specialisto_id`) REFERENCES `specialistas`(`id`)
);