DROP SCHEMA IF EXISTS db_medicininės_paslaugos;

CREATE SCHEMA IF NOT EXISTS db_medicininės_paslaugos;

USE db_medicininės_paslaugos;

DROP TABLE IF EXISTS medziagos;

CREATE TABLE IF NOT EXISTS medziagos (
    medziagos_kodas INT NOT NULL AUTO_INCREMENT,
    medziagos_pavadinimas VARCHAR(255) NOT NULL,
    medziagos_porcijos_kaina DECIMAL(10, 2),
    PRIMARY KEY (medziagos_kodas),
    UNIQUE KEY (medziagos_pavadinimas)
);

INSERT INTO medziagos (medziagos_pavadinimas, medziagos_porcijos_kaina)
VALUES
('Jodas', 10.99),
('Paracetamolis', 2.50),
('Gelezis', 5.12),
('Magnis', 7.89),
('Cinkas', 24.99);


DROP TABLE IF EXISTS gydytojai;

CREATE TABLE IF NOT EXISTS gydytojai (
    gydytojo_numeris INT NOT NULL AUTO_INCREMENT,
    darbo_laikas VARCHAR(45),
    telefono_numeris BIGINT,
    medziagos_kodas INT,
    apmokejimas_val DECIMAL(10, 2),
    PRIMARY KEY (gydytojo_numeris),
    FOREIGN KEY (medziagos_kodas) REFERENCES medziagos(medziagos_kodas)
);

INSERT INTO gydytojai (darbo_laikas, telefono_numeris, medziagos_kodas, apmokejimas_val)
VALUES
('08:00 - 14:00, Pirmadienis - Trečiadienis', 64523478, 1, 63.70),
('09:00 - 17:00, Pirmadienis - Penktadienis', 612345678, 2, 75.00),
('10:30 - 18:30, Antradienis - Penktadienis', 621234567, 3, 88.50),
('08:30 - 15:30, Trečiadienis - Šeštadienis', 633456789, 4, 92.20),
('07:00 - 13:00, Pirmadienis - Penktadienis', 634567890, 5, 105.75);

DROP TABLE IF EXISTS pacientai;

CREATE TABLE IF NOT EXISTS pacientai (
    kliento_numeris INT NOT NULL AUTO_INCREMENT,
    kliento_vardas VARCHAR(45) NOT NULL,
    kliento_pavarde VARCHAR(45) NOT NULL,
    kliento_gyvenamoji_vieta VARCHAR(255) NOT NULL,
    PRIMARY KEY (kliento_numeris)
);

INSERT INTO pacientai (kliento_vardas, kliento_pavarde, kliento_gyvenamoji_vieta)
VALUES
('John', 'Doe', 'Ukmergė'),
('Alice', 'Smith', 'Vilnius'),
('Bob', 'Johnson', 'Kaunas'),
('Eva', 'Williams', 'Klaipėda'),
('David', 'Brown', 'Šiauliai'),
('Emma', 'Davis', 'Panevėžys'),
('Michael', 'Miller', 'Alytus'),
('Sophia', 'Wilson', 'Marijampolė'),
('Daniel', 'Taylor', 'Jonava'),
('Olivia', 'Moore', 'Mažeikiai'),
('Liam', 'Anderson', 'Utena'),
('Ava', 'Thomas', 'Telšiai'),
('Noah', 'Harris', 'Radviliškis'),
('Isabella', 'Martin', 'Druskininkai'),
('Mason', 'White', 'Palanga'),
('Sophie', 'Lee', 'Šilalė'),
('Lucas', 'Allen', 'Molėtai'),
('Aria', 'Young', 'Zarasai'),
('Ethan', 'Clark', 'Biržai'),
('Mia', 'Green', 'Trakai');

DROP TABLE IF EXISTS proceduros;

CREATE TABLE IF NOT EXISTS proceduros (
    proceduru_kodas INT NOT NULL AUTO_INCREMENT,
    proceduru_kaina DECIMAL(10, 2),
    trukme TIME(0),
    proceduros_pavadinimas VARCHAR(255),
    PRIMARY KEY (proceduru_kodas)
);

INSERT INTO proceduros (proceduru_kaina, trukme, proceduros_pavadinimas)
VALUES
(59.55, '01:15:00', 'Kolonoskopija'),
(120.00, '00:30:00', 'Magnetinis rezonansas'),
(45.75, '01:00:00', 'Rentgeno tyrimas'),
(85.20, '00:45:00', 'Ultragarsas'),
(70.50, '00:50:00', 'Endoskopija'),
(110.80, '01:30:00', 'Tomografija'),
(32.40, '00:25:00', 'EKG'),
(78.90, '01:15:00', 'Dermatologinis tyrimas'),
(55.25, '01:10:00', 'Fizioterapija'),
(90.60, '01:20:00', 'Psichologinė konsultacija'),
(40.30, '00:35:00', 'Laboratoriniai tyrimai'),
(65.15, '01:05:00', 'Chirurginė intervencija'),
(95.40, '01:40:00', 'Kardiologinis tyrimas'),
(25.90, '00:20:00', 'Akupunktūra'),
(57.80, '01:10:00', 'Reabilitacija'),
(38.20, '00:30:00', 'Ginekologinis tyrimas'),
(82.70, '01:25:00', 'Odos biopsija'),
(49.90, '01:00:00', 'Nevaisingumo diagnostika'),
(73.30, '01:30:00', 'Odontologinė procedūra'),
(67.60, '01:15:00', 'Chiropraktikos sesija'),
(112.50, '01:45:00', 'Gastroenterologinis tyrimas'),
(36.40, '00:40:00', 'Audiometrija'),
(61.05, '01:15:00', 'Vaikų logopedinė terapija'),
(44.30, '00:55:00', 'Žaizdų priežiūra'),
(88.20, '01:35:00', 'Reumatologinis tyrimas'),
(52.75, '01:05:00', 'Neurologinė konsultacija'),
(79.80, '01:20:00', 'Nefrologinė procedūra'),
(48.15, '01:10:00', 'Rentgeno terapija'),
(101.25, '01:50:00', 'Pulmonologinis tyrimas'),
(30.60, '00:25:00', 'Oftalmologinė apžiūra');

DROP TABLE IF EXISTS darbas;

CREATE TABLE IF NOT EXISTS darbas (
    darbas_id INT NOT NULL AUTO_INCREMENT,
    gydytojo_numeris INT NOT NULL,
    kliento_numeris INT NOT NULL,
    proceduru_data DATE DEFAULT CURRENT_TIMESTAMP,
    proceduru_kodas INT NOT NULL,
    PRIMARY KEY (darbas_id),
    FOREIGN KEY (gydytojo_numeris) REFERENCES gydytojai(gydytojo_numeris),
    FOREIGN KEY (kliento_numeris) REFERENCES pacientai(kliento_numeris),
    FOREIGN KEY (proceduru_kodas) REFERENCES proceduros(proceduru_kodas)
);

INSERT INTO darbas (gydytojo_numeris, kliento_numeris, proceduru_data, proceduru_kodas)
VALUES
(4, 17, '2023-10-15', 26),
(3, 8, '2023-09-28', 12),
(5, 5, '2023-11-02', 18),
(2, 11, '2023-10-10', 5),
(1, 3, '2023-10-01', 30),
(4, 20, '2023-09-22', 9),
(1, 14, '2023-11-20', 21),
(2, 19, '2023-09-03', 14),
(5, 7, '2023-11-05', 3),
(3, 2, '2023-10-25', 27),
(4, 12, '2023-09-27', 8),
(2, 10, '2023-10-08', 15),
(1, 1, '2023-11-12', 29),
(3, 18, '2023-10-30', 4),
(5, 13, '2023-09-15', 26),
(4, 6, '2023-11-18', 11),
(1, 16, '2023-09-05', 20),
(2, 4, '2023-10-03', 8),
(5, 9, '2023-11-08', 25),
(3, 15, '2023-10-19', 1),
(4, 20, '2023-09-10', 22),
(1, 5, '2023-11-25', 13),
(2, 18, '2023-09-14', 30),
(3, 7, '2023-11-29', 2),
(5, 1, '2023-10-22', 17),
(4, 14, '2023-09-08', 28),
(1, 16, '2023-11-15', 6),
(2, 3, '2023-09-01', 24),
(5, 19, '2023-10-06', 10),
(3, 8, '2023-11-23', 16),
(4, 2, '2023-09-17', 23),
(1, 11, '2023-10-29', 19),
(2, 20, '2023-09-13', 30),
(5, 4, '2023-11-09', 5),
(3, 10, '2023-10-24', 12),
(4, 15, '2023-09-20', 29),
(1, 9, '2023-11-06', 8),
(2, 1, '2023-09-30', 18),
(5, 18, '2023-10-02', 4),
(3, 16, '2023-11-13', 14),
(4, 12, '2023-09-26', 21);
