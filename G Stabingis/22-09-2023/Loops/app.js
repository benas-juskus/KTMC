//Uzduotis 1

const monthName = []; //Sukuriame tuščią masyvą, kuriame bus laikomi mėnesių pavadinimai.
const monthList = document.getElementById('monthNames');//Pasirenkame html elementą kuriame vaizduosime informaciją.

for (let i = 0; i < 12; i++) { //Paleidžiame ciklą, jo pagalba sugeneruosime mėnesių pavadinimus naudojant JS Date objektą.
    const date = new Date(1, i, 1);//Sukuriame kintamąjį, kuris gauna nurodytos datos informaciją. Su kiekviena iteracija, ciklas keičia mėnesio numerį, pagal atitinkamą "i" kintamojo skaičių (metai ir diena šiuo atveju mums nerūpi, tad lieka nekintantys.)
    const month = date.toLocaleString('lt-LT', { month: 'long' });//Mėnesio pavadinimą išgauname pagal atitinkamą Date objekto grąžintą skaičių, ir tada naudojant toLocaleString() metodą, nurodome kad norime gauti ilgąjį mėnesio pavadinimą Lietuvių kalba.
    monthName.push(month);//Gautąjį pavadinimą įdedame į mėnesio pavadinimų masyvą.
}

for (let month of monthName) {//Ciklo pagalba einame per visus menesio pavadinimus masyve.
    let listItem = document.createElement('li');//Sukuriame naują elementą, kuriame bus vaizduojamas mėnesio pavadinimas.
        listItem.textContent = month;//Sukurtam elementui priskiriame mėnesio pavadinimo informaciją vidinio teksto pavidalu.

    monthList.appendChild(listItem);//Naująjį užpildytą elementą įdedame į tėvinį elementą kuriame bus vaizduojami visi mėnesio pavadinimai.
}

//Uzduotis 2

let result = 0; //Sukuriame tuščią kintamąjį, kuriame saugosime kiekvienos ciklo iteracijos rezultatą.
const taskTwoDisplay = document.getElementById('task2'); //Pasirenkame elementą, kuriame atvaizduosime rezultatus.


for (let i = 1; i <= 25; i++) { //For ciklas pradeda nuo 1 ir didėja po 1 skaičių iki kol yra lygus 25.
    let newLi = document.createElement('li'); //Sukuriame naują "li" elementą į kurį įterpsime kiekvienos iteracijos veiksmą.
        newLi.textContent = `${i} + ${result} = ${result + i}`; //Vaizduojame kas vyksta ciklo metu teksto formatu.

    taskTwoDisplay.appendChild(newLi); //Kiekvienos iteracijos rezultato tekstinį išvedimą prisegame prie tėvino elemento.

    result += i; //Kiekviena iteracija yra saugoma rezultato masyva jos esamą skaičių sudedant su prieš tau jau saugomu rezultatu.
};

//Uzduotis 3

const taskThreeDisplay = document.getElementById('task3'); //Pasirenkame elementą, kuriame atvaizduosime rezultatus.

for (let i = 1; i <= 100; i++) { //Paleidžiame ciklą, kurio metu su kiekviena iteracija didiname pradedamąjį skaičių po 1, tol kol nepasiekiame 100.
    if (i % 5 == 0) { //Sąlyga tikrina ar padalijus skaičių iš 5 yra kokia nors liekana. Liekanai neesant, atsakymas 0.
        let newLi = document.createElement('li');// Jei salyga atitinka, skaičius įkeliamas į naujai sukurtą elementą.
        newLi.textContent = i;
        taskThreeDisplay.appendChild(newLi);
    }
};

//Uzduotis 4

let numberForFactorial = 8; //Kintamasis, kuriam suteikiame vertę, kurios faktorialą norime sužinoti.
let resultTaskFour = 1; //Kintamasis rezultatui saugoti.
let sequenceDisplay = [];//Masyvas, kuriame bus saugomoi kiekvieno ciklo iteracijos veiksmai teksto pavidalu.

let taskFourDisplay = document.getElementById('task4');//Pasirenkame elementą, kuriame atvaizduosime rezultatą.

for (let i = numberForFactorial; i >= 1; i--) { //Ciklui nurodome kintamąjį, kuriam priskirta ankščiau nurodyta reikšmė faktorialui gauti.
    resultTaskFour = resultTaskFour * i; //Su kiekviena iteracija nurodytas skaičius mažinamas po 1 ir padauginamas iš ankstesnio rezultato.
    sequenceDisplay.push(i); //Einamosios iteracijos skaičius dedamas į masyvą, informacijos vaizdavimui vėliau.
};

taskFourDisplay.textContent = `${numberForFactorial}! = ${sequenceDisplay.join(' * ')} = ${resultTaskFour}`; //Informaciją atvaizduojame pasirinktame elemente.

//Uzduotis 5

let resultsTaskFiveTotal = []; //Masyvas kuriame laikysime visus sugeneruotus rezultatus.

for (let a = 1; a < 10; a++) {//Šis ciklas generuos masyvus kiekvienam skaičiui.
    
    let resultTaskFive = []; //Masyvas kuriame laikysime visas vieno skaičiaus daugybos variacijas.

    for (let i = 1; i < 10; i++) { //Šis ciklas generuos skaičių variacijas, kurios bus dedamos į masyvą.
        resultTaskFive.push(`${a} * ${i} = ${a * i}`);
    }

    resultsTaskFiveTotal.push(resultTaskFive); //Kiekvienos iteracijos sugeneruotą masyvą vienam skaičiui, keliame į visų rezultatų masyvą.

};

let taskFiveDisplay = document.getElementById('task5'); //Elementas kuriame vaizduosime informaciją.

for (let data of resultsTaskFiveTotal) { //Šis ciklas pereis per visus masyvus rezultato vidujue

    const newDiv = document.createElement('div'); //Sukuriamas elementas kuriame bus laikomi vieno skaičiaus daugybos variantai.

    for (let line of data) {//Kiekvieno masyvo indeksai (rezultato eilutės) įkeliami į naują "p" elementą
        let newPar = document.createElement('p');
            newPar.textContent = line;

        newDiv.appendChild(newPar);//Tuomet įkeliami į tėvinį elementą.
    }
    taskFiveDisplay.appendChild(newDiv); //Tada įkeliami į elementą kur bus vaizduojama visa daugybos lentelė.
};


//Uzduotis 6

let chessBoard = document.getElementById('task6'); //Pasirenkame elementą kuriame bus kuriama šachmatų lenta.

for (let i = 0; i < 8; i++) {//Paleidžiame ciklą kuris didės po vieną skaičių iki 8 pradedant nuo 0.
    let newRow = document.createElement('tr');//Kiekvienas ciklas sukuria naują lentelės eilutę.

    for (let cell = 0; cell < 8; cell++) { //Sukūrus eilutę, paleidžiamas ciklas kuris kurs 8 duomenų laukelius (kvadratus) lentai.
        let newCell = document.createElement('td');

        if (i % 2 == 0 && cell % 2 == 0) { //Sąlyga tikrina ar esamosios iteracijos sukurta eilutė newRow yra savo ciklo lyginėje ar nelyginėje iteracijoje.
            newCell.classList.add('black');//Priklausomai nuo to, sukurtam kvadratui pritaikoma (arba ne) klasė "black".
        } else if (i % 2 != 0 && cell % 2 != 0) {
            newCell.classList.add('black');//Kita sąlyga daro tą patį tik yra pritaikyta priešingai.
        }

        newRow.appendChild(newCell); //Kvadratai įdedami į naujas eilutes.
    }
    chessBoard.appendChild(newRow); //Eilutės įdedamos į table elementą.

    //Priklausomai nuo to kurie <td> elementai turi nurodytą .black klasę, CSS aprašyti stiliai pritaiko juodą foną atitinkamiems kvadratukams.
}


//Uzduotis 7

const countries = {
    "Lietuva": "Vilnius",
    "Latvija": "Ryga",
    "Estija": "Talinas",
    "Belgija": "Briuselis",
    "Danija": "Kopenhaga",
    "Prancūzija": "Paryžius",
    "Vokietija": "Berlynas",
    "Portugalija": "Lisabona",
    "Lenkija": "Varšuva",
    "Čekija": "Praha",
    "Graikija": "Atėnai",
    "Italija": "Roma",
    "Austrija": "Viena",
  };


let countryTable = document.getElementById('task7'); //Pasirenkame elementą kuriame bus vaizduojama lentelė.
let indexValue = 1; //Sukuriame kintamąjį lentelės eilučių indeksavimui.

for (let country in countries) { //Paleidžiame ciklą, kuriuo einame per visus raktus ir vertes objekte.

    let newRow = document.createElement('tr'), //Sukuriame naują eilutę informacijai atvaizduoti.
        index = document.createElement('td'), // Stulpelio elementas indeksui
        countryName = document.createElement('td'),// Stulpelio elementas šalies pavadinimui
        capitalName = document.createElement('td');// Stulpelio elementas sostinei

    index.textContent = indexValue; //Inekso reikšmė priskiriama pagal indekso kintamojo nurodytą reikšmę.
    countryName.textContent = country;// Priskiriamos kitos reikšmės.
    capitalName.textContent = countries[country];

    newRow.appendChild(index);// Elementai prisegami prie reikiamų elementų.
    newRow.appendChild(countryName);
    newRow.appendChild(capitalName);

    countryTable.appendChild(newRow);
    indexValue += 1;//Indekso vertė pakeliama 1
}

//Uzduotis 8



const countries2 = {
    lt: ["Lietuva", "Vilnius"],
    lv: ["Latvija", "Ryga"],
    ee: ["Estija", "Talinas"],
    be: ["Belgija", "Briuselis"],
    dk: ["Danija", "Kopenhaga"],
    fr: ["Prancūzija", "Paryžius"],
    de: ["Vokietija", "Berlynas"],
    pt: ["Portugalija", "Lisabona"],
    pl: ["Lenkija", "Varšuva"],
    cz: ["Čekija", "Praha"],
    gr: ["Graikija", "Atėnai"],
    it: ["Italija", "Roma"],
    at: ["Austrija", "Viena"]
};

let country2Table = document.getElementById('task8');//Pasirenkame elementą kuriame bus vaizduojama lentelė.

for (let country in countries2) { //Paleidžiame ciklą, kuriuo einame per visus raktus ir vertes objekte.

    let newRow = document.createElement('tr'), //Sukuriame naują eilutę informacijai atvaizduoti.
        countryCode = document.createElement('td'),// Stulpelio elementas šalies kodui
        countryName = document.createElement('td'),// Stulpelio elementas šalies pavadinimui
        capitalName = document.createElement('td');// Stulpelio elementas sostinei

        countryCode.textContent = country.toUpperCase();//Priskiriame šalies kodo reikšmę, ir naudojame metodą, kurias padaro visas raides didžiosiomis.
        countryName.textContent = countries2[country][0];//Priskiriamos kitos reikšmės.
        capitalName.textContent = countries2[country][1];

        
    newRow.appendChild(countryCode);// Elementai prisegami prie reikiamų elementų.
    newRow.appendChild(countryName);
    newRow.appendChild(capitalName);

    country2Table.appendChild(newRow);
};