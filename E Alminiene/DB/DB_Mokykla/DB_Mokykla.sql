DROP SCHEMA IF EXISTS db_mokykla;
CREATE SCHEMA IF NOT EXISTS db_mokykla;

USE db_mokykla;

DROP TABLE IF EXISTS klase;

CREATE TABLE IF NOT EXISTS klase (
    klases_id INT NOT NULL AUTO_INCREMENT,
    pavadinimas VARCHAR(5) NOT NULL,
    PRIMARY KEY (klases_id),
    UNIQUE KET (pavadinimas)
);

INSERT INTO klase (pavadinimas) VALUES ('12H'),('12R');

DROP TABLE IF EXISTS lytis;

CREATE TABLE IF NOT EXISTS lytis (
    pavadinimas VARCHAR(1) NOT NULL,
    PRIMARY KEY (pavadinimas)
);

INSERT INTO lytis (pavadinimas) VALUES ('M'),('V');



DROP TABLE IF EXISTS mokinys;

CREATE TABLE IF NOT EXISTS mokinys (
    id BIGINT NOT NULL,
    klase INT NOT NULL,
    vardas VARCHAR(45) NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    tetis VARCHAR(45) NULL,
    mama VARCHAR(45) NULL,
    lytis VARCHAR(1) NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    gimimo_data DATE NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (klase) REFERENCES klase(klases_id),
    FOREIGN KEY (lytis) REFERENCES lytis(pavadinimas)
);

INSERT INTO mokinys (id, klase, vardas, pavarde, tetis, mama, lytis, adresas, gimimo_data)
VALUES
  (38702054600, 1, 'Mantas', 'Milkevičius','Linas Milkevičius', 'Evelina Milkevičienė', 'V', 'Smiltelės 3 - 8', '1987-02-05'),
  (38703038848, 2, 'Marius', 'Stonkus','Robertas Stonkus',	'Adelė Stonkienė', 'V', 'Taikos per. 116 - 8', '1987-03-03'),
  (38704196749, 2, 'Simas', 'Bijūnas','Edmundas Bijūnas', 'Vaiva Bijūnienė', 'V', 'Taikos per. 128 - 36', '1987-04-19'),
  (38707016648, 2, 'Andrius', 'Masiulis', 'Simas Masiulis', 'Violeta Masiulienė', 'V', 'Reikjaviko 1 - 36', '1987-07-01'),
  (38709098854, 1, 'Raimondas', 'Kuzminskas', 'Vidas Kuzminskas', 'Ona Kuzminskienė', 'V', 'Reikjaviko 16 - 15', '1987-09-09'),
  (48706120833, 1, 'Odeta', 'Stonytė', 'Tomas Stonys',	'Loreta Stonienė', 'M', 'Smiltelės 8 - 18', '1987-06-12'),
  (48706163383, 2, 'Julita', 'Matukaitė', 'Lukas Matukas',	'Raimonda Matukienė', 'M', 'Baltijos per. 6 - 4', '1987-06-16'),
  (48801053234, 1, 'Laura', 'Steckytė', 'Romas Steckys', 'Lina Steckienė', 'M', 'Reikjaviko 2 - 14', '1988-01-05'),
  (48802054403, 1, 'Ineta', 'Jurkutė', 'Algis Jurkus', 'Rimutė Jurkienė', 'M', 'Karlskronos 2 - 16', '1988-02-05'),
  (48807280031, 2, 'Emilija', 'Rusytė', 'Vaidas Rusys', 'Rita Rusienė', 'M', 'Simonaitytės 4 - 14', '1988-07-28');


DROP TABLE IF EXISTS dalykas;

CREATE TABLE IF NOT EXISTS dalykas (
    id int NOT NULL AUTO_INCREMENT,
    pavadinimas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (pavadinimas)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokykla\\dalykas.csv"
INTO TABLE dalykas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS mokytojas;

CREATE TABLE IF NOT EXISTS mokytojas (
    id INT NOT NULL AUTO_INCREMENT,
    vardas VARCHAR(45) NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    dalykas INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (dalykas) REFERENCES dalykas(id)
);

INSERT INTO mokytojas(vardas, pavarde, dalykas)
VALUES
('Gabija', 'Kazlauskaitė', 1),
('Mantas', 'Jankauskas', 2),
('Asta', 'Liutkutė', 3),
('Gediminas', 'Vaitkevičius', 4),
('Inga', 'Balčiūnaitė', 5),
('Tomas', 'Gedminas', 6),
('Jurga', 'Žukauskaitė', 7),
('Rokas', 'Mackevičius', 8),
('Greta', 'Kudrevičiūtė', 9),
('Linas', 'Rutkauskas', 10);


DROP TABLE IF EXISTS mokinys_dalykas;

CREATE TABLE IF NOT EXISTS mokinys_dalykas (
    rysio_id INT NOT NULL AUTO_INCREMENT,
    mokinys_id BIGINT NOT NULL,
    dalykas_id INT NOT NULL,
    PRIMARY KEY (rysio_id),
    FOREIGN KEY (mokinys_id) REFERENCES mokinys(id),
    FOREIGN KEY (dalykas_id) REFERENCES dalykas(id)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokykla\\mokinys_dalykas.csv"
INTO TABLE mokinys_dalykas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


DROP TABLE IF EXISTS klase_aukletojas;

CREATE TABLE IF NOT EXISTS klase_aukletojas (
    rysio_id INT NOT NULL AUTO_INCREMENT,
    klase_id INT NOT NULL,
    mokytojas_id INT NOT NULL,
    PRIMARY KEY (rysio_id),
    FOREIGN KEY (klase_id) REFERENCES klase(klases_id),
    FOREIGN KEY (mokytojas_id) REFERENCES mokytojas(id)
);

INSERT INTO klase_aukletojas (klase_id, mokytojas_id)
VALUES (1, 4), (2, 7);

DROP TABLE IF EXISTS ivertinimas;

CREATE TABLE IF NOT EXISTS ivertinimas (
    rysys INT NOT NULL,
    trimestras_1 INT(10) NULL,
    trimestras_2 INT(10) NULL,
    trimestras_3 INT(10) NULL,
    metinis INT(10) NULL,
    PRIMARY KEY (rysys),
    FOREIGN KEY (rysys) REFERENCES mokinys_dalykas(rysio_id)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokykla\\ivertinimai.csv"
INTO TABLE ivertinimas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;