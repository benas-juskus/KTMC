DROP SCHEMA IF EXISTS prekyba;

CREATE SCHEMA IF NOT EXISTS prekyba;

USE prekyba;

DROP TABLE IF EXISTS makl;
CREATE TABLE IF NOT EXISTS makl (
    makl_nr CHAR(6) NOT NULL PRIMARY KEY,
    pavarde CHAR(15),
    vardas CHAR(10),
    idarb_data DATE,
    miestas CHAR(15),
    vadovas CHAR(6),
    atlygis DOUBLE(6, 0),
    priedas DOUBLE(4, 1)
);

INSERT INTO makl VALUES ("000001", "Zambini", "Rick", "1980-02-15", "Los Angeles", "000000", 6000,5.0), 
("000003", "Vidoni", "Cheril", "1980-03-06", "New york", "000000", 5783, 5.0), 
("000004", "Coudray", "Sandy", "1980-03-06", "Los Angeles", "000001", 6237, 5.0), 
("000006", "Thomas", "Pat", "1981-01-08", "New york", "000003", 5875, 5.0), 
("000008", "McLester", "Debie", "1981-04-12", "Los Angeles", "000001", 4792, 5.0), 
("000011", "Michaela", "Dolores", "1982-05-05", "Chicago", "000012", 4927, 7.0), 
("000012", "Charlie", "Ted", "1983-02-02", "Chicago", "000000", 5945, 5.0), 
("000013", "Marin", "Mark", "1983-06-05", "Los Angeles", "000001", 4802, 11.0),
("000015", "Roddick", "Mary", "1984-02-13", "New york", "000003", 5493, 8.0), 
("000016", "Long", "Nicole", "1984-08-18", "New york", "000003", 5190, 7.0), 
("000019", "Rolfes", "Chuck", "1984-09-09", "Los Angeles", "000001", 4586, 6.0), 
("000020", "Sanders", "Kathy", "1985-03-23", "Chicago", "000012", 3783, 6.0);


DROP TABLE IF EXISTS pirk;
CREATE TABLE IF NOT EXISTS pirk (
    pirk_nr CHAR(6) NOT NULL PRIMARY KEY,
    firma CHAR(45),
    pavarde CHAR(15),
    vardas CHAR(10),
    adresas CHAR (25),
    miestas CHAR(15),
    valstija CHAR(4),
    indeksas CHAR (6)
);

INSERT INTO pirk VALUES 
('000001', 'Leonard Design Services', 'Leonard', 'Rick', '1550 Keystone St.', 'Oceanside', 'CA', '920504'), 
('000003', 'Ace Furniture', 'Martin', 'Lisa', '1960 Lindley Ave.', 'Wassu', 'WI', '54401'), 
('000009', 'Custom Furniture', 'Pollock', 'Daniel', '5934 Pine Needles', 'Yonkers', 'NY', '10709'), 
('000011', 'The Office', 'Leclere', 'Domin', '101 Pierce street', 'New York', 'NY', '11013'), 
('000016', 'American Business Suppl', 'Daniels', 'George', '5601 Grande Ave.', 'Los Angeles', 'CA', '90233'), 
('000017', 'Black''s Furniture Store', 'Jackson', 'Dennis', '7010 Balcom Ave.', 'San Francisco', 'CA', '94119'),
('000018', 'Interior Systems', 'Goetz', 'John', '899 KenWood st.', 'Milwaukee', 'WI', '53201'), 
('000019', 'The Designer', 'Hobbs', 'Luke', '6043 Whiteside Blvd.', 'New York', 'NY', '10713'), 
('000022', 'Las Vegas Furniture', 'Hart', 'Paul', '8301 Sale st.', 'Las Vegas', 'NV', '89106'), 
('000024', 'Baker Furniture', 'Campbell', 'Liada', '6700 Tyler st.', 'Pheonix', 'AZ', '85012'), 
('000025', 'Modern Furniture store', 'Hamilton', 'Robert', '366 Shirley Ave.', 'Pheonix', 'AZ', '85004'), 
('000027', 'Al Office Supply store', 'McVeigh', 'John', '1240 Embar.', 'San Francisco', 'CA', '94102'), 
('000028', 'Accent Furniture Designs', 'Squire', 'Ann', '20984 Horizon Hills', 'Las Vegas', 'NV', '89108'), 
('000031', 'Al''s Furniture & Suppli', 'Thomson', 'Kathy', '80555 Brentwood', 'St. Louis', 'MC', '63121'), 
('000032', 'Contemporary Designs', 'Trujillo', 'Michelle', '5670 Colorado Blvd.', 'Milwaukee', 'WI', '53220'), 
('000033', 'Interior Designs', 'Long', 'Chuck', '40677 Misty Isle DR.', 'White Plains', 'NY', '10605'), 
('000034', 'Le Clenega Furniture', 'Keega', 'Marilyn', '6045 Vineland Blvd.', 'Los Anegeles', 'CA', '89108'), 
('000035', 'Valley Furniture', 'Yanish', 'Diane', '10111 Ventura Blvd.', 'Encino', 'CA', '91316'), 
('000036', 'New Horizon', 'Brendona', 'Kelly', '12508 Robin Hood ln.', 'Chicago', 'IL', '60619'), 
('000040', 'Designs Center Interiors', 'Gilber', 'Chuck', '7619 Kraft Dr.', 'Las Vegas', 'NV', '89106'), 
('000042', 'Cohen''s Furniture', 'Cohen', 'Larry', '908 Glen Oaks Ave.', 'San Francisco', 'CA', '94119'), 
('000043', 'To Design Furniture', 'Tsuma', 'Tamio', '4564 Benedict Can', 'Rochester', 'NY', '14625'), 
('000045', 'Classic Interiors', 'Lawson', 'Eric', '2015Edmonton', 'St. Louis', 'MO', '63106'), 
('000046', 'Comersial Interiors', 'Young', 'Sandy', '14097 Gilmore', 'LVentura', 'Ca', '93003');


DROP TABLE IF EXISTS pard;

CREATE TABLE IF NOT EXISTS pard (
    uzsak_nr CHAR(6) NOT NULL PRIMARY KEY,
    pard_data DATE,
    pirkejas CHAR(6),
    makleris CHAR(6),
    apmoketa TINYINT(1)
);

INSERT INTO pard VALUES 
("020002","1987-09-21","000008","000025",0), 
("020003","1987-09-21","000006","000043",0), 
("020004","1987-09-21","000019","000034",0), 
("020005","1987-09-21","000001","000016",0), 
("020006","1987-09-22","000012","000036",0), 
("020007","1987-09-22","000015","000019",0), 
("020008","1987-09-22","000003","000011",0), 
("020009","1987-09-22","000012","000018",0), 
("020010","1987-09-22","000011","000031",0), 
("020011","1987-09-22","000015","000040",0), 
("020012","1987-09-22","000008","000027",0), 
("020013","1987-09-23","000012","000036",0), 
("020014","1987-09-23","000001","000001",0), 
("020015","1987-09-23","000015","000019",0), 
("020016","1987-09-23","000015","000011",0), 
("020017","1987-09-24","000006","000032",0), 
("020018","1987-09-24","000011","000038",0), 
("020019","1987-09-24","000013","000016",0), 
("020020","1987-09-24","000013","000031",0), 
("020021","1987-09-25","000008","000046",0), 
("020022","1987-09-25","000004","000027",0), 
("020023","1987-09-25","000003","000040",0), 
("020024","1987-09-25","000012","000045",0), 
("020025","1987-09-25","000003","000019",0), 
("020026","1987-09-25","000004","000017",0);
