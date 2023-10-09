const calendarCard = document.getElementById('table'); //Pasirenkame elementą, kuriame bus atvaizduojamas kalendorius.

function kalendorius (metai, menuo) {
    let header = document.createElement('thead'); //Sukuriame kalendoriaus viršutinę dalį, kur bus atvaizduoti metai ir mėnesio pavadinimas.
    let headerRow = document.createElement('tr');
    let yearAndMonthDisplay = document.createElement('th');
    yearAndMonthDisplay.setAttribute('colspan', 7);
    yearAndMonthDisplay.textContent = `${metai} ${menesioPavadinimas(menuo)}`; //Į kalendoriaus header'į, įdedame metus iš funkcijai pateikto argumento, ir mėnesio pavadinimą, funkcijos menesioPavadinimas() pagalba.
    header.classList.add('header');
    header.appendChild(headerRow);
    header.appendChild(savaitesDienos()); //Taip pat įsegame savaitės dienų pavadinimus, funkcijos savaitesDienos() pagalba.
    headerRow.appendChild(yearAndMonthDisplay);
    calendarCard.appendChild(header);

    let tBody = document.createElement('tbody'); //Sukuriame table elemento dalį <tbody>, kurioje bus atvaizduotos mėnesio dienos.

    

    let firstDay = pirmaDiena(metai, menuo); //Sukuriame kintamąjį, kuris funkcijos pirmaDiena() pagalba, paduos pirmos mėnesio savaitės dienos numerį.
    let numberOfDays = dienuSkaicius(metai, menuo); //Sukuriame kintamąjį, kuris funkcijos dienuSkaicius() pagalba, paduos reikiamo mėnesio dienų skaičių.
    let previousMonthNumberOfDays = dienuSkaicius(metai, menuo - 1); //Sukuriame kintamąjį, kuris paduos prieš tai buvusio mėnesio dienų skaičių.

    const numberOfRows = Math.ceil((numberOfDays + firstDay) / 7); //Sukuriame kintamąjį, kuris paskaičiuoja kiek eilučių mums reikės šio mėnesio savaitėms atvaizduoti.

    let counter = 1; //Kintamasis, kurį naudosime skaičiuoti generuojamas atvaizdavimui pasirinkto mėnesio dienas.
    let previousMonthFinalWeekCounter = previousMonthNumberOfDays - firstDay + 1; //Kintamasis, kurį naudosime skaičiuoti prieš tai buvusio mėnesio, paskutinės savaitės dienas.
    let nextMonthCounter = 1; //Kintamasis, kurį naudosime skaičiuoti kito mėnesio pirmąsias dienas.
    

    for (let week = 0; week < numberOfRows; week++) { //Paleidžiame ciklą, kuris kurs savaitės eilutes, tol kol bus mažesnis nei nurodytas eilučių skaičius kintamajame numberOfRows.
        let tr = document.createElement('tr'); //Sukuriame elementą skirtą table eilutei atvaizduoti.

        for (let day = 0; day < 7; day++) { //Sekantis ciklas generuoja dienas priklausomai nuo sąlygų esančių žemiau:

            let td = document.createElement('td'); //Sukuriame <td> elementą kuriame bus atvaizduojamas mėnesio dienos skaičius.

            if (week === 0 && day < firstDay) { //Jei einame per pirmąją savaitės ciklo iteraciją, ir kintamojo day vertę yra mažesnė nei pirmosios dienos skaičiaus,
                td.textContent = previousMonthFinalWeekCounter; //šiam elementui bus suteikiam vertė iš prieš tai buvusio mėnesio paskutinės savaitės dienų verčių kintamojo previousMonthFinalWeekCounter.
                td.classList.add('muted'); //Taip pat bus pritaikyta stiliaus klasė, aprašyta style.css dokumente.
                previousMonthFinalWeekCounter++; //Skaitiklį padidiname vienetu.
            } else if (counter <= numberOfDays) { //
                if (siandien(metai, menuo, counter)) {
                    td.classList.add('today');
                }
                td.textContent = counter;
                counter++;
            } else if (counter > numberOfDays) {
                td.textContent = nextMonthCounter;
                td.classList.add('muted');
                nextMonthCounter++;
            }
            
            tr.appendChild(td);
        }

        tBody.appendChild(tr);

    }

calendarCard.appendChild(tBody);

};


function menesioPavadinimas(menuo) {
    let monthName = new Date(1, menuo - 1, 1).toLocaleString('lt-LT', { month: 'long' });
    let smallLetters = monthName.slice(1);
    let capFirstLetter = monthName[0].toUpperCase();
    capitalizedName = capFirstLetter.concat(smallLetters);
    return capitalizedName;
};


function savaitesDienos() {
    let weekdays = ['Pr', 'A', 'T', 'K', 'Pe', 'Š', 'S'];
    let headerRow = document.createElement('tr');

    for (let day of weekdays) {
        let daySquare = document.createElement('th');
        daySquare.textContent = day;
        headerRow.appendChild(daySquare);
    };
    
    return headerRow;
};

function pirmaDiena(metai, menuo) {
    return (new Date(metai, menuo - 1, 1).getDay() + 6) % 7;
};


function dienuSkaicius(metai, menuo) {
    return new Date(metai, menuo, 0).getDate(); //Ivesta diena 0, reiskia paskutine pries tai nei ivestas menesio diena.
};

function siandien(metai, menuo, diena) {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return metai == year && menuo == month + 1 && diena == day;
};

kalendorius(2023, 10);