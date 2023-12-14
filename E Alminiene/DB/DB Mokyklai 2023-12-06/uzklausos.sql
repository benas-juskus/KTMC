-- Visi mokiniai:
SELECT * FROM mokinys;

-- Mokiniai ir ju pasirinkti dalykai:
SELECT 
    mokinys.vardas, mokinys.pavarde,
    dalykas.pavadinimas
FROM mokinys_dalykas
JOIN mokinys ON mokinys_dalykas.mokinio_id = mokinys.id
JOIN dalykas ON mokinys_dalykas.dalyko_id = dalykas.dalyko_id
ORDER BY mokinys.vardas, mokinys.pavarde;

-- Kiek dalyku yra pasirinkes kiekvienas mokinys:

SELECT  
    mokinys.vardas, mokinys.pavarde,
    COUNT(mokinys_dalykas.rysio_id) AS dalyku_skaicius
FROM mokinys_dalykas
JOIN mokinys ON mokinys.id = mokinys_dalykas.mokinio_id
GROUP BY mokinys.vardas, mokinys.pavarde;

-- Destytojai, ju destomas dalykas ir kabinetas:

SELECT 
    destytojas.vardas, destytojas.pavarde,
    dalykas.pavadinimas, dalykas.kabinetas
FROM dalykas
JOIN destytojas ON dalykas.dalyko_id = destytojas.dalyko_id
ORDER BY destytojas.vardas, destytojas.pavarde;

-- Mokiniai, kurie buvo stazuoteje rudeni:

SELECT 
    mokinys.vardas, mokinys.pavarde,
    stazuote.projekto_pavadinimas, stazuote.pradzia, stazuote.pabaiga
FROM stazuote
JOIN mokinys ON stazuote.mokinio_id = mokinys.id
WHERE MONTH(stazuote.pradzia) IN (9, 10, 11)
OR MONTH(stazuote.pabaiga) IN (9, 10, 11);

-- Kiekvieno mokinio visu dalyku pazymiu vidurkis:

SELECT 
    mokinys.vardas, mokinys.pavarde,
    AVG(pazymys.ivertinimas) AS vidurkis
FROM mokinys_dalykas
JOIN dalykas ON dalykas.dalyko_id = mokinys_dalykas.dalyko_id
JOIN mokinys ON mokinys.id = mokinys_dalykas.mokinio_id
JOIN pazymys ON mokinys_dalykas.rysio_id = pazymys.rysio_id
GROUP BY mokinys.vardas, mokinys.pavarde;

