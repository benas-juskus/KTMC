//Parašyti funkcijas, kurioms paduodamas objektas su prekės informacija:


//Sukuriame prekę su informacija.
let product = {
        name: 'Apple iPhone 13 Pro',
        price: 999.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
        stock: 1,
        description: 'The Apple iPhone 13 Pro is the latest flagship smartphone with a Super Retina XDR display, A15 Bionic chip, and advanced camera system.',
        discount: 15
    };



//Pirmoji funkcija sugeneruoja ir gražina pilną prekės išvedimą.

function listFullProductInfo(product) { //Funkcija priima viena argumenta, kuris yra objektas.
    let ul = document.createElement('ul'); //Sukuriamas <ul> elementas kuriame bus talpinamos eilutės su objekto informacija.

    for (let line in product) { //Paleidžiame ciklą, kuris pereis per kiekvieną objekto duomenų eilutę.
        let li = document.createElement('li'); //Kiekvinai duomenų eilutei sukuriamas <li> elementas.
        li.innerText = `${line}: ${product[line]}`; //<li> elemento viduje išsaugome eilutės informaciją tekstiniu pavidalu "Raktas": "vertė".
        ul.appendChild(li); //<li> elementą prisegame prie <ul> elemento.
    };
    return ul; //Grąžiname <ul> sąrašą su objekto informacija.
};

const productDisplayCard = document.getElementById('task2'); //Randame elementą kuriame atvaizduosime objekto informaciją.
productDisplayCard.appendChild(listFullProductInfo(product)); //Šiam elementui prisegame vaikinį elementą kurį sugeneruoja prieš tai aprašyta funkcija.



//Antroji funkcija sugeneruoja ir gražina prekės katalogui naudojamą prekės išvedimą (Pavadinimas, paveiksliukas ir kaina su nuolaida ir be nuolaidos)

function generateSingleProductDisplayInfo(product) { //Funkcija priima vieną argumentą, kuris yra objektas su prekės informacija.
    //Sukuriame visus html elementus, kurie bus reikalingi reikalaujamai informacijai atvaizduoti.
    let newDiv = document.createElement('div');
        newDiv.classList.add('preview');
    let newImg = document.createElement('img');
        newImg.src = product.image;
    let newName = document.createElement('h2');
        newName.innerText = product.name;
    let price = document.createElement('p');


    if (Number(product.stock) !== 0 && !!Number(product.stock) && product.stock !== true) { //Paleidžiame ciklą, kuris patikrina are "stock" rakto vertė nėra nulis, ir nėra jokios kitos reikšmės (boolean, string, undefined), kurios neatitinka prekės kiekio kriterijaus.
        if (product.discount > 0) { //Jei sąlyga atitinka, sekantis ciklas tikrina ar rakto "discount" vertė yra daugiau nei nulis.
            let discountedPrice = (100 - product.discount) * product.price / 100; //Sąlygai atitikus, pagal pateiktą "discount" rakto skaitinę vertę apskaičiuojame kainą su nuolaida.
            price.innerHTML = `<s>EUR ${product.price.toFixed(2)}</s><br> EUR ${discountedPrice.toFixed(2)}`; //Ankščiau sukurtam kainos vaizdavimo elementui, suteikiame senosios ir naujosios kainos vertes.
        } else {
            price.innerText = product.price.toFixed(2); //Jei sąlyga neatitinka ir "discount" rakto vertė yra nulis, ankščiau sukurtam kainos vaizdavimo elementui prisikiriama rakto "price" vertė.
        }
    } else {// Jei pirmionio ciklo sąlyga neatitinka ir yra lygi nuliui, 
        newDiv.classList.add('no-stock'); //visos prekės vaizdavimo elementui priskiriama css klasė, pagal kurią bus taikomi stiliai "out of stock" prekėms,
        price.innerText = 'No Stock'; //ankščiau sukurtam kainos vaizdavimo elementui prisikiriama vertė, nurodanti, kad prekės nėra.
    };

    //Visi elementai prisegami į pagrindinį prekės vaizdavimo elementą.
    newDiv.appendChild(newImg);
    newDiv.appendChild(newName);
    newDiv.appendChild(price);

    return newDiv; //Šis elementas grąžinamas funkcijos.
};

// Sukuriame masyvą su objektais, kuriuose saugoma prekių informacija.
let products = [
    {
        name: 'Apple iPhone 13 Pro',
        price: 999.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
        stock: 5,
        description: 'The Apple iPhone 13 Pro is the latest flagship smartphone with a Super Retina XDR display, A15 Bionic chip, and advanced camera system.',
        discount: 15
    },
    {
        name: 'Samsung Galaxy S21 Ultra',
        price: 1099.99,
        image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg',
        stock: 30,
        description: 'The Samsung Galaxy S21 Ultra features a stunning 108MP camera, a large AMOLED display, and powerful performance.',
        discount: 0
    },
    {
        name: 'Google Pixel 6 Pro',
        price: 899.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel-6-pro-1.jpg',
        stock: 0,
        description: 'The Google Pixel 6 Pro offers excellent photography capabilities, a high-refresh-rate display, and the latest Android experience.',
        discount: 8
    },
    {
        name: 'OnePlus 9 Pro',
        price: 899.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-pro-1.jpg',
        stock: 15,
        description: 'The OnePlus 9 Pro combines a high-refresh-rate Fluid AMOLED display with a powerful Snapdragon processor for a smooth user experience.',
        discount: 0
    },
    {
        name: 'Xiaomi Mi 11',
        price: 699.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-11-lite-4g-1.jpg',
        stock: 25,
        description: 'The Xiaomi Mi 11 offers flagship-level performance at an affordable price, featuring a Snapdragon 888 chipset and a vibrant display.',
        discount: 0
    },
    {
        name: 'Sony Xperia 1 III',
        price: 1099.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/sony/sony-xperia-1-iii-02.jpg',
        stock: '7',
        description: 'The Sony Xperia 1 III boasts a 4K OLED display, a versatile camera system, and advanced audio features for multimedia enthusiasts.',
        discount: 10
    },
    {
        name: 'Huawei P40 Pro',
        price: 799.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-pro-01.jpg',
        stock: 12,
        description: 'The Huawei P40 Pro offers impressive camera capabilities and powerful performance, powered by the Kirin 990 chipset.',
        discount: 7
    },
    {
        name: 'Oppo Find X3 Pro',
        price: 899.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x3-pro-4.jpg',
        stock: true,
        description: 'The Oppo Find X3 Pro features a unique microscope camera, a high-refresh-rate display, and a Snapdragon 888 processor.',
        discount: 10
    },
    {
        name: 'Asus ROG Phone 5',
        price: 999.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/asus/asus-rog-phone-5-0.jpg',
        stock: 8,
        description: 'The Asus ROG Phone 5 is a gaming powerhouse with a 144Hz AMOLED display, Snapdragon 888 SoC, and customizable RGB lighting.',
        discount: 0
    },
    {
        name: 'LG G8 ThinQ',
        price: 599.00,
        image: 'https://fdn2.gsmarena.com/vv/pics/lg/lg-g8x-thinq-1.jpg',
        stock: 5,
        description: 'The LG G8 ThinQ offers a unique hand gesture interface, a sharp OLED display, and solid overall performance.',
        discount: 10
    }
];

function generateProductCatalogue(source, destination) { //Funkcija turi du parametrus, kur "source" nurodome šaltinį, kuris paduos objektų informaciją, ir "destination", kur nurodysime html elementą kuriame bus talpinama ši informacija.
    for (let product of source) { //Paleidžiamas ciklas, kuris eina per paduotus objektus,
        let result = generateSingleProductDisplayInfo(product); //kiekvienas iš objektų yra apdorojamas prieš tai aprašytos funkcijos generateSingleProductDisplayInfo().
        destination.appendChild(result); //Kiekvienas funkcijos apdorotas rezultatas prisegamas prie "destination" parametro nurodyto argumento.
    };
};

generateProductCatalogue(products, productDisplayCard);