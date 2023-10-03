// Uzduotis 1: Parašyti ir panaudoti keletą kartų funkcijas kurios konvertuotų:

// mylios -> kilometrus

function milesToKilometers(miles) {
    if (isNaN(Number(miles)) || miles == ''){ //Patikriname ar įvesta vertė nėra skaičius arba yra tuščias tekstas.
        return 'Please enter a valid number'; //Sąlygai atitikus grąžiname žinutę, kuri prašo įvesti skaičių.
    };

    const conversion = Number(miles) * 1.609344;//Duotą mylių skaičių padauginame iš vienos mylios kilometro atitikmenį.
    return `${miles} miles is ${conversion.toFixed(2)} kilometers`;//Skaičius po kablelio, suapvaliname iki šimtųjų ir pateikiame atsakyme.
    
};

const miInput = document.getElementById('miles'); //Kintamasis mylių įvedimui.
const miToKmBtn = document.getElementById('mi_to_km_btn');//Kintamasis konversijos veiksmo mygtukui.
const miToKmResult = document.getElementById('mi_to_km_result');//Elementas, kuriame vaizduosime atsakymą.

miToKmBtn.addEventListener('click', () => { //Mygtukui uždedame įvykio klausytoją, kuris paleidžia prieš tai aprašytą funkciją.
    miToKmResult.textContent = milesToKilometers(miInput.value);//Rezultato elemento viduje vaizduosime funkcijos grąžintą rezultatą. Funkcijai paduodamas vartotojo įvestas skaičius.
})

// kilometrai -> mylias

// Kadangi sekanti funkcija veikia visiškai analogiškai, kaip buvo aprašyta prieš tai ėjusi funkcija, šio kodo bloko nekomentuosiu.

function kilometersToMiles(km) {
    
    if (isNaN(Number(km)) || km == '') {
        return 'Please enter a valid number';
    };

    const conversion = km * 0.621371192; //Skiriasi tik proporcija.
    return `${km} km is ${conversion.toFixed(2)} miles`;
    
};

const kmInput = document.getElementById('kilometers');
const kmToMiBtn = document.getElementById('km_to_mi_btn');
const kmToMiResult = document.getElementById('km_to_mi_result');

kmToMiBtn.addEventListener('click', () => {
    kmToMiResult.textContent = kilometersToMiles(kmInput.value);
});

// laikas, greitis -> kelias

function distanceFromTimeAndSpeed(time, speed) {

    if (isNaN(Number(speed)) || speed == '') {
        return 'Please enter a valid speed value.';
    } else if (time == '') {
        return 'Please enter a valid time value.';
    };
        
    let [hours, minutes] = time.split(':').map(Number);
    let timeInHours = hours + minutes / 60;
    let distance = speed * timeInHours;
    
    return `The distance travelled will be ${distance.toFixed(2)} kilometers`;
};

const time = document.getElementById('time');
const speed = document.getElementById('speed');
const distanceBtn = document.getElementById('distance_btn');
const distanceResult = document.getElementById('distance_result');

distanceBtn.addEventListener('click', () => {
    distanceResult.textContent = distanceFromTimeAndSpeed(time.value, speed.value);
});

// temperatūra kelvinais -> temperatūra celsijais


function kelvinToCelcius(kelvin) {
    if (isNaN(Number(kelvin)) || kelvin == '') {
        return 'Please enter a valid Kelvin value';
    }
    const conversion = Number(kelvin) - 272.15;
    return `${kelvin} °K is ${conversion.toFixed(2)} °C`
};

const kelvinInput = document.getElementById('kelvin');
const kToCBtn = document.getElementById('k_to_c_btn');
const kToCResult = document.getElementById('k_to_c_result');

kToCBtn.addEventListener('click', () => {
    kToCResult.textContent = kelvinToCelcius(kelvinInput.value);
});

//srovės stipris, įtampa -> galia

function getElectricalPower(amps, voltage) {
    if (isNaN(Number(amps)) || amps == '') {
        return 'Please enter a valid amperage value';
    } else if (isNaN(Number(voltage)) || voltage == '') {
        return 'Please enter a valid voltage value';
    }

    const result = amps * voltage;
    return `With ${amps}A and ${voltage}V you will get ${result}W of power.`;
};

const ampInput = document.getElementById('current');
const voltageInput = document.getElementById('voltage');
const powerBtn = document.getElementById('power_btn');
const powerResult = document.getElementById('power_result');

powerBtn.addEventListener('click', () => {
    powerResult.textContent = getElectricalPower(ampInput.value, voltageInput.value);
});

//varža, įtampa -> srovės stipris

function getElectricalCurrent(resistance, voltage) {
    if (isNaN(Number(resistance)) || resistance == '') {
        return 'Please enter a valid resistance value';
    } else if (isNaN(Number(voltage)) || voltage == '') {
        return 'Please enter a valid voltage value';
    }
    const result = voltage / resistance;
    return `With ${resistance}Ω and ${voltage}V you will get ${result.toFixed(2)}A of current.`;
};

const resistanceInput = document.getElementById('resistance');
const voltageInput2 = document.getElementById('voltage2');
const currentBtn = document.getElementById('current_btn');
const currentResult = document.getElementById('current_result');

currentBtn.addEventListener('click', () => {
    currentResult.textContent = getElectricalCurrent(resistanceInput.value, voltageInput2.value);
});