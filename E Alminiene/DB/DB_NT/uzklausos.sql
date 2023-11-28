USE nt_agentura;

-- Išrinkite duomenis apie agento (ID)
-- įvykdytas sutartis viename iš Vilniaus miesto regionų.
SELECT pirkimas_pardavimas.sutarties_id, agentas.agento_vardas, seniunija.pavadinimas
FROM pirkimas_pardavimas
JOIN agentas ON pirkimas_pardavimas.agento_id = agentas.id
JOIN nuosavybe ON pirkimas_pardavimas.nuosavybes_id = nuosavybe.id
JOIN seniunija ON nuosavybe.seniunija_id = seniunija.id
WHERE agentas.id = 3
AND seniunija_id = 7;

-- Užklausoje turi būti vienas iš parduodamų objektų 
-- (pvz. 2-jų kambarių butas), kurio plotas neviršija (pvz. 50 kv. m.)

SELECT  
    tp.tipas, 
    n.adresas, 
    s.pavadinimas AS seniunija,
    n.plotas,
    n.kambariu_sk,
    n.kaina
FROM nuosavybe n
JOIN nt_tipas tp ON n.tipo_id = tp.id
JOIN seniunija s ON n.seniunija_id = s.id
WHERE plotas < 50
AND kambariu_sk = 2
AND tipo_id IN(1,2);


-- Įvykdytų sutarčių laikotarpis: nuo ______ iki_______. 
-- Užklausoje taip pat turi figūruoti nuosavybės savininkai.

SELECT
    pp.sutarties_id,
    agentas.agento_vardas,
    CONCAT(klientas.vardas, ' ', klientas.pavarde) AS savininkas,
    pp.pardavimo_data
FROM pirkimas_pardavimas pp
JOIN agentas ON pp.agento_id = agentas.id
JOIN nuosavybe ON pp.nuosavybes_id = nuosavybe.id
JOIN klientas ON klientas.id = nuosavybe.savininko_id
WHERE pardavimo_data BETWEEN '2021-01-01' AND '2023-11-01';


-- Išrinkite duomenis apie turimą pardavime objektą 
-- viename iš Vilniaus miesto regionų, nurodant ir objekto adresą:
-- 3-jų kambarių butai iki ___ kv. m.

SELECT
    seniunija.pavadinimas,
    nuosavybe.adresas,
    nuosavybe.kambariu_sk,
    nuosavybe.plotas,
    nuosavybe.kaina
FROM nuosavybe
JOIN seniunija ON seniunija.id = nuosavybe.seniunija_id
-- NEVEIKIA: WHERE seniunija.pavadinimas = 'Antakalnis', vis dar neissiaiskinau kodel
WHERE seniunija.pavadinimas LIKE '%Antakalnis%' 
AND nuosavybe.kambariu_sk = 3
AND nuosavybe.plotas < 100;


-- Seniuniju paskirstymas:
SELECT agentas.agento_vardas, seniunija.pavadinimas
FROM seniunijos_paskirstymas
JOIN seniunija ON seniunija.id = seniunijos_paskirstymas.seniunija_id
JOIN agentas ON agentas.id = seniunijos_paskirstymas.agentas_id;