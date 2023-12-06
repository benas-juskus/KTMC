-- 2. Išrinkite visus duomenis iš lentelės “IMONES”.
SELECT * FROM imone;

-- 3. Išveskite, kiek iš viso mokinių mokinasi akademijoje.

SELECT COUNT(*) AS mokiniu_skaicius
FROM mokinys;

-- 4. Išrinkite duomenis (vardas, pavardė, gimimo data) apie visas mokines moteris.
SELECT * FROM mokinys
WHERE asmens_kodas LIKE '4%';

-- 5. Išrinkite duomenis (asmens kodas, vardas ir pavardė) 
-- apie mokinius, kurių įmonės pavadinimas 'EisGroup Lietuva' arba 'Forbis'.

SELECT mokinys.asmens_kodas, mokinys.vardas, mokinys.pavarde, imone.pavadinimas
FROM mokinys
JOIN imone ON mokinys.imone = imone.imones_kodas
-- WHERE imone.pavadinimas = 'EisGroup Lietuva' OR imone.pavadinimas = 'Forbis';
WHERE imone.pavadinimas LIKE '%EisGroup Lietuva%' OR imone.pavadinimas LIKE '%Forbis%';

-- 6. Išrinkite visus mokinius (ID, vardas, įmonės kodas), 
-- kurie yra priskirti įmonėms ir jų ID 
-- (jei nenaudojamas ID, tai asmens kodo paskutinis skaitmuo) yra nuo 4 iki 7.

SELECT
    mokinys.asmens_kodas, 
    CONCAT(mokinys.vardas, ' ', mokinys.pavarde) AS mokinio_vardas, 
    mokinys.imone, 
    imone.pavadinimas
FROM mokinys
JOIN imone ON mokinys.imone = imone.imones_kodas
WHERE imone IS NOT NULL;

-- 7. Išrinkite visus duomenis apie mokinius, 
-- kurių pavardėje ketvirta nuo priekio raidė yra “a”.

SELECT * FROM mokinys
WHERE pavarde LIKE '___a%';

-- 8.  Išrinkite visus duomenis apie mokinius ir išrikiuokite juos pagal įmonės pavadinimą.

SELECT imone.pavadinimas AS imones_pavadinimas, mokinys.*
FROM mokinys
JOIN imone ON mokinys.imone = imone.imones_kodas
ORDER BY imone.pavadinimas;

-- 9. Išrinkite iš lentelės “PAZYMIAI” mažiausią ir didžiausią pažymius.

SELECT MIN(pazymys) AS maziausias_pazymys, MAX(pazymys) AS didziausias_pazymys
FROM pazymys;

-- 10. Išrinkite duomenis (vardas, pavardė, kiekis), kiek iš viso pažymių turi kiekvienas mokinys.

SELECT mokinys.vardas, mokinys.pavarde, COUNT(pazymys) AS pazymiu_skaicius
FROM mokinys
JOIN mokinio_kursai ON mokinio_kursai.mokinio_id = mokinys.asmens_kodas
JOIN pazymys ON mokinio_kursai.rysio_id = pazymys.rysys
GROUP BY mokinys.asmens_kodas;

-- 11. Išrinkite duomenis (pavadinimas, įmonės kodas, adresas), 
-- kiek kiekvienai įmonei yra priskirta mokinių.

SELECT
    imone.pavadinimas, 
    imone.imones_kodas, 
    imone.adresas, 
    COUNT(mokinys.asmens_kodas) AS mokiniu_kiekis
FROM imone
JOIN mokinys ON mokinys.imone = imone.imones_kodas
GROUP BY imone.pavadinimas;

-- 12. #10 užklausą pataisykite taip, kad rodytų tik tuos mokinius, 
-- kurie turi bent 2 pažymius.

SELECT mokinys.vardas, mokinys.pavarde, COUNT(pazymys) AS pazymiu_skaicius
FROM mokinys
JOIN mokinio_kursai ON mokinio_kursai.mokinio_id = mokinys.asmens_kodas
JOIN pazymys ON mokinio_kursai.rysio_id = pazymys.rysys
GROUP BY mokinys.asmens_kodas
HAVING pazymiu_skaicius >= 2;

-- 13. Išveskite duomenis (mokinio vardas, pavardė, asmenskodas, modulio pavadinimas) 
-- kurie neišlaikė bent vieno kontrolinio arba nelaikė kontrolinio iš viso. 
-- (Pastaba: modulis laikomas neišlaikytu, jei pažymys&lt;7.)

SELECT mokinys.vardas, mokinys.pavarde, mokinys.asmens_kodas, kursas.pavadinimas
FROM mokinys
JOIN mokinio_kursai ON mokinys.asmens_kodas = mokinio_kursai.mokinio_id
JOIN kursas ON mokinio_kursai.kurso_id = kursas.id
JOIN pazymys ON mokinio_kursai.rysio_id = pazymys.rysys
WHERE pazymys < 7
GROUP BY mokinys.asmens_kodas;

-- 14. Sukurkite ir įterpkite naujus du mokinius užpildydami 
-- visus laukus bei priskirdami jiems “Tieto” įmonę.

INSERT INTO mokinys (asmens_kodas, vardas, pavarde, gimimo_data, specialybe, imone)
VALUES
(38901251234,'Karolis', 'Museika','1989-01-25','Programuotojas', 345678912),
(49004284321,'Kornelija', 'Karambiene','1990-04-28','Testuotojas', 345678912);

-- 15. Atnaujinkite duomenis apie mokinį, kurio asmens kodas yra
--  '40216305874', priskirdami jam “EisGroup Lietuva” įmonę.

UPDATE mokinys
SET imone = 123456789
WHERE asmens_kodas = 40216305874;

-- 16. Ištrinkite vieną mokinį, kurį sukūrėte #14 užklausoje, 
-- o kitą palikite.

DELETE FROM mokinys
WHERE asmens_kodas = 49004284321;

-- 17. Pažymių lentelėje pridėti datos stulpelį, kur automatiškai 
-- atsirastų data ir laikas, kada įrašas buvo insertintas.

ALTER TABLE pazymys
ADD COLUMN data_laikas DATETIME DEFAULT CURRENT_TIMESTAMP;

-- 18. Jei įmonė nutrinama - prie žmonių imones_id  turi atsirasti NULL reikšmės.

ALTER TABLE mokinys
DROP FOREIGN KEY IF EXISTS fk_imone;
ALTER TABLE mokinys
ADD CONSTRAINT fk_imone 
FOREIGN KEY (imone) 
REFERENCES imone(imones_kodas) 
ON DELETE SET NULL;

-- 19. Mokinų lentelę papildyti datos lauku, 
-- kur data būtų automatikšai sugeneruojama įrašo insertinimo metu (arba atnaujinimo).

ALTER TABLE mokinys
ADD COLUMN idejimo_data DATE DEFAULT CURRENT_TIMESTAMP;

-- 20. Pagal #19 užklausa papildytą lauką, parašykite užklausas, 
-- kuri nutrinti visus 5 metų senumo įrašus (kartu su pažymiais ir įmonėmis, jei jose nebeliko darbuotojų įrašų).

DELETE FROM mokinys
WHERE YEAR(NOW()) - YEAR(idejimo_data) >= 5;