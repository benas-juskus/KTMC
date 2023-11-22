DROP SCHEMA IF EXISTS studentai;

CREATE SCHEMA IF NOT EXISTS studentai;

USE studentai;

DROP TABLE IF EXISTS fakultetas;

CREATE TABLE IF NOT EXISTS fakultetas (
    kodas VARCHAR(10) NOT NULL,
    pavadinimas VARCHAR(45) NOT NULL,
    PRIMARY KEY (kodas),
    UNIQUE (pavadinimas)
);

INSERT INTO fakultetas (kodas, pavadinimas) VALUES
('IF', 'Informatikos'),
('VF', 'Vadybos'),
('GF', 'Gamtos');

DROP TABLE IF EXISTS grupe;

CREATE TABLE IF NOT EXISTS grupe (
    numeris VARCHAR(10) NOT NULL,
    fakultetas VARCHAR(10) NOT NULL,
    PRIMARY KEY (numeris),
    FOREIGN KEY (fakultetas) REFERENCES fakultetas(kodas)
);

INSERT INTO grupe (numeris, fakultetas) VALUES
('7/1', 'GF'),
('7/2', 'GF'),
('8/1', 'IF'),
('8/2', 'IF'),
('6/1', 'VF'),
('6/2', 'VF');


DROP TABLE IF EXISTS studentas;

CREATE TABLE IF NOT EXISTS studentas (
    bilieto_nr INT NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    gime DATE NOT NULL,
    fakultetas VARCHAR(10) NOT NULL,
    grupes_nr VARCHAR(10) NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    istojimo_balas INT(99) NULL,
    PRIMARY KEY (bilieto_nr),
    FOREIGN KEY (fakultetas) REFERENCES fakultetas(kodas),
    FOREIGN KEY (grupes_nr) REFERENCES grupe(numeris)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB Studentai 2023-11-16\\studentai.csv"
INTO TABLE studentas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS disciplina;

CREATE TABLE IF NOT EXISTS disciplina (
    kodas VARCHAR(45) NOT NULL,
    pavadinimas VARCHAR(45) NOT NULL,
    kreditai INT(10) NULL,
    fakultetas VARCHAR(10) NULL,
    PRIMARY KEY (kodas),
    UNIQUE (pavadinimas),
    FOREIGN KEY (fakultetas) REFERENCES fakultetas(kodas)
);

INSERT INTO disciplina (kodas, pavadinimas, kreditai, fakultetas) VALUES
('D74A214', 'Ekonomika', 3, 'VF'),
('D19A123', 'Verslo technologija', 4, 'VF'),
('B21G104', 'Matematika', 4, 'IF'),
('D78A309', 'Informatika', 3, 'IF'),
('G32B401', 'Chemija', 2, 'GF'),
('G73B502', 'Biologija', 2, 'GF'),
('B37G209', 'Fizika', 3, 'GF');

DROP TABLE IF EXISTS egzaminatorius;

CREATE TABLE IF NOT EXISTS egzaminatorius (
    egzaminatorio_id INT NOT NULL AUTO_INCREMENT,
    disciplinos_id VARCHAR(45) NOT NULL,
    statusas VARCHAR(45) NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    PRIMARY KEY (egzaminatorio_id),
    FOREIGN KEY (disciplinos_id) REFERENCES disciplina(kodas)
);

INSERT INTO egzaminatorius (disciplinos_id, statusas, pavarde) VALUES
('D74A214', 'Prof.', 'Kinziulis'),
('D19A123', 'Doc.', 'Bakaitis'),
('B21G104', 'Prof.', 'Aksiomas'),
('D78A309', 'Prof.', 'Valavičius'),
('G32B401', 'Prof.', 'Menziuraitė'),
('G73B502', 'Doc.', 'Augalaitė'),
('B37G209', 'Doc.', 'Zilaitytė');

DROP TABLE IF EXISTS egzaminas;

CREATE TABLE IF NOT EXISTS egzaminas (
    egzamino_id INT NOT NULL AUTO_INCREMENT,
    studento_id INT NOT NULL,
    disciplinos_kodas VARCHAR(45) NOT NULL,
    egzaminatorius INT NOT NULL,
    ivertinimas INT(10) NULL,
    egzamino_data DATE NOT NULL,
    PRIMARY KEY (egzamino_id),
    FOREIGN KEY (studento_id) REFERENCES studentas(bilieto_nr),
    FOREIGN KEY (disciplinos_kodas) REFERENCES disciplina(kodas),
    FOREIGN KEY (egzaminatorius) REFERENCES egzaminatorius(egzaminatorio_id)
);

INSERT INTO egzaminas (studento_id, disciplinos_kodas, egzaminatorius, ivertinimas, egzamino_data) VALUES
(21, 'D74A214', 1, 10, '2019-12-08'),
(2, 'D19A123', 2, 9, '2019-12-08'),
(25, 'B21G104', 3, 8, '2019-12-08'),
(19, 'D78A309', 4, 7, '2019-12-09'),
(20, 'G32B401', 5, 10, '2019-12-09'),
(6, 'G73B502', 6, 8, '2019-12-11'),
(20, 'B37G209', 7, 8, '2019-12-11'),
(18, 'B37G209', 7, 6, '2019-12-11'),
(14, 'D74A214', 1, 5, '2019-12-12'),
(5, 'D19A123', 2, 10, '2019-12-12'),
(15, 'B37G209', 7, 9, '2019-12-11'),
(16, 'D78A309', 4, 9, '2019-12-15'),
(19, 'B21G104', 3, 10, '2019-12-15'),
(8, 'D78A309', 4, 9, '2019-12-15'),
(18, 'G32B401', 5, 6, '2019-12-15'),
(15, 'G32B401', 5, 5, '2019-12-17'),
(7, 'D78A309', 4, 7, '2019-12-17'),
(3, 'D78A309', 4, 4, '2019-12-21'),
(17, 'B21G104', 3, 7, '2019-12-21'),
(4, 'G73B502', 6, 7, '2019-12-21'),
(13, 'B37G209', 7, 8, '2019-12-21'),
(18, 'G73B502', 6, 9, '2019-12-27'),
(9, 'D19A123', 2, 10, '2019-12-27'),
(11, 'D74A214', 1, 5, '2019-12-27'),
(10, 'D19A123', 2, 8, '2020-01-07'),
(7, 'B21G104', 3, 5, '2020-01-07'),
(4, 'B37G209', 7, 6, '2020-01-09'),
(13, 'G32B401', 5, 7, '2019-12-09'),
(11, 'D19A123', 2, 8, '2019-12-11');

