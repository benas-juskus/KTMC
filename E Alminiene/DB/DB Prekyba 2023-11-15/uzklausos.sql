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
SELECT makl.makl_nr, makl.vardas, makl.pavarde, pard.pirkejas, pirk.vardas, pirk.pavarde
FROM pard
JOIN makl ON makl.makl_nr = pard.makleris
JOIN pirk ON pirk.pirk_nr = pard.pirkejas;