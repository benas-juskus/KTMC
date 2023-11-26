DROP SCHEMA IF EXISTS nt_agentura;

CREATE SCHEMA IF NOT EXISTS nt_agentura;

USE nt_agentura;

DROP TABLE IF EXISTS agentas;

CREATE TABLE IF NOT EXISTS agentas (
    id INT NOT NULL AUTO_INCREMENT,
    agento_vardas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (agento_vardas)
);

DROP TABLE IF EXISTS seniunija; 

CREATE TABLE IF NOT EXISTS seniunija (
    id INT NOT NULL AUTO_INCREMENT,
    pavadinimas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (pavadinimas)
);

DROP TABLE IF EXISTS seniunijos_paskirstymas;

CREATE TABLE IF NOT EXISTS seniunijos_paskirstymas (
    paskirstymo_id INT NOT NULL AUTO_INCREMENT,
    seniunija_id INT NOT NULL,
    agentas_id INT NOT NULL,
    PRIMARY KEY (paskirstymo_id),
    FOREIGN KEY (seniunija_id) REFERENCES seniunija(id),
    FOREIGN KEY (agentas_id) REFERENCES agentas(id)
);

DROP TABLE IF EXISTS klientas;

CREATE TABLE IF NOT EXISTS klientas (
    id INT NOT NULL AUTO_INCREMENT,
    vardas VARCHAR(45) NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    telefonas INT(11) NOT NULL,
    gimimo_data DATE NULL,
    email VARCHAR(45) NULL,
    PRIMARY KEY (id)
);

DROP TABLE IF EXISTS nt_tipas;

CREATE TABLE IF NOT EXISTS nt_tipas (
    id INT NOT NULL AUTO_INCREMENT,
    tipas VARCHAR(45) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (tipas)
);

DROP TABLE IF EXISTS nuosavybe;

CREATE TABLE IF NOT EXISTS nuosavybe (
    id INT NOT NULL AUTO_INCREMENT,
    tipo_id INT NOT NULL,
    savininko_id INT NOT NULL,
    seniunija_id INT NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    kambariu_sk INT(10) NULL,
    plotas INT NULL,
    sklypo_plotas INT NULL,
    kaina INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (tipo_id) REFERENCES nt_tipas(id),
    FOREIGN KEY (savininko_id) REFERENCES klientas(id),
    FOREIGN KEY (seniunija_id) REFERENCES seniunija(id)
);

DROP TABLE IF EXISTS pirkimas_pardavimas;

CREATE TABLE IF NOT EXISTS pirkimas_pardavimas (
    sutarties_id INT NOT NULL AUTO_INCREMENT,
    agento_id INT NOT NULL,
    pirkejo_id INT NOT NULL,
    pardavejo_id INT NOT NULL,
    nuosavybes_id INT NOT NULL,
    PRIMARY KEY (sutarties_id),
    FOREIGN KEY (agento_id) REFERENCES agentas(id),
    FOREIGN KEY (pirkejo_id) REFERENCES klientas(id),
    FOREIGN KEY (pardavejo_id) REFERENCES klientas(id),
    FOREIGN KEY (nuosavybes_id) REFERENCES nuosavybe(id)
);
