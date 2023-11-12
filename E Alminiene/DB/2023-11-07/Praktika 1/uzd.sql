CREATE TABLE `darbuotojai` (
  `ASMENSKODAS` bigint(20) DEFAULT NULL,
  `VARDAS` varchar(20) DEFAULT NULL,
  `PAVARDE` varchar(30) DEFAULT NULL,
  `DIRBANUO` date DEFAULT NULL,
  `GIMIMOMETAI` date DEFAULT NULL,
  `PAREIGOS` varchar(30) DEFAULT NULL,
  `SKYRIAUSPAVADINIMAS` varchar(30) DEFAULT NULL,
  `PROJEKTONUMERIS` int(11) DEFAULT NULL
)

INSERT INTO `darbuotojai` (`ASMENSKODAS`, `VARDAS`, `PAVARDE`, `DIRBANUO`, `GIMIMOMETAI`, `PAREIGOS`, `SKYRIAUSPAVADINIMAS`, `PROJEKTONUMERIS`) VALUES
(32541036850, 'Mantas', 'Bananas', '2010-08-01', '1999-04-21', 'Programuotojas', 'Amzinai atostogose', 2),
(35206891026, 'Justas', 'Zmogauskas', '2008-02-04', '1990-08-22', 'Programuotojas', 'Daug dirbantys', 2),
(35261458702, 'Petrius', 'Kanusauskas', '1996-04-18', '1976-10-11', 'Programuotojas', 'Mazai dirbantieji', 1),
(36510284592, 'Antanas', 'Smeliauskas', '2006-05-04', '1986-10-14', 'Testuotojas', 'Mazai dirbantys', 1),
(38962504820, 'Zilvinas', 'Morkinis', '2012-11-20', '1988-06-15', 'Programuotojas', 'Mazai dirbantys', 3),
(39520146780, 'Jonas', 'Jonauskas', '1985-05-25', '1960-05-04', 'Testuotojas', 'Daug dirbantieji', 3),
(42056548920, 'Toma', 'Antanaitiene', '2004-09-11', '1979-05-11', 'Testuotoja', 'Mazai dirbantys', 2),
(44205967260, 'Juste', 'Karnisoviene', '1988-09-06', '1950-07-30', 'Projektu vadove', 'Vadovybe', 1),
(45289645130, 'Zinaida', 'Zidane', '1999-04-18', '1980-04-01', 'Programuotoja', 'Amzinai atostogose', 2),
(49853148205, 'Toma', 'Zidane', '2010-10-06', '1990-07-14', 'Projektu vadove', 'Vadovybe', 2);


-- 1 uzduotis
SELECT * FROM `darbuotojai`;

-- 2 uzduotis

SELECT `ASMENSKODAS` FROM `darbuotojai`;

-- uzduotis 3

SELECT `VARDAS`, `PAVARDE`, `PAREIGOS` FROM `darbuotojai`;

-- uzduotis 4

SELECT DISTINCT `SKYRIAUSPAVADINIMAS` FROM `darbuotojai`;

-- uzduotis 5

SELECT * FROM `darbuotojai` WHERE `SKYRIAUSPAVADINIMAS`= 'Daug dirbantys';

-- uzduotis 6

SELECT `PAREIGOS` FROM `darbuotojai` WHERE `VARDAS`='Toma';

-- uzduotis 7

SELECT * FROM `darbuotojai` WHERE `GIMIMOMETAI` = '1960-05-04';

-- uzduotis 8

SELECT `VARDAS` FROM `darbuotojai` WHERE `PAVARDE` = 'Morkinis';

-- uzduotis 9

SELECT `VARDAS`, `PAVARDE` FROM `darbuotojai` WHERE `SKYRIAUSPAVADINIMAS` = 'Daug dirbantys';

-- uzduotis 10

INSERT INTO `darbuotojai` VALUES (39103071234,'Benas', 'Juskus', '2023-09-01', '1991-03-07', 'Programuotojas', 'Mazai atostogaujantys', 3);

-- uzduotis 11

INSERT INTO `darbuotojai` (`ASMENSKODAS`, `VARDAS`, `PAVARDE`, `DIRBANUO`, `GIMIMOMETAI`) 
VALUES (49501141234, 'Cynthia', 'Surnamia', '2023-11-02', '1995-01-14');

-- uzduotis 12

UPDATE `darbuotojai`
SET `PAREIGOS` = 'zongliruotoja', 
`SKYRIAUSPAVADINIMAS` = 'Pramogautojai', 
`PROJEKTONUMERIS` = 2 
WHERE `ASMENSKODAS` = 49501141234;

-- uzduotis 13

DELETE FROM `darbuotojai` WHERE `ASMENSKODAS` = 39103071234;

-- uzduotis 14

INSERT INTO `darbuotojai` VALUES
(49501141234, 'Pavlo', 'Antanaitis', '2023-11-02', '1995-01-14', 'Programuotojas', 'Pramogautojai', 1),
(39103071234, 'Zygis', 'Antanaitis', '2023-09-01', '1991-03-07', 'Programuotojas', 'Mazai atostogaujantys', 1);

-- uzduotis 15
UPDATE `darbuotojai`
SET `PAREIGOS` = 'Testuotojas'
WHERE `PAVARDE` = 'Antanaitis';

-- uzduotis 16

SELECT COUNT(*) FROM `darbuotojai` WHERE `PAREIGOS` = 'Testuotojas';
