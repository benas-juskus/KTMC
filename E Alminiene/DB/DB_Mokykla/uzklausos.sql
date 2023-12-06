-- 4.      Sukurkite užklausas:

-- 4.1.        Duomenys apie vaikus (mokinius).
SELECT * FROM mokinys;

-- 4.2.        Duomenys apie asmenis (tėvelius).
SELECT CONCAT(vardas, ' ' , pavarde) AS mokinys, tetis, mama
FROM mokinys;

-- 4.3.        Mokinio auklėtojai.
SELECT 
    CONCAT(mokinys.vardas, ' ' , mokinys.pavarde) AS mokinys,
    CONCAT(mokytojas.vardas, ' ', mokytojas.pavarde) AS aukletojas
FROM klase_aukletojas
JOIN mokinys ON klase_aukletojas.klase_id = mokinys.klase
JOIN mokytojas ON klase_aukletojas.mokytojas_id = mokytojas.id;

-- 4.4.        Duomenys apie mokinių pažangumą.

SELECT 
    CONCAT(mokinys.vardas, ' ' , mokinys.pavarde) AS mokinys,
    dalykas.pavadinimas,
    ivertinimas.trimestras_1 AS t1,
    ivertinimas.trimestras_2 AS t2,
    ivertinimas.trimestras_3 AS t3,
    ivertinimas.metinis
FROM mokinys_dalykas
JOIN mokinys ON mokinys_dalykas.mokinys_id = mokinys.id
JOIN dalykas ON mokinys_dalykas.dalykas_id = dalykas.id
JOIN ivertinimas ON mokinys_dalykas.rysio_id = ivertinimas.rysys;

-- 4.5.        Duomenys apie mokinius mokančius mokytojus.
SELECT 
    CONCAT(mokytojas.vardas, ' ', mokytojas.pavarde) as mokytojas,
    dalykas.pavadinimas
FROM mokytojas
JOIN mokinys_dalykas ON mokytojas.dalykas = mokinys_dalykas.dalykas_id
JOIN dalykas ON dalykas.id = mokinys_dalykas.dalykas_id
GROUP BY mokytojas;

-- 4.6.        Keli mokiniai gyvena toje pačioje gatvėje.
SELECT DISTINCT
    SUM(COUNT(SUBSTRING_INDEX(adresas, ' ', 1))) OVER () as pasikartojancios_gatves
FROM mokinys
GROUP BY SUBSTRING_INDEX(adresas, ' ', 1)
HAVING COUNT(SUBSTRING_INDEX(adresas, ' ', 1)) > 1;

-- 4.7.        Užklausa, kuri rodo mokinių amžių.

SELECT vardas, pavarde,
    FLOOR((DATEDIFF(NOW(), gimimo_data) / 365)) AS amzius
FROM mokinys;

-- 4.8.        Užklausa, kuri išvardija visus dalykus.
SELECT pavadinimas FROM dalykas;

-- 4.9.        Užklausa, kuri išvardija visus mokinius, turinčius didesnį už 8 metinį pažymį.

SELECT 
    CONCAT(m.vardas, ' ', m.pavarde) as mokinys,
    d.pavadinimas AS dalykas,
    i.metinis AS metinis_ivertinimas
FROM mokinys_dalykas md
JOIN mokinys m ON md.mokinys_id = m.id
JOIN dalykas d ON md.dalykas_id = d.id
JOIN ivertinimas i ON md.rysio_id = i.rysys
WHERE i.metinis > 8;

-- 4.10.    Užklausa, kuri rodo kiek mokykloje dirba mokytojų.

SELECT COUNT(id)
FROM mokytojas;

-- 4.11.    Užklausa, kuri rodo vienos klasės mokymosi rezultatus.

SELECT 
    k.pavadinimas AS klase,
    CONCAT(m.vardas, ' ', m.pavarde) AS mokinys,
    d.pavadinimas AS dalykas,
    i.trimestras_1, 
    i.trimestras_2, 
    i.trimestras_3, 
    i.metinis
FROM mokinys_dalykas md
JOIN mokinys m ON md.mokinys_id = m.id
JOIN ivertinimas i ON md.rysio_id = i.rysys
JOIN klase k ON m.klase = k.klases_id
JOIN dalykas d ON md.dalykas_id = d.id
WHERE k.klases_id = 2;