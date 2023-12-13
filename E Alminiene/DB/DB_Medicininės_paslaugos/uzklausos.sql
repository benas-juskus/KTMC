
-- Pacientai_ir_procedūros;
SELECT 
    CONCAT(pacientai.kliento_vardas, ' ', pacientai.kliento_pavarde) AS pacientas,
    proceduros.proceduros_pavadinimas
FROM darbas
JOIN pacientai ON pacientai.kliento_numeris = darbas.kliento_numeris
JOIN proceduros ON proceduros.proceduru_kodas = darbas.proceduru_kodas;

-- gydytojo atliekamas darbas;

SELECT g.gydytojo_numeris, p.proceduros_pavadinimas
FROM darbas d
JOIN gydytojai g ON g.gydytojo_numeris = d.gydytojo_numeris
JOIN proceduros p ON p.proceduru_kodas = d.proceduru_kodas;

-- atliekama_paslauga;

SELECT proceduros_pavadinimas FROM proceduros;

-- darbas;

SELECT * FROM darbas;

-- pacientams atliekamos procedūros;

SELECT DISTINCT proceduros.proceduros_pavadinimas
FROM proceduros
JOIN darbas ON proceduros.proceduru_kodas = darbas.proceduru_kodas
WHERE darbas.proceduru_kodas;

-- gydytojo atliekama procedūra.

SELECT gydytojai.gydytojo_numeris, proceduros.proceduros_pavadinimas
FROM darbas
JOIN gydytojai ON gydytojai.gydytojo_numeris = darbas.gydytojo_numeris
JOIN proceduros ON proceduros.proceduru_kodas = darbas.proceduru_kodas
WHERE gydytojai.gydytojo_numeris = 2;