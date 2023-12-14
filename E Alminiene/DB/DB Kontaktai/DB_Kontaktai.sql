DROP SCHEMA IF EXISTS db_kontaktai;

CREATE SCHEMA IF NOT EXISTS db_kontaktai;

USE db_kontaktai;

DROP TABLE IF EXISTS asmuo;

CREATE TABLE IF NOT EXISTS asmuo (
    id INT NOT NULL AUTO_INCREMENT,
    vardas VARCHAR(45) NOT NULL,
    pavarde VARCHAR(45) NOT NULL,
    gimimo_data DATE NOT NULL,
    salis VARCHAR(45) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO asmuo (vardas, pavarde, gimimo_data, salis)
VALUES
('Jonas', 'Petraitis', '1991-05-28', 'LT'),
('Janina', 'Abraitienė', '1991-07-18', 'LT'),
('Alice', 'Smith', '1985-03-12', 'US'),
('Bob', 'Johnson', '1990-09-25', 'CA'),
('Elena', 'Garcia', '1982-11-07', 'MX'),
('James', 'Brown', '1978-06-15', 'UK'),
('Sophia', 'Kim', '1995-02-21', 'KR'),
('Mohammed', 'Ahmed', '1989-04-30', 'SA'),
('Maria', 'Lopez', '1993-08-08', 'ES'),
('Yuki', 'Tanaka', '1987-12-03', 'JP');

DROP TABLE IF EXISTS adresas;

CREATE TABLE IF NOT EXISTS adresas (
    id INT NOT NULL,
    salis VARCHAR(45) NOT NULL,
    miestas VARCHAR(45) NOT NULL,
    adresas VARCHAR(255) NOT NULL,
    pkodas VARCHAR(45) NOT NULL,
    komentaras TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES asmuo(id)
);

INSERT INTO adresas (id, salis, miestas, adresas, pkodas, komentaras)
VALUES
(1, 'Lietuva', 'Vilnius', 'Gedimino pr. 1', '01100', 'Sveiki, aš esu iš Vilniaus, ir man čia labai gerai gyventi.'),
(2, 'Lietuva', 'Klaipėda', 'Tiltų g. 2', '95812', 'Paskambink man kai galesi.'),
(3, 'United States', 'New York', '123 Broadway St', '10001', 'Hello, I love living in the Big Apple.'),
(4, 'Canada', 'Toronto', '456 Maple Ave', 'M5H 1T1', 'Toronto is a fantastic city to call home.'),
(5, 'Mexico', 'Mexico City', '789 Avenida Reforma', '06000', '¡Hola! Me encanta vivir en la Ciudad de México.'),
(6, 'United Kingdom', 'London', '101 Oxford Street', 'W1D 1LL', 'London calling! Living the British life.'),
(7, 'South Korea', 'Seoul', '202 Gangnam-gu', '135-080', 'Annyeonghaseyo! Seoul is amazing.'),
(8, 'Saudi Arabia', 'Riyadh', '303 King Abdulaziz Rd', '11432', 'Marhaban! Riyadh is a great place to be.'),
(9, 'Spain', 'Barcelona', '404 Rambla Catalunya', '08007', '¡Hola! Barcelona es increíble.'),
(10, 'Japan', 'Tokyo', '505 Shibuya Crossing', '150-0041', 'Konnichiwa! Tokyo life is wonderful.');


DROP TABLE IF EXISTS komentaras;

CREATE TABLE IF NOT EXISTS komentaras (
    id INT NOT NULL,
    laikas DATETIME DEFAULT CURRENT_TIMESTAMP,
    komentaras TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES asmuo(id)
);

INSERT INTO komentaras (id, laikas, komentaras)
VALUES
(1, '2022-01-01 10:00:00', 'Sveiki, aš esu iš Vilniaus, ir man çia labai gerai gyventi.'),
(2, '2022-01-02 11:30:00', 'Klaipėda visada geriausia. Call me.'),
(3, '2022-01-03 14:45:00', 'Hello, I love living in the Big Apple.'),
(4, '2022-01-04 16:20:00', 'Toronto is a fantastic city to call home.'),
(5, '2022-01-05 18:00:00', '¡Hola! Me encanta vivir en la Ciudad de México.'),
(6, '2022-01-06 19:30:00', 'London calling! Living the British life.'),
(7, '2022-01-07 21:15:00', 'Annyeonghaseyo! Seoul is amazing.'),
(8, '2022-01-08 23:00:00', 'Marhaban! Riyadh is a great place to be.'),
(9, '2022-01-09 00:45:00', '¡Hola! Barcelona es increíble.'),
(10, '2022-01-10 02:30:00', 'Konnichiwa! Tokyo life is wonderful.');

DROP TABLE IF EXISTS telefonas;

CREATE TABLE IF NOT EXISTS telefonas (
    id INT NOT NULL,
    telefonas VARCHAR(45) NOT NULL,
    tipas VARCHAR(45) NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (id) REFERENCES asmuo(id)
);

INSERT INTO telefonas (id, telefonas, tipas)
VALUES
(1, 65623148, 'mobile'),
(2, 55149149, 'landline'),
(3, 65623150, 'mobile'),
(4, 65623151, 'mobile'),
(5, 65623152, 'mobile'),
(6, 65623153, 'landline'),
(7, 65623154, 'mobile'),
(8, 65623155, 'mobile'),
(9, 65623156, 'landline'),
(10, 65623157, 'mobile');