let burger = document.querySelector('.dropdown > button');
let header = document.querySelector('header');
let navList = document.getElementById('nav-list');
let navBar = document.querySelector('nav');

let isVisible = false;

burger.addEventListener('click', () => {
    isVisible = !isVisible;

    if (isVisible) {
        navList.style.visibility = 'visible';
        navBar.style.height = 'auto';
        header.style.height = 'auto';
        burger.setAttribute('style', 'border-bottom: none');
    } else {
        navList.style.visibility = 'hidden';
        navBar.style.height = '0px';
        header.style.height = '20vh';
        burger.setAttribute('style', 'border-bottom: solid 2px black');
    }
});