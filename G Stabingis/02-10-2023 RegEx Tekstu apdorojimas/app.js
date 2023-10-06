//Uzduotis 1

function elementSearch(element, tag, attribute, result) { //Sukuriame funkciją, kuri priima keturis argumentus: elementą kuriame vykdysime paiešką, tag'ą kurio ieškosime, atributą kurio vertę ištrauksime, ir masyvą kuriame saugosime rezultatą. 

    for (let child of element.children) { //Su ciklu einame per visus vaikinius elementus ir tikriname ar jų tag'as atitinka paduoto tag argumento vertę.
        if (child.tagName == tag) { //Jei atitikmuo rastas, 
            result.push(child.getAttribute(attribute)); //Šio rasto elemento href atributo vertė yra keliama į nurodytą masyvą.
        } 
        
        elementSearch(child, tag, attribute, result); //Naudojant rekursiją, yra iškviečiama ta pati funkcija, šį kart kaip tiriamąjį elementą paduodant vaikinį elementą, taip einant gylyn į DOM elementus.
    }
};

let taskOneText = document.getElementById('task1');//Nurodome elementą, kuriame ieškosime.
let aTag = 'A';//Nurodome elemento tag'ą kurio ieškosime.
let hrefAttribute = 'href'; //Nurodome atributą kurio ieškosime.
let linkList = []; //Sukuriame masyvą, kuriame saugosime rezultatą.

elementSearch(taskOneText, aTag ,hrefAttribute, linkList); //Funkcija paleidžiama.

//Atvaizduojame rezultatą.
const taskOneResultDisplay = document.getElementById('task1result');
taskOneResultDisplay.innerHTML = linkList.join('<br>');





//Uzduotis 2

let taskTwoText = document.getElementById('task2').innerHTML; //Pasirenkame elementą kuriame ieškosime.

//Ši RegEx išraiška ieško teksto kuris prasideda <a ir gali turėti tuščio balto ploto. 
//Kol nepasiekia simbolio > ieško eilutės kuri prasideda href=" 
//ir atskiroje grupėje grąžina visą tekstą kuris yra iki simbolio ' " '.
let hrefExpression = /<a\s+[^>]*href="([^"]*)"[^>]*>/g;

let hrefValues = [];//Masyvas kuriame saugosime rezultatą.

let match; //Sukuriame kintamąjį, kuriame bus saugoma kiekvino paieškos iteracijos rezultato vertė.

while ((match = hrefExpression.exec(taskTwoText)) !== null) { //Paleidžiame while ciklą, kuris ieškos atitikmenų tol, kol rezultatas nebus null.
    //Kiekvieno rasto atitikmens vertė esanti pirmame indekse 
    //(kadangi ieškomas atitikmuo išskirtas į grupę skliausteliais() 
    //saugomas pirmame indekse) ir įkeliama į masyvą kuriame laikomi rezultatai).
    hrefValues.push(match[1]);
}
//Atvaizduojame rezultatą.
const taskTwoResultDisplay = document.getElementById('task2result');
taskTwoResultDisplay.innerHTML = hrefValues.join('<br>');





//Uzduotis 3

let taskThreeContent = document.getElementById('task3'); //Pasirenkame elementą, kuriame vykdysime paiešką.
let imageTag = 'IMG'; //Nurodome elemento pavadinimą, kurio ieškosime.
let srcAttribute = 'src'; //Nurodome atributo pavadinimą, kurio vertės ieškosime.
let imgList = []; //Sukuriame masyvą, kuriame laikysime rezultatą.

elementSearch(taskThreeContent, imageTag, srcAttribute, imgList); //Panaudojame pirmoje užduotyje aprašytą funkciją.

const taskThreeResultDisplay = document.getElementById('task3result');

//Ciklo pagalba atvaizduojame rezultatą sąrašo pavidalu.
for (let image of imgList) {
    let li = document.createElement('li');
    li.innerHTML = image;
    taskThreeResultDisplay.appendChild(li);
};





//Uzduotis 4

let taskFourText = document.getElementById('task4').innerHTML; //Pasirenkame elementą, kuriame vykdysime paiešką.
//Ši RegEx išraiška ieško teksto kuris prasideda <img ir gali turėti tuščio balto ploto. 
//Kol nepasiekia simbolio > ieško eilutės kuri prasideda src=" 
//ir atskiroje grupėje grąžina visą tekstą kuris yra iki simbolio ' " '.
let imgExpression = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;

let imgValues = []; //Masyvas, kuriame saugosime rezultatus.

let matchTwo; //Sukuriame kintamąjį, kuriame bus saugoma kiekvino paieškos iteracijos rezultato vertė.

while ((matchTwo = imgExpression.exec(taskFourText)) !== null) {//Paleidžiame while ciklą, kuris ieškos atitikmenų tol, kol rezultatas nebus null.
    //Kiekvieno rasto atitikmens vertė esanti pirmame indekse 
    //(kadangi ieškomas atitikmuo išskirtas į grupę skliausteliais() 
    //saugomas pirmame indekse) ir įkeliama į masyvą kuriame laikomi rezultatai).
    imgValues.push(matchTwo[1]);
}

const taskFourResultDisplay = document.getElementById('task4result');
//Ciklo pagalba atvaizduojame rezultatą sąrašo pavidalu.
for (let image of imgValues) {
    let li = document.createElement('li');
    li.innerHTML = image;
    taskFourResultDisplay.appendChild(li);
};





//Uzduotis 5

let taskFiveText = document.getElementById('task5').innerText; //Pasirenkame elementą, kuriame vykdysime paiešką.
//Ši RegEx išraiška ieško teksto kuris prasideda raide a, toliau turi žodinių simbolių, ir baigiasi tais žodiniais simboliais. 
let startWithAExpression = /\ba\w*\b/g;

let startWithAValues = []; //Masyvas kuriame laikysime atsakymą.

let matchStartWithA; //Sukuriame kintamąjį, kuriame bus saugoma kiekvino paieškos iteracijos rezultato vertė.

while ((matchStartWithA = startWithAExpression.exec(taskFiveText)) !== null) { //Paleidžiame while ciklą, kuris ieškos atitikmenų tol, kol rezultatas nebus null.
    //Kiekvieno rasto atitikmens vertė esanti nuliniame indekse yra įdedama į rezultatų masyvą.
    startWithAValues.push(matchStartWithA[0]);
};
//Atvaizduojame rezultatą.
const taskFiveResultDisplay = document.getElementById('task5result');
taskFiveResultDisplay.innerText = startWithAValues.join(', ');





//Uzduotis 6

let taskSixDisplayElement = document.getElementById('task6'); //Pasirenkame elementą, kuriame vykdysime paiešką.
let taskSixText = taskSixDisplayElement.textContent; //Pasirenkame nurodyto elemento tekstą.
//Ši RegEx išraiška ieško teksto kuris prasideda raide m, toliau turi žodinių simbolių, ir baigiasi tais žodiniais simboliais. 
let startWithMExpression = /\bm\w*\b/gi;

//Naudodami replace() metodą, surandame visus atitikmenis pagal RegEx išraišką,
//ir jiems pritaikome callback funkciją, kuri rastą žodį grąžina su papildomu <strong> html tag'u.
let highlightedText = taskSixText.replace(startWithMExpression, (word) => {
    return `<strong>${word}</strong>`;
});
//Pasirinkto elemento tekstą pakeičiame modifikuotu - paryškintais žodžiais tekstu.
taskSixDisplayElement.innerHTML = highlightedText;





//Uzduotis 7

let taskSevenDisplayElement = document.getElementById('task7'); //Pasirenkame elementą, kuriame vykdysime paiešką.
let taskSevenText = taskSevenDisplayElement.textContent; //Pasirenkame nurodyto elemento tekstą.
//Ši RegEx išraiška ieško teksto kuris prasideda raide t, toliau turi žodinių simbolių, ir baigiasi tais žodiniais simboliais. 
let startWithTExpression = /\bt\w*\b/gi;

//Naudodami replace() metodą, surandame visus atitikmenis pagal RegEx išraišką,
//ir jiems pritaikome callback funkciją, kuri rastą žodį grąžina su papildomu <strong> html tag'u, bei rastam žodžiui pritaiko toUpperCase() metodą.
let highAndUpperText = taskSevenText.replace(startWithTExpression, (word) => {
    return `<strong>${word.toUpperCase()}</strong>`;
});
//Atvaizduojame rezultatą.
taskSevenDisplayElement.innerHTML = highAndUpperText;





//Uzduotis 8

let emailAddress = document.getElementById('task8text').textContent; //Surandame emailą.
const taskEightResultDisplay = document.getElementById('task8result'); //Pasirenkame kur bus atvaizduosime rezultatą.

//Ši RegEx išraiška skanuoja tekstą nuo pačios pradžios, 
//į pirmą grupę išskiria visus simbolius esančius iki @ simbolio, 
//į antrą grupę išskiria visus simbolius esančius po @ simbolio. 
const userAndDomainExpression = /^([^@]+)@([^@]+)/;

let emailParts = userAndDomainExpression.exec(emailAddress); 
//Kadangi exec() metodas grąžina masyvą, 
//kuriame nulinis indeksas yra visas paieškos atitikmuo - be grupavimo, 0 indeksas mums yra nereikalingas.
emailParts.shift(); //Shift metodas panaikina vertę esančią 0 indekse ir perslenka kitas vertes per vieną atgal.
//Kadangi likusios vertės yra tik mums reikalingos, paleidžiame ciklą kuris atvaizduoja informaciją.
for (let part of emailParts) {
    let li = document.createElement('li');
    li.textContent = part;
    taskEightResultDisplay.appendChild(li);
};





//Uzduotis 9

let link = document.getElementById('link').textContent; //Pasirenkame elementą kuriame yra nuoroda textiniu formatu.
//Ši RegEx išraiška skanuoja tekstą nuo pačios pradžios iki kol yra pasiekiamas ' : ' simbolis.
let protocolExpression = /^[^:]+/;
let protocol = protocolExpression.exec(link);

//Ši RegEx išraiška skanuoja tekstą pradedant '//', 
//praleidžia viską kas nėra taškas arba '/' iki taško, 
//ir ieško to kas nėra taškas arba '/'.
let domainExpression = /\/\/(?:[^.\/]+\.)*([^.\/]+\.[^.\/]+)/;
let domain = domainExpression.exec(link);

//Ši RegEx išraiška skanuoja tekstą pradedant '//',
//ir ieško to kas yra iki pirmojo taško.
let subDomainExpression = /\/\/([^.\/]+)./;
let subDomain = subDomainExpression.exec(link);

//Ši RegEx išraiška skanuoja tekstą pradedant '//', ir į atskirą grupę išskiria vietą kur prasideda
//pirmasis '/'. Įtraukia tekstą esantį tarp pirmojo ir paskutiniojo '/'.
let catalogueExpression = /\/\/[^\/]+(\/[^*]+\/)/;
let catalogue = catalogueExpression.exec(link);

//Ši RegEx išraiška skanuoja tekstą pradedant paskutiniu '/', ir randa tekstą kuris yra iki '?' simbolio.
let fileExpression = /\/(?!.*\/)+([^?]+)/;
let file = fileExpression.exec(link);

//Ši RegEx išraiška skanuoja tekstą einantį po '?' simbolio ir suranda viską kas neturi klaustuko simbolio.
let parameterExpression = /\?([^?]+)/;
let parameters = parameterExpression.exec(link);

//Gautus rezultatus sudedame į objektą ir suteikiame raktinius pavadinimus.
let urlSegments = {
    Protocol: protocol[0],
    Domain: domain[1],
    SubDomain: subDomain[1],
    Catalogue: catalogue[1],
    File: file[1],
    Parameters: parameters[1]
};

const taskNineResultDisplay = document.getElementById('task9result');

//Atvaizduojame rezultatą per ciklą naudojant rakto pavadinimus ir vertes, html sąrašo pavidalu.
for (let segment in urlSegments) {
    let li = document.createElement('li');
    li.textContent = `${segment}: ${urlSegments[segment]}`
    taskNineResultDisplay.appendChild(li);
}