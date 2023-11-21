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
VALUES ('WWW svetainė', 'Ypatinga', '2005-06-01', 2);

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
VALUES (2, 1, 'Programuotojas', 300);
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


-- I. Pateikti visų informatikų pavardes ir kategorijas.
SELECT `pavarde`, `kategorija`
FROM `vykdytojai`
WHERE `kvalifikacija` = 'Informatikas';

-- II. Pateikti visas išsilavinimo įstaigas (be pasikartojimų).

SELECT DISTINCT `issilavinimas`
FROM `vykdytojai`
WHERE `issilavinimas` IS NOT NULL;

-- III. Apskaičiuoti projekto trukmę dienomis, kai trukmė yra duota mėnesiais.

SELECT
    `pavadinimas`,
    DATEDIFF ( DATE_ADD (`pradzia`, INTERVAL `trukme` MONTH), `pradzia` ) AS `dienu_skaicius`
FROM `projektai`;

-- IV. Pateikti visus projekto vykdytojus.

SELECT `pavarde`
FROM `vykdytojai`
WHERE `nr` IN (SELECT `vykdytojas` FROM `vykdymas`);

-- V. Vykdytojų pavardes pateikti abėcėlės tvarka.

SELECT `pavarde`
FROM `vykdytojai`
ORDER BY `pavarde`;

-- VI. Pateikti duomenis pagal išsilavinimą abėcėlės tvarka.

SELECT * FROM `vykdytojai`
ORDER BY `issilavinimas`;

-- VII. Pateikti visų vykdančių projektus vykdytojų skaičių.

SELECT COUNT(*)
FROM `vykdytojai`
WHERE `nr` IN (SELECT `vykdytojas` FROM `vykdymas`);

-- VIII. Pateikti vykdytojų, dalyvaujančių bent viename projekte, skaičių.

SELECT COUNT(*)
FROM `vykdytojai`
WHERE `nr` IN (SELECT `vykdytojas` FROM `vykdymas`)
AND (SELECT COUNT(`projektas`) FROM `vykdymas`); 

-- IX. Pateikti bendrą valandų skaičių, kurį skiria vykdytojas Nr. 1 visiems projektams.

SELECT SUM(`valandos`) FROM `vykdymas`
WHERE `vykdytojas` = 1;

-- X. Pateikti duomenis projektų, kuriuose yra „apskaita".

SELECT * FROM `projektai`
WHERE `pavadinimas` LIKE '%apskaita%';

-- XI. Pateikti duomenis apie vykdytojus informatikus, kurie baigė VU ir turi aukštesnę nei 3 kategoriją.
-- (Duotuose duomenyse si salyga nieko negrazina)
SELECT * FROM `vykdytojai`
WHERE `kvalifikacija` = 'Informatikas'
AND `issilavinimas` = 'VU'
AND `kategorija` > 3;

-- XII. Pateikti duomenis lentelių vykdytojai ir vykdymas.

SELECT *
FROM `vykdytojai`
INNER JOIN `vykdymas` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`;

-- XIII. Pateikti duomenis kokie vykdytojai kokius projektus vykdo ir kiek kiekvienam projektui skiria valandų.

SELECT
    `vykdytojai`.`pavarde` AS `vykdytojo_pavarde`,
    `projektai`.`pavadinimas` AS `projekto_pavadinimas`,
    `valandos`
FROM `vykdymas`
JOIN `vykdytojai` ON `vykdymas`.`vykdytojas` = `vykdytojai`.`nr`
JOIN `projektai` ON `vykdymas`.`projektas` = `projektai`.`nr`
ORDER BY `vykdytojas`;

-- XIV. Pateikti duomenis visų projekto Nr. 1 vykdytojų.

SELECT  *
FROM `vykdytojai`
JOIN `vykdymas` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
WHERE `projektas` = 1;

-- XV. Pateikti duomenis visų vykdytojų pavardžių, jų vykdomų projektų pavadinimų ir dirbtų valandų skaičių.

SELECT
    `vykdytojai`.`pavarde`AS `vykdytojo_pavarde`,
    `projektai`.`pavadinimas` AS `projekto_pavadinimas`,
    `valandos`
FROM `vykdymas`
JOIN `vykdytojai` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
JOIN `projektai` ON  `vykdymas`.`projektas` = `projektai`.`nr`
ORDER BY `vykdytojo_pavarde`;

-- XVI. Pateikti duomenis visų projekto Nr. 1 vykdytojų pavardžių, jų statuso ir dirbtų valandų skaičių.

SELECT 
    `vykdytojai`.`pavarde` AS `vykdytojo_pavarde`,
    `vykdymas`.`statusas` AS `vykdytojo_statusas`,
    `valandos`
FROM `vykdymas`
JOIN `vykdytojai` ON `vykdymas`.`vykdytojas` = `vykdytojai`.`nr`
WHERE `projektas` = 1;

-- XVII. Pateikti duomenis dalyvaujančių projekte Nr. 1.

SELECT * FROM `vykdytojai`
JOIN `vykdymas` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
WHERE `projektas` = 1;

-- XVIII. Pateikti pavardes vykdytojų, dalyvaujančių bent viename didelės svarbos projekte.

SELECT `vykdytojai`.`pavarde`
FROM `vykdytojai`
JOIN `vykdymas` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
JOIN `projektai` ON `vykdymas`.`projektas` = `projektai`.`nr`
WHERE `projektai`.`svarba` = 'Aukšta';

-- XIX. Pateikti duomenis apie projektus, kuriuos vykdo informatikai, ir kiek kiekvienam projektui skiria valandų.

SELECT  `projektai`.`pavadinimas` AS `projekto_pavadinimas`,
        `vykdymas`.`valandos` AS `valandu_skaicius`
FROM `projektai`
JOIN `vykdymas` ON `vykdymas`.`projektas` = `projektai`.`nr`
JOIN `vykdytojai` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
WHERE `kvalifikacija` = 'Informatikas';


-- XX. Pateikti numerius vykdytojų, kurie dalyvauja bent viename projekte, kuriame dalyvauja vykdytojas Nr. 1.

SELECT DISTINCT `vykdytojas`, `vykdytojai`.`pavarde`
FROM `vykdymas`
JOIN `vykdytojai` ON `vykdytojai`.`nr` = `vykdymas`.`vykdytojas`
WHERE NOT `vykdytojas` = 1
AND `projektas` IN (
    SELECT `projektas`
    FROM `vykdymas`
    WHERE `vykdytojas` = 1
);

