let $toggler = document.getElementById('toggler'),
    $calculator = document.querySelector('.calculator');

if($calculator.classList.contains('dark')) {
  $toggler.querySelector('#light').style.display = 'block';
  $toggler.querySelector('#dark').style.display = 'none';
} else {
  $toggler.querySelector('#light').style.display = 'none';
  $toggler.querySelector('#dark').style.display = 'block';
}

$toggler.addEventListener('click', function() {
  $calculator.classList.toggle('dark');
  
  if($calculator.classList.contains('dark')) {
    $toggler.querySelector('#light').style.display = 'block';
    $toggler.querySelector('#dark').style.display = 'none';
  } else {
    $toggler.querySelector('#light').style.display = 'none';
    $toggler.querySelector('#dark').style.display = 'block';
  }
});

// Kintamųjų dekralavimas:
let calcSmallDisplay = document.querySelector('.calculator-operation'); //Kintamasis operacijos vaizdavimui.
let calcBigDisplay = document.querySelector('.calculator-operation-result'); //Kintamasis vedamo skaičiaus ir rezultato vaizdavimui.
let calculatorButtonWrapper = document.querySelector('.calculator-button-wrapper'); //Kintamasis mygtukų elementui.

let ongoingOperation = []; //Kintamasis, kuriame bus laikoma vedamo skaičiaus vertė.
let firstNumber = ''; //Kintamasis, kuriame laikysime pirmojo skaičiaus vertę.
let secondNumber = ''; //Kintamasis, kuriame laikysime antrojo skaičiaus vertę.
let operator = ''; //Kintamasis, kuriame laikysime veiksmo operatorių.

let divisionBtn = calculatorButtonWrapper.children[1]; //Dalybos mygtuko elementas.
let multiplyBtn = calculatorButtonWrapper.children[2]; //Daugybos mygtuko elementas.
let eraserBtn = calculatorButtonWrapper.children[3];  //Trintuko mygtuko elementas.
let minusBtn = calculatorButtonWrapper.children[7]; //Atimties mygtuko elementas.
let plusBtn = calculatorButtonWrapper.children[11]; //Sudėties mygtuko elementas.
let resultBtn = calculatorButtonWrapper.children[15]; //Rezultato (lygu) mygtuko elementas.
let percentBtn = calculatorButtonWrapper.children[16]; //Procentų mygtuko elementas.
let dotBtn = calculatorButtonWrapper.children[18]; //Taško mygtuko elementas.

let resultWasPressed = false; //Kintamasis, kuriame saugosime boolean vertę, kuri pasakys ar buvo paspaustas rezultato (lygu) mygtukas.


function addZero(num) { //Funkcija, kuri operacijos vaizdavimo eilutėje dedamo skaičiaus priekyje pridės 0, jei vertė su skaičiais po kablelio bus vedama pradedant nuo taško (".").
  if (num[0] == '.') { //Jei pirmasis masyvo elementas yra taškas,
    num.unshift('0'); //į masyvo priekį įdedame nulį.
    return num;
  }
  return num;
}


function mathAction (numOne, operator, numTwo) { //Funkcija matematiniam veiksmui atlikti. Trys parametrai: pirmasis ir antrasis skaičius ir operatorius.
  let result = eval(`${numOne} ${operator} ${numTwo}`); //Rezultatas išvedamas ir grąžinamas atlikus matematinį veiksmą pagal tris pateiktus argumentus.
  return result;
};

function mathLogic(op) { //Funkcija, kuri priklausomai nuo pateiktų duomenų ir kintamųjų būsenų ir reikšmių išves rezultatą.
  if (firstNumber == '' && ongoingOperation.length == 0) { //Sąlyga patikrina ar pirmasis skaičius ir vedamo skaičiaus vertė yra tuščia, ir jei sąlyga atitinka, funkcija nieko negrąžina.
    return; //Reikalinga tam kad nebūtų galima įvesti operatoriaus, kol nėra įvestas bent vienas skaičius.
  }

  if (ongoingOperation[0] == '0' && ongoingOperation[1] != '.') { //Sąlyga patikrina ar vedamo skaičiaus masyve pirmasis elementas yra nulis ir ar po jo nėra kablelio.
    ongoingOperation.shift(); //Sąlygai atitikus, nulis esantis masyvo pradžioje yra ištraukiamas.
    //Reikalinga tam, kad į matematinį veiksmą nebūtų paduotas skaičius su nuliu priekyje kurį JS skaitytų, kaip base-8 skaičių.
  }

  if (operator == '') { //Patikriname ar yra nustatytas operatorius.
    operator = op; //Jei operatoriaus nustatyto dar nėra, operatorius nustatomas pagal pateiktą argumentą.
  }

  if (resultWasPressed == true) { //Patikriname ar buvo paspaustas rezultato mygtukas.
    calcSmallDisplay.innerText = `${firstNumber} ${operator}`; //Jei sąlyga atitinka, į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    resultWasPressed = false; //Atlikus veiksmą rezultato mygtuko būseną grąžiname į false.
  }

  if (firstNumber == '') { //Patikriname ar nebuvo suvestas pirmasis skaičius.
    firstNumber = addZero(ongoingOperation).join(''); //Sąlygai atitikus, vedamo skaičiaus vertė priskiriama pirmojo skaičiaus kintamąjam. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
    operator = op; //Operatoriuj priskiriama paduoto argumento vertė.
    calcSmallDisplay.innerText = `${firstNumber} ${operator}`; //Į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    ongoingOperation = []; //Vedamo skačiaus vertę nustatome į tuščią.

  } else if (firstNumber != '') { //Kita sąlyga, kuri patikrina ar pirmojo skaičiaus vertė nėra tuščia.
    
    if (ongoingOperation.length == 0) { //Sąlyga patikrina ar vedamo skaičiaus masyvas yra tuščias.
      return; //Sąlygai atitikus funkcija sustoja ir nieko negrąžina.
    }
    if (secondNumber == '') { //Sąlyga patikrina ar antrojo skaičiaus vertė yra tuščia. Šis patikrinimas reikalingas, jei būtų naudojamas procento vertės paskaičiavimas antrajam skaičiuj. Tokiu atveju antrojo skaičiaus vertė nebūtų tuščia.
      secondNumber = addZero(ongoingOperation).join(''); //Sąlygai atitikus, vedamo skaičiaus vertė priskiriama antrojo skaičiaus kintamąjam. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
    }

    let result = mathAction(firstNumber, operator, secondNumber); //Paskaičiuojame rezultatą, naudojant prieš tai aprašytą funkciją metematiniam veiksmui atlikti.
    result.toFixed(5); //Skaičius po kablelio suapvaliname iki 5 skaitmenų.
    result = parseFloat(result); //jei skaičiai po kablelio gale turi 0 juos panaikiname.
    if (result.toString().length >= 10) { //Jei rezultatas turi 10 ar daugiau skaitmenų, 
      calcBigDisplay.style.fontSize = '30px'; //Vaizdavimo elemento teksto dydį sumažiname, kad tiltų kalkuliatoriaus rėmo viduje.
    }
    if (result.toString().length > 15) { //Jei rezultatas turi daugiau nei 15 skaitmenų,
      calcBigDisplay.style.fontSize = '20px'; //Vaizdavimo elemento teksto dydį sumažiname dar labiau.
    }
    firstNumber = result; //Rezultato vertę priskiriame pirmąjam skaičiui.
    calcBigDisplay.innerText = result; //Rezultato vertę atvaizduojame rezultato vaizdavimo elemente.
    operator = op; //Operatoriuj priskiriama paduoto argumento vertė.
    calcSmallDisplay.innerText = `${firstNumber} ${operator}`; //Į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    
    ongoingOperation = []; //Vedamo skaičiaus vertę grąžiname į tuščią.
    secondNumber = ''; //Antrojo skaičiaus vertę grąžiname į tuščią.

  }
};

let operatorVariables = { //Sukuriame objektą, 
  '/': divisionBtn, //kuriame susieti operatoriai (kaip raktai)
  '*': multiplyBtn, //ir kintamieji jų atitinkamų mygtukų elementams.
  '-': minusBtn,
  '+': plusBtn,
};

for (let operator in operatorVariables) {  //Leidžiame ciklą, kiekvieno iš operatorių elementų esančių objekte, priskirs eventListener(), 
  operatorVariables[operator].addEventListener('click', () => { //kuris klausysis pelės paspaudimo ir paleis prieš tai aprašytą
    mathLogic(operator);                                      //funkciją jai paduodamas paspausto operatoriaus vertę, kaip argumentą.
  });
  window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
    if (event.key === operator) { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
      operatorVariables[operator].click();
    }
  });
};


eraserBtn.addEventListener('click', () => { //Trintuko mygtuko elementui priskiriame eventListener().

  ongoingOperation.pop(); //Paspaudus mygtuką pele, vedamo skaičiaus masyve ištrinamas paskutinis suvestas skaičius.
  calcBigDisplay.innerText = ongoingOperation.join(''); //Masyvo elementai sujungiami ir atvaizduojami vedamo skaičiaus elemente.

  if (ongoingOperation.length == 0) { //Sąlyga patikrina ar vedamo skaičiaus masyvas tuščias.
    calcBigDisplay.innerText = 0; //Sąlygai atitikus, vedamo skaičiaus elemente vaizduojamas nulis.
  }
});
window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "Backspace") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    eraserBtn.click();
  }
});



resultBtn.addEventListener('click', () => { //Rezultato (lygu) mygtukui priskiriame eventLister().

  calcBigDisplay.style.fontSize = '42px'; //Nustatome teksto dydį rezultato išvesties elemente (tokiam atvejui, jei prieš tai rodomi rezultatai buvo pakeitę teksto dydį).

  if (ongoingOperation[0] == '0' && ongoingOperation[1] != '.') { //Sąlyga patikrina ar vedamo skaičiaus masyve pirmasis elementas yra nulis ir ar po jo nėra kablelio.
    ongoingOperation.shift(); //Sąlygai atitikus, nulis esantis masyvo pradžioje yra ištraukiamas.
    //Reikalinga tam, kad į matematinį veiksmą nebūtų paduotas skaičius su nuliu priekyje kurį JS skaitytų, kaip base-8 skaičių.
  }
  if (firstNumber == '') { //Jei pirmojo skaičiaus vertė tuščia, funkcija nieko negražina.
    return;
  }

  if (secondNumber == '') { //Jei tuščias antrojo skaičiaus kintamasis,
    secondNumber = addZero(ongoingOperation).join(''); //jam priskiriame vedamo skaičiaus vertę. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
  }

  let result = mathAction(firstNumber, operator, secondNumber); //Paskaičiuojame rezultatą, naudojant prieš tai aprašytą funkciją metematiniam veiksmui atlikti.
  result = result.toFixed(5); //Skaičius po kablelio suapvaliname iki 5 skaitmenų.
  result = parseFloat(result); //jei skaičiai po kablelio gale turi 0 juos panaikiname.

  if (result.toString().length >= 10) { //Jei rezultatas turi 10 ar daugiau skaitmenų, 
    calcBigDisplay.style.fontSize = '30px'; //Vaizdavimo elemento teksto dydį sumažiname, kad tiltų kalkuliatoriaus rėmo viduje.
  }
  if (result.toString().length > 15) { //Jei rezultatas turi daugiau nei 15 skaitmenų,
    calcBigDisplay.style.fontSize = '20px'; //Vaizdavimo elemento teksto dydį sumažiname dar labiau.
  }

  calcBigDisplay.innerText = result; //Rezultatą vaizduojame rezultato elemente.
  calcSmallDisplay.innerText = `${firstNumber} ${operator} ${secondNumber} = `; //Operacijos eilutėje vaizduojame operacijos seką.

  ongoingOperation = []; //Vedamo skaičiaus masyvui priskiriame tuščią vertę.
  firstNumber = result; //Rezultato vertę priskiriame pirmojo skaičiaus kintamąjam.
  secondNumber = ''; //Antrojo skaičius vertė padaroma tuščia.
  operator = ''; //Operatoriaus vertė padaroma tuščia.

  resultWasPressed = true; //Rezultato paspaudimo būsena nustatoma į true.

});
window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "=") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    resultBtn.click();
  }
});


percentBtn.addEventListener('click', () => { //Procentų mygtuko elemento kintamąjam pritaikome eventListener()
  secondNumber = ongoingOperation.join(''); //Antrąjam skaičiui priskiriame vedamo skaičiaus vertę.
  secondNumber = firstNumber / 100 * secondNumber; //Antrojo skaičiaus vertei priksiriame pirmojo skaičiaus padalinto iš 100 ir padauginto iš antrojo skaičiaus vertės rezultatą.
  calcSmallDisplay.innerText = `${firstNumber} ${operator} ${parseFloat(secondNumber.toFixed(5))} = `; //Pirmojo skaičiaus, operatoriaus ir sugeneruoto antrojo skaičiaus (procentinę) vertę vaizduojame operacijos elemente.
});
window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "%") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    percentBtn.click();
  }
});

dotBtn.addEventListener('click', () => { //Taško mygttuko elemento kintamąjam pritaikome eventListener()
  if (ongoingOperation.includes('.')) { //Sąlyga patikrina ar taškas jau buvo panaudotas.
    return;                             //Sąlygai atitikus funkcija nieko negrąžina.
  }
  ongoingOperation.push('.'); //Kitu atveju į vedamų skaičių masyvą įkeliame taško vertę.
  calcBigDisplay.innerText = ongoingOperation.join('');
});
window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "." || event.key === ",") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko,
    dotBtn.click();                             //taip pat taško vertė bus užfiksuota ir paspaudus kablelį.
  }
});

for (let button of calculatorButtonWrapper.children) { //Paleidžiame ciklą kuris pereis per visus mygtukų elementus esančius mygtukų elementų bloke.

  button.addEventListener('click', () => { //Kiekvienam iš mygtukų bus priskirtas eventListener(), jei:

    if (button.children[0].innerText == 'C') { //Mygtuko vidinis tekstas yra raidė 'C', šis mygtukas jį paspaudus į tuščias arba default reikšmes grąžins:
      firstNumber = ''; //pirmąjį skaičių
      secondNumber = ''; //antrąjį skaičių
      ongoingOperation = []; //vedamą skaičių
      calcBigDisplay.style.fontSize = '42px'; //rezultato teksto dydį
      calcBigDisplay.innerText = '0'; //rezultato vaizdavimo vertę
      calcSmallDisplay.innerText = ongoingOperation; //Operacijos eilutę
    } else if (button.children[0].innerText !== ''){ //Jei mygtuko vidinis tekstas nėra tuščias, tikriname kitas sąlygas:

      if (ongoingOperation.length > 9) { //Jei vedamo skaičiaus masyve yra daugiau nei 9 suvesti elementai, funkcija nieko nebegrąžina.
        return;
      }
      if (button.children[0].innerText == '0' 
          && ongoingOperation.length == 1 
          && ongoingOperation[0] == 0) { //Jei mygtuko vidinio teksto vertė '0', o vedamojo skaičiaus masyvas turi tik vieną elementą 
            return;                      //ir to elemento vertė jau yra nulis, funkcija nieko negrąžina.
      }

      if (resultWasPressed == true) { //Sąlyga patikrina ar rezultato mygtuko paspaudimo būsena yra true. Sąlygai atitikus, į tuščias arba default reikšmes grąžins:
        calcBigDisplay.style.fontSize = '42px'; //rezultato teksto dydį
        firstNumber = ''; //pirmąjį skaičių
        secondNumber = ''; //antrąjį skaičių
        ongoingOperation = []; //vedamą skaičių
        calcSmallDisplay.innerText = ''; //Operacijos eilutę
        resultWasPressed = false; //Rezultato mygtuko paspaudimo būsena pakeičiama atgal į false.
      }

      ongoingOperation.push(button.children[0].innerText); //Paspausto mygtuko vertė įkeliama į vedamo skaičiaus masyvą.
      calcBigDisplay.innerText = ongoingOperation.join(''); //Vedamo skaičiaus masyvo sujungti elementai atvaizduojami vedamo skaičiaus elemente.
    }
  });
  window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
    if (event.key === button.children[0].innerText) { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
      button.click();
    }
  });

};