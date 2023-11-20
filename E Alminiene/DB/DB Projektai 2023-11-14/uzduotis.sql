DROP SCHEMA IF EXISTS `projektai`;

CREATE SCHEMA IF NOT EXISTS `projektai`;

USE `projektai`;

DROP TABLE IF EXISTS `vykdytojai`;

CREATE TABLE IF NOT EXISTS `vykdytojai` (
    `nr` INT NOT NULL AUTO_INCREMENT,
    `pavarde` VARCHAR(45) NOT NULL,
    `kvalifikacija` VARCHAR(45) NOT NULL,
    `kategorija` INT NOT NULL,
    `issilavinimas` VARCHAR(5) NULL,
    PRIMARY KEY (`nr`)
);

INSERT INTO `vykdytojai` (`pavarde`, `kvalifikacija`, `kategorija`, `issilavinimas`)
VALUES ('Jonaitis', 'Informatikas', 2, 'VU');
INSERT INTO `vykdytojai` (`pavarde`, `kvalifikacija`, `kategorija`, `issilavinimas`)
VALUES ('Petraitis', 'Statistikas', 3, 'VU');
INSERT INTO `vykdytojai` (`pavarde`, `kvalifikacija`, `kategorija`)
VALUES ('Gražulytė', 'Inžinierius', 1);
INSERT INTO `vykdytojai` (`pavarde`, `kvalifikacija`, `kategorija`, `issilavinimas`)
VALUES ('Onaitytė', 'Vadybininkas', 5, 'VDU');
INSERT INTO `vykdytojai` (`pavarde`, `kvalifikacija`, `kategorija`, `issilavinimas`)
VALUES ('Antanaitis', 'Informatikas', 3, 'VU');

DROP TABLE IF EXISTS `projektai`;

CREATE TABLE IF NOT EXISTS `projektai` (
    `nr` INT NOT NULL AUTO_INCREMENT,
    `pavadinimas` VARCHAR(45) NOT NULL,
    `svarba` VARCHAR(10) NOT NULL,
    `pradzia` DATE NOT NULL,
    `trukme` INT(99) NOT NULL,
    PRIMARY KEY (`nr`)
);

INSERT INTO `projektai` (`pavadinimas`, `svarba`, `pradzia`, `trukme`)
VALUES ('Studentų apskaita', 'Aukšta', '2005-01-01', 12);
INSERT INTO `projektai` (`pavadinimas`, `svarba`, `pradzia`, `trukme`)
VALUES ('Buhalterinė apskaita', 'Vidutinė', '2005-03-01', 10);
INSERT INTO `projektai` (`pavadinimas`, `svarba`, `pradzia`, `trukme`)
VALUES ('SWWW svetainė', 'Ypatinga', '2005-06-01', 2);

DROP TABLE IF EXISTS `vykdymas`;

CREATE TABLE IF NOT EXISTS `vykdymas` (
    `projektas` INT NOT NULL,
    `vykdytojas` INT NOT NULL,
    `statusas` VARCHAR(45) NOT NULL,
    `valandos` INT NOT NULL,
    FOREIGN KEY (`projektas`) REFERENCES `projektai`(`nr`),
    FOREIGN KEY (`vykdytojas`) REFERENCES `vykdytojai`(`nr`),
    CONSTRAINT `projektas_vykdytojas` UNIQUE (`projektas`, `vykdytojas`)
);

INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (1, 1, 'Programuotojas', 30);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (1, 2, 'Dokumentuotojas', 100);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (1, 3, 'Testuotojas', 100);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (1, 4, 'Vadovas', 100);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (2, 1, 'Programuotojas', 30);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (2, 2, 'Analitikas', 250);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (2, 4, 'Vadovas', 100);
INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (3, 1, 'Programuotojas', 250);

INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (3, 2, 'Vadovas', 400);

INSERT INTO `vykdymas` (`projektas`, `vykdytojas`, `statusas`, `valandos`)
VALUES (3, 3, 'Dizaineris', 150);


