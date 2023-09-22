// UZDUOTIS 1

// Sukuriame kintamaji cardForCar, kuris pasirenka elementa, 
// kuriame rodysime masyvo informacija.
let cardForCar = document.getElementById('task1');

// Sukuriame masyva su reikiama automobilio info.
let car = [
    'Alfa-romeo',
    '156',
    '2004',
    'Diesel'
];

// cardForCar kintamojo indikuotame elemente, 
// nurodome isvesti masyvo informacija, 
// paversta i tekstini (string) formata.
cardForCar.textContent = car.join(', ');

// UZDUOTIS 2

// Sukuriame masyva su kontaktine informacija.
let contact = [
    'Benas',
    'Juskus',
    'benas.juskus@stud.ktmc.lt',
    '8686868686',
    'Gatves g. 11 - 243, Klaipeda',
    '94000',
    'Labai megstu viska komentuoti :).'
];

// Sukuriame masyva kuriame surasyti elementu id pavadinimai, 
// i kuriuos bus talpinama kontako informacija.
let elementId = [
    'fname', 
    'lname', 
    'email', 
    'phone', 
    'address', 
    'postcode', 
    'comment'
];

// Paleidziame cikla, kuris suranda elementus, kuriu ID atitinka pavadinimus pries tai apibreztame masyve,
// ir i juos iterpia informacija is contact masyvo pagal indeksu eiles tvarka.
for (let i = 0; i < elementId.length; i++) { 
  let element = document.getElementById(elementId[i]);
  element.textContent = contact[i];
}

// UZDUOTIS 3


// Sukuriame objekta su kontakto informacija.
let contactObj = {
    firstName: 'Marlon',
    lastName: 'Brando',
    e_mail: 'm.brando@stud.ktmc.lt',
    telephone: '8686868686',
    person_address: 'Gatves g. 11 - 243, Klaipeda',
    zipcode: '',
    the_comment: 'Komentarų niekada nebus per daug.'
};

// HTML faile, laukelių, į kuriuos bus talpinama kontakto informacija id, 
// atitinka kontakto objekto raktų pavadinimus.
// Paleidžiamas ciklas kuris pereina per objekto raktus.
for (let data in contactObj) {
    let element = document.getElementById(data);// Pagal objekto rakto ir elemento id pavadinimus surandamas atitinkamas elementas į kurį bus talpinama informacija.
    
    if (!contactObj[data] || contactObj[data] == '' || contactObj[data] === true) {   //If sąlyga patikrina are duomenys objekte yra neapibrėžti (undefined, null), yra tuščias tekstas, ar yra boolean true reikšmė.
        element.textContent = 'N/A';  //Jei viena iš sąlygų atitinka, šiam elementui pritaikoma vėrtė nurodanti, kad informacijos šiame rakte nėra.
        continue;  //Continue naudojamas, kad ciklas praleistų likusią dalį ir šoktų į sekančią iteraciją.
    }
    
    element.textContent = contactObj[data];  //Sąlygai neatitikus duomenys priskiriami elementui ir yra atvaizduojami.
}

// UZDUOTIS 4

let item = {
    itemName: 'MacBook 15',
    price: 'EUR 1299.00',
    description: 'macOS is the operating system that powers every Mac.',
    image: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'],
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-apple-macbook-pro-mneh3ze-a-us-apple-m2-8-gb-256-gb-13-3/n0f7?cat=5ei&index=3&_gl=1*5qatyt*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
};

const noImage = 'images/No-Image-Placeholder.svg.png';
let images = document.getElementById('images');

for (let i in item) { //Paleidžiame ciklą, kuris pereis visus raktus ir jų vertes item objekte.

    let element = document.getElementById(i); //Pagal objekto rakto pavadinimą surandamas atitinkamai pavadintas elementas.

    if (i == 'link') { //If sąlyga patikrina ar raktas atitinka nuorodos pavadinimą.
        if (!item[i] || item[i] == '' || item[i] === true) {//Patikrinama ar rakte nėra duomenų.
            element.textContent = 'N/A'; //Jei viena iš sąlygų atitinka, šiam elementui pritaikoma vėrtė nurodanti, kad informacijos šiame rakte nėra.
            continue; //Continue naudojamas, kad ciklas praleistų likusią dalį ir šoktų į sekančią iteraciją.
        }
        element.setAttribute('href', item[i]); //Kitu atveju link rakto duomenys pritaikomi į nuorodos href atributą.
        continue; 
    }

    if (i == 'image') { //If Sąlyga patikrina ar raktas atitinka paveiksleliu masyvo pavadinima.
        if (!item[i] || item[i] == '' || item[i] === true) { //Patikrinama ar rakte nėra duomenų.
            let newImg = document.createElement('img'); //Jei sąlyga atitinka, sukuriamas naujas <img> elementas
            newImg.setAttribute('src', noImage); // šiam elementui priskiriamas atributas "src" kurio vertė yra nuoroda į tuščią nuotrauką.
            images.appendChild(newImg);//Naujasis elementas įsegamas į #images elementą.
            continue;
        }
        for (let image of item[i]) { //Kitu atveju jei duomenys egzistuoja.
            let newImg = document.createElement('img'); //Sukuriamas naujas <img> elementas
                newImg.setAttribute('src', image);// šiam elementui priskiriamas atributas "src" kurio vertė yra viena iš nuorodų esančių image rakto masyve.
                images.appendChild(newImg); //Naujasis elementas įsegamas į #images elementą.
        }
        continue; //Continue naudojamas, kad ciklas praleistų likusią dalį ir šoktų į sekančią iteraciją.
    }

    if (!item[i] || item[i] == '' || item[i] === true) {   //If sąlyga patikrina are duomenys objekte yra neapibrėžti (undefined, null), yra tuščias tekstas, ar yra boolean true reikšmė.
        element.textContent = 'N/A';  //Jei viena iš sąlygų atitinka, šiam elementui pritaikoma vėrtė nurodanti, kad informacijos šiame rakte nėra.
        continue;  //Continue naudojamas, kad ciklas praleistų likusią dalį ir šoktų į sekančią iteraciją.
    }
    
    element.textContent = item[i]; //Kitais atvejais objekto vertės įkeliamos į atitinkamus elementus.

}

