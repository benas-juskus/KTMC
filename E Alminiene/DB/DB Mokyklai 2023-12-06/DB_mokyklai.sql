DROP SCHEMA IF EXISTS db_mokyklai;

CREATE SCHEMA IF NOT EXISTS db_mokyklai;

USE db_mokyklai;

DROP TABLE IF EXISTS mokinys;

CREATE TABLE IF NOT EXISTS mokinys (
    id INT NOT NULL AUTO_INCREMENT,
    vardas VARCHAR(255) NOT NULL,
    pavarde VARCHAR(255) NOT NULL,
    gimimo_data DATE NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    telefonas VARCHAR(45) NOT NULL,
    turimas_issilavinimas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO mokinys (vardas, pavarde, gimimo_data, adresas, telefonas, turimas_issilavinimas) 
VALUES
('Petras', 'Petraitis', '1995-01-02', 'Kauno g. 12-45, Vilnius', '8 565 456 78', 'vidurinis'),
('Inga', 'Valentavičiūtė', '1994-12-04', 'Konstitucijos pr. 45-78, Vilnius', '8 645 589 45', 'pagrindinis'),
('Lukas', 'Lukaitis', '1998-06-15', 'Gedimino g. 20-35, Kaunas', '8 612 345 67', 'aukstasis'),
('Gabija', 'Gudaitė', '1993-08-20', 'Maironio g. 5-12, Klaipėda', '8 678 123 45', 'profesinis'),
('Tomas', 'Tomauskas', '1997-03-10', 'Zalgirio g. 15-28, Panevezys', '8 641 987 32', 'vidurinis'),
('Jurga', 'Jurgenaitė', '1996-11-30', 'Vytauto pr. 10-56, Vilnius', '8 615 654 78', 'aukstasis'),
('Darius', 'Darauskas', '1994-04-25', 'Basanavičiaus g. 7-89, Alytus', '8 655 789 54', 'profesinis'),
('Eglė', 'Eglaitė', '1999-02-18', 'Maironio g. 3-45, Kaunas', '8 612 456 78', 'vidurinis'),
('Rita', 'Ritaitė', '1992-09-12', 'Vilniaus g. 30-15, Vilnius', '8 645 987 32', 'aukstasis'),
('Mantas', 'Mantauskas', '1991-07-05', 'Jogailos g. 25-10, Šiauliai', '8 641 789 45', 'profesinis');

DROP TABLE IF EXISTS stazuote;

CREATE TABLE IF NOT EXISTS stazuote (
    stazuotes_id INT NOT NULL AUTO_INCREMENT,
    mokinio_id INT NOT NULL,
    projekto_pavadinimas VARCHAR(255) NOT NULL,
    salis VARCHAR(45) NOT NULL,
    organizacija VARCHAR(255) NOT NULL,
    pradzia DATE NULL,
    pabaiga DATE NULL,
    PRIMARY KEY (stazuotes_id),
    FOREIGN KEY (mokinio_id) REFERENCES mokinys(id)
);

INSERT INTO stazuote (mokinio_id, projekto_pavadinimas, salis, organizacija, pradzia, pabaiga) 
VALUES
(2, 'Project Riga', 'Latvija', 'Latvijos Rygos kolegija', '2014-01-01', '2014-03-12'),
(3, 'Project Tallinn', 'Estija', 'Tallinno Ülikool', '2015-05-10', '2015-07-20'),
(1, 'Project Stockholm', 'Švedija', 'Stockholms Universitet', '2016-09-03', '2016-11-15'),
(4, 'Project Warsaw', 'Lenkija', 'Uniwersytet Warszawski', '2017-03-25', '2017-05-05'),
(6, 'Project Helsinki', 'Suomija', 'Helsingin yliopisto', '2018-07-08', '2018-09-18'),
(5, 'Project Budapest', 'Vengrija', 'Budapesti Műszaki és Gazdaságtudományi Egyetem', '2019-11-02', '2019-12-20'),
(7, 'Project Prague', 'Čekija', 'Univerzita Karlova', '2020-04-15', '2020-06-30'),
(8, 'Project Vienna', 'Austrija', 'Universität Wien', '2021-08-12', '2021-10-25'),
(10, 'Project Copenhagen', 'Danija', 'Københavns Universitet', '2022-01-07', '2022-03-18'),
(9, 'Project Berlin', 'Vokietija', 'Freie Universität Berlin', '2023-04-22', '2023-06-10');


DROP TABLE IF EXISTS dalykas;

CREATE TABLE IF NOT EXISTS dalykas (
    dalyko_id INT NOT NULL AUTO_INCREMENT,
    pavadinimas VARCHAR(255) NOT NULL,
    kabinetas INT NOT NULL,
    PRIMARY KEY (dalyko_id)
);

INSERT INTO dalykas (pavadinimas, kabinetas) 
VALUES
('Matematika', 102),
('Bendrosios elektrotechnikos pagrindai', 204),
('Estetikos pagrindai', 117),
('Profesijos informacinės technologijos', 218);

DROP TABLE IF EXISTS destytojas;

CREATE TABLE IF NOT EXISTS destytojas(
    id INT NOT NULL AUTO_INCREMENT,
    vardas VARCHAR(255) NOT NULL,
    pavarde VARCHAR(255) NOT NULL,
    dalyko_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (dalyko_id) REFERENCES dalykas(dalyko_id)
);

INSERT INTO destytojas (vardas, pavarde, dalyko_id) 
VALUES
('Andrius', 'Jonaitis  ', 1),
('Arturas', 'Gaidys ', 2),
('Irena', 'Kelmickaitė', 3),
('Kristina', 'Ališauskienė ', 4);

DROP TABLE IF EXISTS mokinys_dalykas;

CREATE TABLE IF NOT EXISTS mokinys_dalykas(
    rysio_id INT NOT NULL AUTO_INCREMENT,
    mokinio_id INT NOT NULL,
    dalyko_id INT NOT NULL,
    PRIMARY KEY (rysio_id),
    FOREIGN KEY (mokinio_id) REFERENCES mokinys(id),
    FOREIGN KEY (dalyko_id) REFERENCES dalykas(dalyko_id)
);

INSERT INTO mokinys_dalykas (mokinio_id, dalyko_id) 
VALUES
(1, 1),(1, 3),(2, 1),(2, 2),(2, 3),(2, 4),(3, 2),(3, 3),(3, 4),
(4, 1),(4, 2),(4, 4),
(5, 1),(5, 2),(5, 3),(5, 4),
(6, 4),
(7, 1),(7, 4),
(8, 2),(8, 3),
(9, 1),(9, 2),(9, 3),(9, 4),
(10, 1),(10, 2),(10, 3),(10, 4);

DROP TABLE IF EXISTS pazymys;

CREATE TABLE IF NOT EXISTS pazymys(
    pazymio_id INT NOT NULL AUTO_INCREMENT,
    rysio_id INT NOT NULL,
    ivertinimas INT NOT NULL,
    PRIMARY KEY (pazymio_id),
    FOREIGN KEY (rysio_id) REFERENCES mokinys_dalykas(rysio_id)
);

INSERT INTO pazymys (rysio_id, ivertinimas) 
VALUES
(1, 5),
(2, 4),
(3, 7),
(4, 7),
(5, 5),
(6, 7),
(7, 4),
(8, 8),
(9, 10),
(10, 7),
(11, 8),
(12, 8),
(13, 9),
(14, 8),
(15, 9),
(16, 8),
(17, 9),
(18, 8),
(19, 7),
(20, 8),
(21, 6),
(22, 8),
(23, 10),
(24, 8),
(25, 8),
(26, 5),
(27, 8),
(28, 10),
(29, 8);
