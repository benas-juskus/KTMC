USE prekyba;

-- 1.
SELECT vardas, pavarde,MIN(idarb_data)
FROM makl;

-- 2.
SELECT vardas, pavarde, atlygis
FROM makl
ORDER BY atlygis DESC
LIMIT 1;

-- 3.
SELECT makl.vardas, makl.pavarde, COUNT(pirkejas) AS pirkeju_skaicius
FROM pard
JOIN makl ON pard.makleris = makl.makl_nr
GROUP BY makleris;

-- 4.
SELECT pard_data AS pardavimo_data, SUM(apmoketa) AS apyvarta
FROM pard
GROUP BY pard_data
ORDER BY apyvarta DESC
LIMIT 1;

-- 5.
SELECT vardas, pavarde
FROM pirk
WHERE valstija = 'CA';

-- 6.

SELECT DISTINCT valstija
FROM pirk;

-- 7.

SELECT pirk.vardas, pirk.pavarde, makl.vardas
FROM pard
JOIN pirk ON pirk.pirk_nr = pard.pirkejas
JOIN makl ON pard.makleris = makl.makl_nr
WHERE makl.vardas = 'Chuck';

-- 8.

SELECT DISTINCT miestas, valstija
FROM pirk
GROUP BY miestas;

-- 9.

SELECT vardas, pavarde
FROM pirk
WHERE miestas = 'Los Angeles';

-- 10.

SELECT vadovas, COUNT(makl_nr) AS makleriai
FROM makl
GROUP BY vadovas;