USE studentai;

-- Visos disciplinos:
SELECT * FROM disciplina;

-- Grupės ir studentai:
SELECT 
studentas.pavarde,  
CONCAT(grupe.fakultetas, '-', grupe.numeris) AS studento_grupe
FROM studentas
INNER JOIN grupe ON studentas.grupes_nr = grupe.numeris;

-- Studentai ir studijos:

SELECT studentas.pavarde, disciplina.pavadinimas
FROM studentas
JOIN fakultetas ON studentas.fakultetas = fakultetas.kodas
JOIN disciplina ON disciplina.fakultetas = fakultetas.kodas
ORDER BY studentas.pavarde;

-- Kokiame fakultete mokosi studentai:

SELECT studentas.pavarde, fakultetas.pavadinimas
FROM studentas
JOIN fakultetas ON studentas.fakultetas = fakultetas.kodas
ORDER BY studentas.pavarde;

-- Kiek studentų mokosi kiekviename fakultete:

SELECT fakultetas.pavadinimas, COUNT(studentas.pavarde) AS studentu_kiekis
FROM studentas
JOIN fakultetas ON studentas.fakultetas = fakultetas.kodas
GROUP BY fakultetas.pavadinimas
ORDER BY studentu_kiekis;

-- Bendraamžiai studentai:

SELECT YEAR(gime) AS gimimo_metai, COUNT(*) AS studentu_skaicius
FROM studentas
GROUP BY gimimo_metai;

-- Studentų kiekis:
SELECT COUNT(*) AS studentu_kiekis
FROM studentas;

-- Studentų pažymių vidurkiai:
SELECT disciplina.pavadinimas, AVG(ivertinimas) AS studentu_vidurkis
FROM egzaminas
JOIN disciplina ON egzaminas.disciplinos_kodas = disciplina.kodas
GROUP BY disciplina.pavadinimas;

-- Įvertinimai (įvairių įvertinimo balų kiekiai kievkienoje disciplinoje):

SELECT disciplina.pavadinimas, COUNT(ivertinimas) AS ivertinimu_kiekis
FROM egzaminas
JOIN disciplina ON egzaminas.disciplinos_kodas = disciplina.kodas
GROUP BY disciplina.pavadinimas;

-- Sesijos rezultatų pateikimas:

SELECT 
CONCAT(grupe.fakultetas, '-', grupe.numeris) AS studento_grupe,
studentas.pavarde AS studento_pavarde,
AVG(egzaminas.ivertinimas) AS vidurkis
FROM studentas
JOIN fakultetas ON fakultetas.kodas = studentas.fakultetas
JOIN grupe ON grupe.fakultetas = fakultetas.kodas
JOIN egzaminas ON egzaminas.studento_id = studentas.bilieto_nr
GROUP BY studentas.pavarde;