DROP SCHEMA IF EXISTS studentai;

CREATE SCHEMA IF NOT EXISTS studentai;

USE studentai;

DROP TABLE IF EXISTS studentas;

CREATE TABLE IF NOT EXISTS studentas (
    bilieto_nr INT NOT NULL AUTO_INCREMENT,
    pavarde VARCHAR(45) NOT NULL,
    gime DATE NOT NULL,
    grupe VARCHAR(10) NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    istojimo_balas INT(99) NULL,
    PRIMARY KEY (bilieto_nr)
);

INSERT INTO studentas (bilieto_nr, pavarde, gime, grupe, adresas, istojimo_balas) 
VALUES 
(3, 'Petraitis P.', '1985-05-05', 'IF-8/1', 'Miglės 12-4, Vilnius', 16),
(10, 'Povilaitytė P.', '1984-02-03', 'VF-6/1', 'Naglio 4, Klaipėda', 20),
(15, 'Jonaitis G.', '1985-06-05', 'GF-7/2', 'Baltijos 12-14, Klaipėda', 17),
(17, 'Simonaitis K.', '1984-01-03', 'IF-8/1', 'Pergalės 47, Šakiai', 15),
(4, 'Mataitis N.', '1985-05-01', 'GF-7/2', 'Kalnų 15-19, Šilutė', 18),
(9, 'Jonaitytė O.', '1984-02-10', 'VF-6/2', 'Žaliakalnio 32-4, Kaunas', 20),
(18, 'Masiulis G.', '1985-07-13', 'GF-7/2', 'Laisvės 5-19, Kaunas', 28),
(25, 'Masiulytė E.', '1985-06-17', 'IF-8/2', 'Antakalnio 3-2, Vilnius', 20),
(20, 'Drakšas G.', '1985-04-10', 'GF-7/1', 'Žirmūnų 7-24, Vilnius', 27),
(16, 'Graikšaitė D.', '1984-10-11', 'IF-8/2', 'Pašilaičių 19-119, Vilnius', 15),
(14, 'Drakšaitė Z.', '1984-12-01', 'VF-6/1', 'Kęstučio 34-79, Vilnius', 25),
(6, 'Narbutas E.', '1985-11-07', 'GF-7/1', 'Upytės 7, Tauragė', 16),
(8, 'Račkus J.', '1984-02-02', 'IF-8/1', 'Siguldos19, Jurbarkas', 27),
(11, 'Jazbutytė D.', '1985-03-09', 'VF-6/2', 'Nemuno 20, Tauragė', 17),
(13, 'Petraitytė A.', '1984-09-10', 'GF-7/1', 'Minijos 113-115, Klaipėda', 25),
(19, 'Jakaitytė E.', '1984-12-15', 'IF-8/2', 'Naikupės 5-19, Klaipėda', 26),
(21, 'Normantas K.', '1985-08-24', 'VF-6/1', 'Zarasų 21-47, Zarasai', 20),
(2, 'Zakaras M.', '1985-07-07', 'VF-6/2', 'Pašilės 8, Šilutė', 19),
(5, 'Varnaitė G.', '1985-08-29', 'VF-6/1', 'Teatro a. 3-7, Šilutė', 19),
(7, 'Viršilas A.', '1985-11-30', 'IF-8/2', 'Varpo 113-9, Klaipėda', 28);

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

