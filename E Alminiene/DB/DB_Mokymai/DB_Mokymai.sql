DROP SCHEMA IF EXISTS db_mokymai;

CREATE SCHEMA IF NOT EXISTS db_mokymai DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE db_mokymai;

DROP TABLE IF EXISTS imone;

CREATE TABLE IF NOT EXISTS imone (
    imones_kodas INT NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    pavadinimas VARCHAR(255) NOT NULL,
    PRIMARY KEY (imones_kodas),
    UNIQUE KEY (pavadinimas)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokymai\\imones.csv"
INTO TABLE imone
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS mokinys;

CREATE TABLE IF NOT EXISTS mokinys (
    asmens_kodas BIGINT NOT NULL,
    vardas VARCHAR(255) NOT NULL,
    pavarde VARCHAR(255) NOT NULL,
    gimimo_data DATE NOT NULL,
    specialybe VARCHAR(45),
    imone INT NULL,
    PRIMARY KEY (asmens_kodas),
    CONSTRAINT fk_mok_imone
        FOREIGN KEY (imone) 
        REFERENCES imone(imones_kodas)
        ON DELETE SET NULL
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokymai\\mokiniai.csv"
INTO TABLE mokinys
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

INSERT INTO mokinys (asmens_kodas, vardas, pavarde, gimimo_data, specialybe, imone)
VALUES
(32350120580,'Jouzas', 'Kaseta','1995-10-24','Programuotojas', NULL),
(40216305874,'Urte', 'Zirniauskiene','1984-09-05','Testuotojas', NULL);

DROP TABLE IF EXISTS kursas;

CREATE TABLE IF NOT EXISTS kursas (
    id INT NOT NULL AUTO_INCREMENT,
    pavadinimas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (pavadinimas)
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokymai\\kursai.csv"
INTO TABLE kursas
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

DROP TABLE IF EXISTS mokinio_kursai;

CREATE TABLE IF NOT EXISTS mokinio_kursai (
    rysio_id INT NOT NULL AUTO_INCREMENT,
    mokinio_id BIGINT NOT NULL,
    kurso_id INT NOT NULL,
    galutinis_ivertinimas INT NULL,
    PRIMARY KEY (rysio_id),
    CONSTRAINT fk_mokinio_kursai_mokinys
        FOREIGN KEY (mokinio_id) 
        REFERENCES mokinys(asmens_kodas)
        ON DELETE CASCADE,
    CONSTRAINT fk_mokinio_kursai_kursas
        FOREIGN KEY (kurso_id) 
        REFERENCES kursas(id)
        ON DELETE CASCADE
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokymai\\mokinio_kursai.csv"
INTO TABLE mokinio_kursai
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;


DROP TABLE IF EXISTS pazymys;

CREATE TABLE IF NOT EXISTS pazymys (
    pazymio_id INT NOT NULL AUTO_INCREMENT,
    rysys INT NOT NULL,
    pazymys INT NOT NULL,
    PRIMARY KEY (pazymio_id),
    CONSTRAINT fk_pazymys_mokinio_kursai
        FOREIGN KEY (rysys) 
        REFERENCES mokinio_kursai(rysio_id)
        ON DELETE CASCADE
);

LOAD DATA INFILE "C:\\Users\\benas\\Desktop\\KTMC\\KTMC\\E Alminiene\\DB\\DB_Mokymai\\pazymiai.csv"
INTO TABLE pazymys
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;