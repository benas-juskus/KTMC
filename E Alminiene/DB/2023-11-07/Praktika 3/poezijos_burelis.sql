
DROP SCHEMA IF EXISTS `poezijos_burelis`;

CREATE SCHEMA IF NOT EXISTS `poezijos_burelis`;

USE `poezijos_burelis`;

DROP TABLE IF EXISTS `vartotojas`;

CREATE TABLE IF NOT EXISTS `vartotojas` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `vardas` VARCHAR(45) NOT NULL,
    `pavarde` VARCHAR(45) NOT NULL,
    `el_pastas` VARCHAR(255) NOT NULL,
    `adresas` VARCHAR(255) NOT NULL,
    `admin` BOOLEAN DEFAULT false,
    PRIMARY KEY (`id`),
    UNIQUE (`el_pastas`)
);

DROP TABLE IF EXISTS `kuriniu_tipai`;

CREATE TABLE IF NOT EXISTS `kuriniu_tipai` (
    `id` TINYINT NOT NULL AUTO_INCREMENT,
    `tipo_pavadinimas` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`tipo_pavadinimas`)
);

DROP TABLE IF EXISTS `kurinys`;

CREATE TABLE IF NOT EXISTS `kurinys` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `pavadinimas` VARCHAR(255) NOT NULL,
    `turinys` VARCHAR(10000) NOT NULL,
    `tipas` TINYINT NULL,
    `autoriaus_id` INT NOT NULL,
    `isleidimo_data` DATE NULL,
    `parduodama` BOOLEAN DEFAULT false,
    `kaina` INT(255) NULL,
    PRIMARY KEY (`id`),
    UNIQUE (`pavadinimas`),
    FOREIGN KEY (`tipas`) REFERENCES `kuriniu_tipai`(`id`),
    FOREIGN KEY (`autoriaus_id`) REFERENCES `vartotojas`(`id`)
);

DROP TABLE IF EXISTS `kuriniu_rinkinys`;

CREATE TABLE IF NOT EXISTS `kuriniu_rinkinys` (
    `rinkinio_id` INT NOT NULL AUTO_INCREMENT,
    `pavadinimas` VARCHAR(255) NOT NULL,
    `kuriniai` VARCHAR(255) NOT NULL,
    `parduodama` BOOLEAN DEFAULT false,
    `kaina` INT(255) NULL,
    PRIMARY KEY (`rinkinio_id`),
    UNIQUE (`pavadinimas`)
);


DROP TABLE IF EXISTS `krepselis`;

CREATE TABLE IF NOT EXISTS `krepselis` (
    `session_id` INT NOT NULL AUTO_INCREMENT,
    `sukurta` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `vartotojo_id` INT NOT NULL,
    `prekes` VARCHAR(255) NULL,
    `suma` INT NULL,
    PRIMARY KEY (`session_id`),
    FOREIGN KEY (`vartotojo_id`) REFERENCES `vartotojas`(`id`)
);