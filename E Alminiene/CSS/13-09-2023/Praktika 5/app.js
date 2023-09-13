let dropdown = document.getElementById('dropdown');

dropdown.addEventListener('mouseover', () => {
    let shops = document.getElementById('shops');
    shops.classList.remove('hidden');
});

dropdown.addEventListener('mouseout', () => {
    let shops = document.getElementById('shops');
    shops.classList.add('hidden');
});
