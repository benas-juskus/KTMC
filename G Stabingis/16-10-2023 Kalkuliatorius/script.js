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



// KINTAMŲJŲ DEKLARAVIMAS:

let operacijosVaizdas = document.querySelector('.calculator-operation'); //Kintamasis operacijos vaizdavimui.
let rezultatoVaizdas = document.querySelector('.calculator-operation-result'); //Kintamasis vedamo skaičiaus ir rezultato vaizdavimui.
let mygtukuBlokas = document.querySelector('.calculator-button-wrapper'); //Kintamasis mygtukų elementui.

let vedamasSkaicius = []; //Kintamasis, kuriame bus laikoma vedamo skaičiaus vertė.
let pirmasisSkaicius = ''; //Kintamasis, kuriame laikysime pirmojo skaičiaus vertę.
let antrasisSkaicius = ''; //Kintamasis, kuriame laikysime antrojo skaičiaus vertę.
let operatorius = ''; //Kintamasis, kuriame laikysime veiksmo operatorių.

let dalybosMygt = mygtukuBlokas.children[1]; //Dalybos mygtuko elementas.
let daugybosMygt = mygtukuBlokas.children[2]; //Daugybos mygtuko elementas.
let trintukoMygt = mygtukuBlokas.children[3];  //Trintuko mygtuko elementas.
let atimtiesMygt = mygtukuBlokas.children[7]; //Atimties mygtuko elementas.
let sudetiesMygt = mygtukuBlokas.children[11]; //Sudėties mygtuko elementas.
let rezultatoMygt = mygtukuBlokas.children[15]; //Rezultato (lygu) mygtuko elementas.
let procentuMygt = mygtukuBlokas.children[16]; //Procentų mygtuko elementas.
let taskoMygt = mygtukuBlokas.children[18]; //Taško mygtuko elementas.

let operatoriuKintamieji = { //Sukuriame objektą, 
  '/': dalybosMygt, //kuriame susieti operatoriai (kaip raktai)
  '*': daugybosMygt, //ir kintamieji jų atitinkamų mygtukų elementams.
  '-': atimtiesMygt,
  '+': sudetiesMygt,
};

let rezultatasPaspaustas = false; //Kintamasis, kuriame saugosime boolean vertę, kuri pasakys ar buvo paspaustas rezultato (lygu) mygtukas.



// PAGALBINĖS FUNKCIJOS

function pridetiNuli(num) { //Funkcija, kuri operacijos vaizdavimo eilutėje dedamo skaičiaus priekyje pridės 0, jei vertė su skaičiais po kablelio bus vedama pradedant nuo taško (".").
  if (num[0] == '.') { //Jei pirmasis masyvo elementas yra taškas,
    num.unshift('0'); //į masyvo priekį įdedame nulį.
    return num;
  }
  return num;
}


function matematinisVeiksmas (numOne, operatorius, numTwo) { //Funkcija matematiniam veiksmui atlikti. Trys parametrai: pirmasis ir antrasis skaičius ir operatorius.
  let rezultatas = eval(`${numOne} ${operatorius} ${numTwo}`); //Rezultatas išvedamas ir grąžinamas atlikus matematinį veiksmą pagal tris pateiktus argumentus.
  return rezultatas;
};

function matematineLogika(op) { //Funkcija, kuri priklausomai nuo pateiktų duomenų ir kintamųjų būsenų ir reikšmių išves rezultatą.
  if (pirmasisSkaicius == '' && vedamasSkaicius.length == 0) { //Sąlyga patikrina ar pirmasis skaičius ir vedamo skaičiaus vertė yra tuščia, ir jei sąlyga atitinka, funkcija nieko negrąžina.
    return; //Reikalinga tam kad nebūtų galima įvesti operatoriaus, kol nėra įvestas bent vienas skaičius.
  }

  if (vedamasSkaicius[0] == '0' && vedamasSkaicius[1] != '.') { //Sąlyga patikrina ar vedamo skaičiaus masyve pirmasis elementas yra nulis ir ar po jo nėra kablelio.
    vedamasSkaicius.shift(); //Sąlygai atitikus, nulis esantis masyvo pradžioje yra ištraukiamas.
    //Reikalinga tam, kad į matematinį veiksmą nebūtų paduotas skaičius su nuliu priekyje kurį JS skaitytų, kaip base-8 skaičių.
  }

  if (operatorius == '') { //Patikriname ar yra nustatytas operatorius.
    operatorius = op; //Jei operatoriaus nustatyto dar nėra, operatorius nustatomas pagal pateiktą argumentą.
  }

  if (rezultatasPaspaustas == true) { //Patikriname ar buvo paspaustas rezultato mygtukas.
    operacijosVaizdas.innerText = `${pirmasisSkaicius} ${operatorius}`; //Jei sąlyga atitinka, į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    rezultatasPaspaustas = false; //Atlikus veiksmą rezultato mygtuko būseną grąžiname į false.
  }

  if (pirmasisSkaicius == '') { //Patikriname ar nebuvo suvestas pirmasis skaičius.
    pirmasisSkaicius = pridetiNuli(vedamasSkaicius).join(''); //Sąlygai atitikus, vedamo skaičiaus vertė priskiriama pirmojo skaičiaus kintamąjam. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
    operatorius = op; //Operatoriuj priskiriama paduoto argumento vertė.
    operacijosVaizdas.innerText = `${pirmasisSkaicius} ${operatorius}`; //Į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    vedamasSkaicius = []; //Vedamo skačiaus vertę nustatome į tuščią.

  } else if (pirmasisSkaicius != '') { //Kita sąlyga, kuri patikrina ar pirmojo skaičiaus vertė nėra tuščia.
    
    if (vedamasSkaicius.length == 0) { //Sąlyga patikrina ar vedamo skaičiaus masyvas yra tuščias.
      return; //Sąlygai atitikus funkcija sustoja ir nieko negrąžina.
    }
    if (antrasisSkaicius == '') { //Sąlyga patikrina ar antrojo skaičiaus vertė yra tuščia. Šis patikrinimas reikalingas, jei būtų naudojamas procento vertės paskaičiavimas antrajam skaičiuj. Tokiu atveju antrojo skaičiaus vertė nebūtų tuščia.
      antrasisSkaicius = pridetiNuli(vedamasSkaicius).join(''); //Sąlygai atitikus, vedamo skaičiaus vertė priskiriama antrojo skaičiaus kintamąjam. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
    }

    let rezultatas = matematinisVeiksmas(pirmasisSkaicius, operatorius, antrasisSkaicius); //Paskaičiuojame rezultatą, naudojant prieš tai aprašytą funkciją metematiniam veiksmui atlikti.
    rezultatas.toFixed(5); //Skaičius po kablelio suapvaliname iki 5 skaitmenų.
    rezultatas = parseFloat(rezultatas); //jei skaičiai po kablelio gale turi 0 juos panaikiname.
    if (rezultatas.toString().length >= 10) { //Jei rezultatas turi 10 ar daugiau skaitmenų, 
      rezultatoVaizdas.style.fontSize = '30px'; //Vaizdavimo elemento teksto dydį sumažiname, kad tiltų kalkuliatoriaus rėmo viduje.
    }
    if (rezultatas.toString().length > 15) { //Jei rezultatas turi daugiau nei 15 skaitmenų,
      rezultatoVaizdas.style.fontSize = '20px'; //Vaizdavimo elemento teksto dydį sumažiname dar labiau.
    }
    pirmasisSkaicius = rezultatas; //Rezultato vertę priskiriame pirmąjam skaičiui.
    rezultatoVaizdas.innerText = rezultatas; //Rezultato vertę atvaizduojame rezultato vaizdavimo elemente.
    operatorius = op; //Operatoriuj priskiriama paduoto argumento vertė.
    operacijosVaizdas.innerText = `${pirmasisSkaicius} ${operatorius}`; //Į operacijos vaizdavimo eilutę įdedame pirmojo skaičiaus ir operatoriaus vertes.
    
    vedamasSkaicius = []; //Vedamo skaičiaus vertę grąžiname į tuščią.
    antrasisSkaicius = ''; //Antrojo skaičiaus vertę grąžiname į tuščią.

  }
};


//MYGTUKŲ GENERAVIMAS:

//Skaičių blokas ir 'C' (visko ištrinimas)
for (let mygtukas of mygtukuBlokas.children) { //Paleidžiame ciklą kuris pereis per visus mygtukų elementus esančius mygtukų elementų bloke.

  let mygtukoVerte = mygtukas.children[0].innerText; //Kintamasis mygtuko vidiniam tekstui.

  mygtukas.addEventListener('click', () => { //Kiekvienam iš mygtukų bus priskirtas eventListener(), jei:

    if (mygtukoVerte == 'C') { //Mygtuko vidinis tekstas yra raidė 'C', šis mygtukas jį paspaudus į tuščias arba default reikšmes grąžins:
      pirmasisSkaicius = ''; //pirmąjį skaičių
      antrasisSkaicius = ''; //antrąjį skaičių
      vedamasSkaicius = []; //vedamą skaičių
      rezultatoVaizdas.style.fontSize = '42px'; //rezultato teksto dydį
      rezultatoVaizdas.innerText = '0'; //rezultato vaizdavimo vertę
      operacijosVaizdas.innerText = vedamasSkaicius; //Operacijos eilutę
    } else if (mygtukoVerte !== ''){ //Jei mygtuko vidinis tekstas nėra tuščias, tikriname kitas sąlygas:

      if (vedamasSkaicius.length > 9) { //Jei vedamo skaičiaus masyve yra daugiau nei 9 suvesti elementai, funkcija nieko nebegrąžina.
        return;
      }
      if (mygtukoVerte == '0' 
          && vedamasSkaicius.length == 1 
          && vedamasSkaicius[0] == 0) { //Jei mygtuko vidinio teksto vertė '0', o vedamojo skaičiaus masyvas turi tik vieną elementą 
            return;                      //ir to elemento vertė jau yra nulis, funkcija nieko negrąžina.
      }

      if (rezultatasPaspaustas == true) { //Sąlyga patikrina ar rezultato mygtuko paspaudimo būsena yra true. Sąlygai atitikus, į tuščias arba default reikšmes grąžins:
        rezultatoVaizdas.style.fontSize = '42px'; //rezultato teksto dydį
        pirmasisSkaicius = ''; //pirmąjį skaičių
        antrasisSkaicius = ''; //antrąjį skaičių
        vedamasSkaicius = []; //vedamą skaičių
        operacijosVaizdas.innerText = ''; //Operacijos eilutę
        rezultatasPaspaustas = false; //Rezultato mygtuko paspaudimo būsena pakeičiama atgal į false.
      }

      vedamasSkaicius.push(mygtukoVerte); //Paspausto mygtuko vertė įkeliama į vedamo skaičiaus masyvą.
      rezultatoVaizdas.innerText = vedamasSkaicius.join(''); //Vedamo skaičiaus masyvo sujungti elementai atvaizduojami vedamo skaičiaus elemente.
    }
  });

  window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
    if (event.key === mygtukoVerte) { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
      mygtukas.click();
    }
  });

};

//Operatoriai iš kintamųjų objekto:
for (let operatorius in operatoriuKintamieji) {                       //Leidžiame ciklą, kiekvieno iš operatorių elementų esančių objekte, priskirs eventListener(), 
  operatoriuKintamieji[operatorius].addEventListener('click', () => { //kuris klausysis pelės paspaudimo ir paleis prieš tai aprašytą
    matematineLogika(operatorius);                                    //funkciją, jai paduodamas paspausto operatoriaus vertę, kaip argumentą.
  });
  window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
    if (event.key === operatorius) {                    //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
      operatoriuKintamieji[operatorius].click();
    }
  });
};

//Trintukas:
trintukoMygt.addEventListener('click', () => { //Trintuko mygtuko elementui priskiriame eventListener().

  vedamasSkaicius.pop(); //Paspaudus mygtuką pele, vedamo skaičiaus masyve ištrinamas paskutinis suvestas skaičius.
  rezultatoVaizdas.innerText = vedamasSkaicius.join(''); //Masyvo elementai sujungiami ir atvaizduojami vedamo skaičiaus elemente.

  if (vedamasSkaicius.length == 0) { //Sąlyga patikrina ar vedamo skaičiaus masyvas tuščias.
    rezultatoVaizdas.innerText = 0; //Sąlygai atitikus, vedamo skaičiaus elemente vaizduojamas nulis.
  }

});

window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "Backspace") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    trintukoMygt.click();
  }
});


//Rezultatas:
rezultatoMygt.addEventListener('click', () => { //Rezultato (lygu) mygtukui priskiriame eventLister().

  rezultatoVaizdas.style.fontSize = '42px'; //Nustatome teksto dydį rezultato išvesties elemente (tokiam atvejui, jei prieš tai rodomi rezultatai buvo pakeitę teksto dydį).

  if (vedamasSkaicius[0] == '0' && vedamasSkaicius[1] != '.') { //Sąlyga patikrina ar vedamo skaičiaus masyve pirmasis elementas yra nulis ir ar po jo nėra kablelio.
    vedamasSkaicius.shift(); //Sąlygai atitikus, nulis esantis masyvo pradžioje yra ištraukiamas.
    //Reikalinga tam, kad į matematinį veiksmą nebūtų paduotas skaičius su nuliu priekyje kurį JS skaitytų, kaip base-8 skaičių.
  }
  if (pirmasisSkaicius == '') { //Jei pirmojo skaičiaus vertė tuščia, funkcija nieko negražina.
    return;
  }

  if (antrasisSkaicius == '') { //Jei tuščias antrojo skaičiaus kintamasis,
    antrasisSkaicius = pridetiNuli(vedamasSkaicius).join(''); //jam priskiriame vedamo skaičiaus vertę. Tuo pačiu pritaikome prieš tai aprašytą funkciją pridėti nuliui (jei reikia), bei sujungiami mastyvo elementai į vieną vertę.
  }

  let rezultatas = matematinisVeiksmas(pirmasisSkaicius, operatorius, antrasisSkaicius); //Paskaičiuojame rezultatą, naudojant prieš tai aprašytą funkciją metematiniam veiksmui atlikti.
  rezultatas = rezultatas.toFixed(5); //Skaičius po kablelio suapvaliname iki 5 skaitmenų.
  rezultatas = parseFloat(rezultatas); //jei skaičiai po kablelio gale turi 0 juos panaikiname.

  if (rezultatas.toString().length >= 10) { //Jei rezultatas turi 10 ar daugiau skaitmenų, 
    rezultatoVaizdas.style.fontSize = '30px'; //Vaizdavimo elemento teksto dydį sumažiname, kad tiltų kalkuliatoriaus rėmo viduje.
  }
  if (rezultatas.toString().length > 15) { //Jei rezultatas turi daugiau nei 15 skaitmenų,
    rezultatoVaizdas.style.fontSize = '20px'; //Vaizdavimo elemento teksto dydį sumažiname dar labiau.
  }

  rezultatoVaizdas.innerText = rezultatas; //Rezultatą vaizduojame rezultato elemente.
  operacijosVaizdas.innerText = `${pirmasisSkaicius} ${operatorius} ${antrasisSkaicius} = `; //Operacijos eilutėje vaizduojame operacijos seką.

  vedamasSkaicius = []; //Vedamo skaičiaus masyvui priskiriame tuščią vertę.
  pirmasisSkaicius = rezultatas; //Rezultato vertę priskiriame pirmojo skaičiaus kintamąjam.
  antrasisSkaicius = ''; //Antrojo skaičius vertė padaroma tuščia.
  operatorius = ''; //Operatoriaus vertė padaroma tuščia.

  rezultatasPaspaustas = true; //Rezultato paspaudimo būsena nustatoma į true.

});

window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "=") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    rezultatoMygt.click();
  }
});


//Procentai:
procentuMygt.addEventListener('click', () => { //Procentų mygtuko elemento kintamąjam pritaikome eventListener()
  antrasisSkaicius = vedamasSkaicius.join(''); //Antrąjam skaičiui priskiriame vedamo skaičiaus vertę.
  antrasisSkaicius = pirmasisSkaicius / 100 * antrasisSkaicius; //Antrojo skaičiaus vertei priksiriame pirmojo skaičiaus padalinto iš 100 ir padauginto iš antrojo skaičiaus vertės rezultatą.
  operacijosVaizdas.innerText = `${pirmasisSkaicius} ${operatorius} ${parseFloat(antrasisSkaicius.toFixed(5))} = `; //Pirmojo skaičiaus, operatoriaus ir sugeneruoto antrojo skaičiaus (procentinę) vertę vaizduojame operacijos elemente.
});

window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "%") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko.
    procentuMygt.click();
  }
});


//Taškas:
taskoMygt.addEventListener('click', () => { //Taško mygttuko elemento kintamąjam pritaikome eventListener()
  if (vedamasSkaicius.includes('.')) { //Sąlyga patikrina ar taškas jau buvo panaudotas.
    return;                             //Sąlygai atitikus funkcija nieko negrąžina.
  }
  vedamasSkaicius.push('.'); //Kitu atveju į vedamų skaičių masyvą įkeliame taško vertę.
  rezultatoVaizdas.innerText = vedamasSkaicius.join('');
});

window.addEventListener('keydown', function (event) { //Puslapio langui priskiriame eventListener(), kuris klausysis klaviatūros paspaudimo,
  if (event.key === "." || event.key === ",") { //kuris atitinką operatoriaus vertę, ir virtualiai paspaus pelės mygtuką ant atitinkamo operatoriaus mygtuko,
    taskoMygt.click();                             //taip pat taško vertė bus užfiksuota ir paspaudus kablelį.
  }
});

