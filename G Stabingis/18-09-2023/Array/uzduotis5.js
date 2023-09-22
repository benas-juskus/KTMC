const gallery = document.getElementById('task5'); //Pasirenkame elementą, kuriame bus vaizduojamos prekės.

//Sukuriame masyvą, su prekių informacija, saugoma objektuose.
let products = [
    {
    itemName: 'MacBook 15',
    price: 'EUR 1299.00',
    description: 'macOS is the operating system that powers every Mac.',
    image: 'images/1.jpg',
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-apple-macbook-pro-mneh3ze-a-us-apple-m2-8-gb-256-gb-13-3/n0f7?cat=5ei&index=3&_gl=1*5qatyt*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
    },
    {
    itemName: 'MSI Katana',
    price: 'EUR 1129.00',
    description: 'Lorem ipsum dolor sit amet.',
    image: 'images/2.jpg',
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-lenovo-ideapad-gaming-3-15ach6-82k200ndpb-amd-ryzen-5-5600h-16-gb-512-gb-15-6/ky3o?cat=5ei&index=20&_gl=1*jljdn2*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
    },
    {
    itemName: 'Asus Vivobook 16',
    price: 'EUR 782.00',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'images/3.jpg',
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-acer-aspire-3-a315-23-nx-hvtep-00y-pl-amd-ryzen-5-3500u-8-gb-512-gb-15-6/m3sk?cat=5ei&index=24&_gl=1*jljdn2*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
    },
    {
    itemName: 'Lenovo IdeaPad 5 Pro',
    price: 'EUR 960.00',
    description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    image: 'images/4.jpg',
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-msi-prestige-a12sc-071pl-intel-core-i7-1280p-16-gb-512-gb-15-6/q57q?cat=5ei&index=16&_gl=1*1azumeo*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
    },
    {
    itemName: 'HP EliteBook 650 G10',
    price: 'EUR 1139.00',
    description: 'macOS is the operating system that powers every Mac.',
    image: 'images/5.jpg',
    link: 'https://www.senukai.lt/p/nesiojamas-kompiuteris-lenovo-ideapad-3-15itl6-82h801qqpb-pl-intel-core-i3-1115g4-8-gb-512-gb-15-6/ktgs?cat=5ei&index=14&_gl=1*ieosmr*_up*MQ..&gclid=Cj0KCQjw06-oBhC6ARIsAGuzdw386Y0-ckvw6vP8sO8k5IIqrYsW7WEU5hW-FuG2UpvjJK-CcEL6PEgaAr5aEALw_wcB'
    },
];

for (let product of products) { //Ciklas pereina per kiekvieną prekę masyve.
    let newDiv = document.createElement('div'),//Sukuriame naują elementą kuriame vaizduosime vienos konkrečios prekės informaciją.
        newImg = document.createElement('img'),//Sukuriame paveikslėlio elementą.
        newName = document.createElement('h3'),//Sukuriame pavadinimo elementą.
        newPrice = document.createElement('h2');//Sukuriame kainos elementą.

    newImg.src = product.image; //Paveikslėlio elementui pritaikomas atributas su paveikslėlio nuoroda iš prekės objekto.
    newName.textContent = product.itemName;//Vardo elementui priskiriame vardą iš prekės objekto.
    newPrice.textContent = product.price;//Kainos elementui priskiriame kainą iš prekės objekto.
    newDiv.appendChild(newImg); //Į prekės informacijos elementą įsegame paveikslėlio, pavadinimo ir kainos elementus.
    newDiv.appendChild(newName);
    newDiv.appendChild(newPrice);
    newDiv.classList.add('product');//Priskiriame klasės atributą, kad būtų pritakyti stiliaus aprašymai iš style.css failo.
    gallery.appendChild(newDiv); //Prekės informacijos elementas prisegamas prie galerijos elemento.

}