//Uzduotis 5, versija 2

let resultsTaskFiveTotal2 = []; //Masyvas kuriame laikysime visus sugeneruotus rezultatus.

for (let a = 1; a < 10; a++) {//Šis ciklas generuos masyvus kiekvienam skaičiui.
    
    let resultTaskFive = []; //Masyvas kuriame laikysime visas vieno skaičiaus daugybos variacijas.

    for (let i = 1; i < 10; i++) { //Šis ciklas generuos skaičių variacijas, kurios bus dedamos į masyvą.
        resultTaskFive.push(`${a} * ${i} = ${a * i}`);
    };

    resultsTaskFiveTotal2.push(resultTaskFive); //Kiekvienos iteracijos sugeneruotą masyvą vienam skaičiui, keliame į visų rezultatų masyvą.
};


let taskFiveDisplay = document.getElementById('task5v2'); //Elementas kuriame vaizduosime informaciją.

for (let i = 0; i <= resultsTaskFiveTotal2.length; i += 3) {//Paleidžiame ciklą, kuris didės po 3, kol vertė yra mažesnė nei masyvų skaičius rezultate.
    let newRow = document.createElement('tr');//Ciklo pradžioje sukuriamas eilės elementas.

    for (let j = 0; j < 3; j++) {//Paleidžiame ciklą, kuris didės nuo nulio po vieną, kol yra mažiau nei trys.

        if (i + j < resultsTaskFiveTotal2.length) {//Kintamasis "i" padeda skaičiuoti eilės numerį, kol kintamasis "j" indikuoja duomenų celės (td) numerį.
            //Šių kintamųjų suma indikuoja indeksą masyve, pagal kurį tolimesnis ciklas atitinkamai dėlioja duomenis.
                const newTd = document.createElement('td');
            for (let line of resultsTaskFiveTotal2[i + j]) {

                let newPar = document.createElement('p');
                    newPar.textContent = line;
        
                newTd.appendChild(newPar);//Tuomet įkeliami į tėvinį elementą.
            };
            newRow.appendChild(newTd); //Tada įkeliami į elementą kur bus vaizduojama visa daugybos lentelė.
        }
    };

    taskFiveDisplay.appendChild(newRow);
}




