--   Pateikti visų asmenų sąrašą (Vardas Pavardė šalis).
SELECT vardas, pavarde, salis
FROM asmuo;

-- Atrinkti visus asmenis, kurių gimtadienis pavasarį.

SELECT vardas, pavarde, gimimo_data
FROM asmuo
WHERE MONTH(gimimo_data) IN(3,4,5);

-- Atrinkti visus asmenis kurie kilę iš Lietuvos.

SELECT vardas, pavarde, salis
FROM asmuo
WHERE salis = 'LT';

-- Pateikti visus komentarus apie Janiną Abraitienę.

SELECT 
    komentaras.komentaras AS komentaras, 
    adresas.komentaras AS adreso_komentaras
FROM asmuo
JOIN komentaras ON asmuo.id = komentaras.id
JOIN adresas ON asmuo.id = adresas.id
WHERE asmuo.vardas = 'Janina' AND asmuo.pavarde = 'Abraitienė';

-- Pateikti visus telefonus susijusius su Janina Abraitiene

SELECT telefonas.telefonas, telefonas.tipas
FROM telefonas
JOIN asmuo ON asmuo.id = telefonas.id
WHERE asmuo.vardas = 'Janina' AND asmuo.pavarde = 'Abraitienė';

-- Pateikti visus Janinos Abraitienės adresus.

SELECT CONCAT(a.salis, ', ', a.miestas, ', ', a.adresas, ', ', a.pkodas) AS pilnasAdresas
FROM adresas a
JOIN asmuo ON asmuo.id = a.id
WHERE asmuo.vardas = 'Janina' AND asmuo.pavarde = 'Abraitienė';

-- Pateikti asmenų sąrašą ir asmenį atitinkančių komentarų skaičių.

SELECT asmuo.vardas, asmuo.pavarde, COUNT(komentaras.komentaras) AS komentaru_sk
FROM asmuo
JOIN komentaras ON asmuo.id = komentaras.id
GROUP BY asmuo.vardas, asmuo.pavarde;

-- Pateikti visus asmenis ir visus su jais susijusius telefono numerius.

SELECT asmuo.vardas, asmuo.pavarde, telefonas.telefonas, telefonas.tipas
FROM telefonas
JOIN asmuo ON asmuo.id = telefonas.id;

-- Pateikti visus adresus Lietuvoje.

SELECT *
FROM adresas
WHERE salis = 'Lietuva';

-- Pateikti pilną adresų sąrašą.

SELECT CONCAT(a.salis, ', ', a.miestas, ', ', a.adresas, ', ', a.pkodas) AS pilnasAdresas
FROM adresas a
JOIN asmuo ON asmuo.id = a.id;

-- Pateikti pilną adresų sąrašą papildant asmens vardu ir pavarde.

SELECT asmuo.vardas, asmuo.pavarde, CONCAT(a.salis, ', ', a.miestas, ', ', a.adresas, ', ', a.pkodas) AS pilnasAdresas
FROM adresas a
JOIN asmuo ON asmuo.id = a.id;

-- Pateikti telefonų sąrašą papildant asmens vardu ir pavarde.

SELECT asmuo.vardas, asmuo.pavarde, telefonas.telefonas, telefonas.tipas
FROM telefonas
JOIN asmuo ON asmuo.id = telefonas.id;

-- Pasirinktam vartotojui įterpti papildomą telefoną ir komentarą apie jį.

UPDATE telefonas, komentaras
SET telefonas.telefonas = '+37012345678',
komentaras.komentaras = 'This is the new comment'
WHERE telefonas.id = 5 AND komentaras.id = 5;

