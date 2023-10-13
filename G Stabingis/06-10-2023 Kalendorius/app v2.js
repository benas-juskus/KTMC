const calendarCard = document.getElementById('table'); //Pasirenkame elementą, kuriame bus atvaizduojamas kalendorius.

function kalendorius (metai, menuo, vertikalus=false) {

    calendarCard.innerHTML = ''; //Išvalome elemento vidų (Reikalingas keičiant trečiojo parametro "vertikalus" naudojimo atveju, kad buvęs kalendoriaus atvaizdavimas būtų išvalytas).

    let header = document.createElement('thead'); //Sukuriame kalendoriaus viršutinę dalį, kur bus atvaizduoti metai ir mėnesio pavadinimas.
    let headerRow = document.createElement('tr');
    let yearAndMonthDisplay = document.createElement('th');
    yearAndMonthDisplay.setAttribute('colspan', 7);
    yearAndMonthDisplay.textContent = `${metai} ${menesioPavadinimas(menuo)}`; //Į kalendoriaus header'į, įdedame metus iš funkcijai pateikto argumento, ir mėnesio pavadinimą, funkcijos menesioPavadinimas() pagalba.
    header.classList.add('header');
    header.appendChild(headerRow);
    headerRow.appendChild(yearAndMonthDisplay);
    calendarCard.appendChild(header);

    let tBody = document.createElement('tbody'); //Sukuriame table elemento dalį <tbody>, kurioje bus atvaizduotos mėnesio dienos.
    

    let firstDay = pirmaDiena(metai, menuo); //Sukuriame kintamąjį, kuris funkcijos pirmaDiena() pagalba, paduos pirmos mėnesio savaitės dienos numerį.
    let numberOfDays = dienuSkaicius(metai, menuo); //Sukuriame kintamąjį, kuris funkcijos dienuSkaicius() pagalba, paduos reikiamo mėnesio dienų skaičių.
    let previousMonthNumberOfDays = dienuSkaicius(metai, menuo - 1); //Sukuriame kintamąjį, kuris paduos prieš tai buvusio mėnesio dienų skaičių.

    const numberOfWeeks = Math.ceil((numberOfDays + firstDay) / 7); //Sukuriame kintamąjį, kuris paskaičiuoja kiek eilučių mums reikės šio mėnesio savaitėms atvaizduoti.

    let counter = 1; //Kintamasis, kurį naudosime skaičiuoti generuojamas atvaizdavimui pasirinkto mėnesio dienas.
    let previousMonthFinalWeekCounter = previousMonthNumberOfDays - firstDay + 1; //Kintamasis, kurį naudosime skaičiuoti prieš tai buvusio mėnesio, paskutinės savaitės dienas.
    let nextMonthCounter = 1; //Kintamasis, kurį naudosime skaičiuoti kito mėnesio pirmąsias dienas.
    let weekdays = savaitesDienos();

    if (vertikalus == true) { //Jei parametras vertikalus gauna argumentą true:

        for (let a = 0; a < 7; a++) { //Su ciklu sugeneruojame 7 eilutes savaitės dienoms ir iš karto prisegame juos prie tBody elemento.
            let row = document.createElement('tr');
            tBody.appendChild(row);
        };
    
        let tBodyRows = tBody.children; //Sukuriame kintamąjį kuris leis mums eiti per tBody vaikinius elementus.
        let rowCounter = 0; //Kintamasis, kuris padės pereiti per savaitės dienų pavadinimų masyvą.
    
        for (let row of tBodyRows) {
            row.appendChild(weekdays[rowCounter]); //Ciklo pagalba pereiname per kiekvieną sukurtą eilutę ir įdedame po vaikinį elementą su savaitės dienos pavadinimu.
            rowCounter++;
        }
    
        for (let week = 0; week <= numberOfWeeks; week++) { //Paleidžiame ciklą, kuris kurs savaitės kolonas, tol kol bus mažesnis nei nurodytas kolonų skaičius kintamajame numberOfRows.
            for (let day = 0; day < 7; day++) { //Ciklas, kuris kurs savaitės dienas.

                let td = document.createElement('td'); //Sukuriame dienos elementą kuriame bus vaizduojamas savaitės dienos skaičius.
    
                if (week == 1 && day < firstDay) { //Jei einame per pirmąją savaitės ciklo iteraciją, ir kintamojo day vertė yra mažesnė nei pirmosios dienos skaičiaus,
                    td.textContent = previousMonthFinalWeekCounter; //šiam elementui bus suteikiam vertė iš prieš tai buvusio mėnesio paskutinės savaitės dienų verčių kintamojo previousMonthFinalWeekCounter.
                    td.classList.add('muted'); //Taip pat bus pritaikyta stiliaus klasė, aprašyta style.css dokumente.
                    tBodyRows[day].appendChild(td); //Elementą prisegame į atitinkamą eilutę.
                    previousMonthFinalWeekCounter++; //Skaitiklį padidiname vienetu.
                } else if (week == 1 && day >= firstDay) { //Jei einame per pirmos savaitės iteraciją ir diena yra lygi arba didesnė nei pirmos dienos kitamojo vertė.
                    td.textContent = counter; //Elementui suteikiame skaitioklio dienos skaičiaus vertę atvaizdavimui.
                    tBodyRows[day].appendChild(td); //Elementą prisegame į atitinkamą eilutę.
                    counter++; //Skaitiklį padidiname vienetu.
                } else if (week > 1 && counter <= numberOfDays) { //Jei savaitė yra nebe pirma, or pasirinkto mėnesio skaitiklis yra mažesnis arba lygus dienų skaičiui,
                    if (siandien(metai, menuo, counter)) { //Funkcijos siandien() pagalba, patikriname ar generuojos dienos data sutampa su šiandienos data.
                        td.classList.add('today'); //Sąlygai atitikus, pridedamas stiliaus klasės atributas.
                    }
                    td.textContent = counter; //Elementui suteikiame dienos skaičiaus vertę atvaizdavimui.
                    tBodyRows[day].appendChild(td); //Elementą prisegame į atitinkamą eilutę.
                    counter++; //Skaitiklį padidiname vienetu.
                } else if (counter > numberOfDays) { //Jei skaitiklis jau viršija dienų skaičių,
                    td.textContent = nextMonthCounter; //Pritaikome vertę iš skaitiklio skirto skaičiuoti kito mėnesio pirmosios savaitės dienas.
                    td.classList.add('muted'); //Taip pat bus pritaikyta stiliaus klasė, aprašyta style.css dokumente.
                    tBodyRows[day].appendChild(td); //Elementą prisegame į atitinkamą eilutę.
                    nextMonthCounter++; //Skaitiklį padidiname vienetu.
                }
            }
        }
    } else if (vertikalus == false) {

        let weekHeader = document.createElement('tr');
        for (let day of weekdays) {
            weekHeader.appendChild(day);
        }
        
        header.appendChild(weekHeader);

        for (let week = 0; week < numberOfWeeks; week++) { //Paleidžiame ciklą, kuris kurs savaitės eilutes, tol kol bus mažesnis nei nurodytas eilučių skaičius kintamajame numberOfRows.
            let tr = document.createElement('tr'); //Sukuriame elementą skirtą table eilutei atvaizduoti.
    
            for (let day = 0; day < 7; day++) { //Sekantis ciklas generuoja dienas priklausomai nuo sąlygų esančių žemiau:
    
                let td = document.createElement('td'); //Sukuriame <td> elementą kuriame bus atvaizduojamas mėnesio dienos skaičius.
    
                if (week == 0 && day < firstDay) { //Jei einame per pirmąją savaitės ciklo iteraciją, ir kintamojo day vertė yra mažesnė nei pirmosios dienos skaičiaus,
                    td.textContent = previousMonthFinalWeekCounter; //šiam elementui bus suteikiam vertė iš prieš tai buvusio mėnesio paskutinės savaitės dienų verčių kintamojo previousMonthFinalWeekCounter.
                    td.classList.add('muted'); //Taip pat bus pritaikyta stiliaus klasė, aprašyta style.css dokumente.
                    previousMonthFinalWeekCounter++; //Skaitiklį padidiname vienetu.
                } else if (counter <= numberOfDays) { //Jei pasirinkto mėnesio skaitiklis yra mažesnis arba lygus dienų skaičiui,
                    if (siandien(metai, menuo, counter)) { //Funkcijos siandien() pagalba, patikriname ar generuojos dienos data sutampa su šiandienos data.
                        td.classList.add('today'); //Sąlygai atitikus, pridedamas stiliaus klasės atributas.
                    }
                    td.textContent = counter; //Elementui suteikiame dienos skaičiaus vertę atvaizdavimui.
                    counter++; //Skaitiklį padidiname vienetu.
    
                } else if (counter > numberOfDays) { //Jei skaitiklis jau viršija dienų skaičių,
                    td.textContent = nextMonthCounter; //Pritaikome vertę iš skaitiklio skirto skaičiuoti kito mėnesio pirmosios savaitės dienas.
                    td.classList.add('muted'); //Pridedame stiliaus klasės atributą.
                    nextMonthCounter++; //Skaitiklį padidiname vienetu.
                }
                
                tr.appendChild(td); //Kiekvieną sugeneruotą mėnesio dienos elementą prisegame prie savaitės eilutės elemento.
            }
    
            tBody.appendChild(tr); //Kiekvieną sugeneruotą savaitės eilutės elementą prisegame prie <tbody> elemento.
    
        }
    }

calendarCard.appendChild(tBody); //Sugeneruotą <tbody> elementą prisegame prie elemento kalendoriui atvaizduoti.

};


function menesioPavadinimas(menuo) {
    let monthName = new Date(1, menuo - 1, 1).toLocaleString('lt-LT', { month: 'long' }); //Mėnesio pavadinimą išgauname pagal atitinkamą Date objekto grąžintą skaičių, ir tada naudojant toLocaleString() metodą, nurodome kad norime gauti ilgąjį mėnesio pavadinimą Lietuvių kalba.
    let smallLetters = monthName.slice(1); //Pasirenkame raides, kurios liks mažosiomis.
    let capFirstLetter = monthName[0].toUpperCase(); //Pasirenkame pirmąją raidę, kuri bus didžioji.
    capitalizedName = capFirstLetter.concat(smallLetters); //Sujungiame į naują žodį, kuris prasidės didžiaja raide.
    return capitalizedName;
};


function savaitesDienos() {
    let weekdays = ['Pr', 'A', 'T', 'K', 'Pe', 'Š', 'S']; //Sukuriame masyvą, kuriame saugomi savaitės dienų pavadinimai eilės tvarka.
    let headerElements = [];

    for (let day of weekdays) { //Ciklo pagalba kiekvieną masyvę esančią reikšmę,
        let daySquare = document.createElement('th'); //įtalpiname į sukurtą <th> elementą.
        daySquare.textContent = day;
        headerElements.push(daySquare); //Sukurtus elementus prisegame į lentelės eilutės elementą.
    };
    
    return headerElements; //Grąžiname sugeneruotą lentelės eilutę su mėnesių pavadinimais.
};

function pirmaDiena(metai, menuo) {
    //Naudodami Date().getDay() objektą ir metodą, gaunamame savaitės dienos skaičių.
    return (new Date(metai, menuo - 1, 1).getDay() + 6) % 7; 
    //Prie šio skaičiaus pridedame 6 ir patikriname liekaną padalijus iš 7. 
    //Tokiu būdu grąžintas skaičius pakeis savaitės dienų skaičiavimo pradžią (0 bus Pirmadienis, o 6 bus Sekmadienis.)
};

function dienuSkaicius(metai, menuo) {
    return new Date(metai, menuo, 0).getDate(); //Įvesta diena 0, reiškia paskutinę prieš tai, nei įvesto mėnesio diena. Tokiu būdu gauname mėnesio dienų skaičių.
};

function siandien(metai, menuo, diena) {
    let date = new Date();
    let year = date.getFullYear(); //Gauname esamus metus
    let month = date.getMonth(); //Gauname esamą mėnesį
    let day = date.getDate(); //Gauname šiandienos datą.

    return metai == year && menuo == month + 1 && diena == day; //Palyginame ir grąžiname šiandienos Date() duomenis su įvestais funkcijos argumentuose.
};

let thisYear = new Date().getFullYear();
let thisMonth = new Date().getMonth() + 1;
kalendorius(thisYear, thisMonth); //Paleidžiame funkciją.

let verticalSwitch = document.getElementById('v_switch');

verticalSwitch.addEventListener('change', () => {
    let isVertical = verticalSwitch.checked;
    kalendorius(thisYear, thisMonth, isVertical);
})
