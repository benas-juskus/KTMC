let month = new Date().getMonth(); //Retrieve the number off the current month

//List of month names in Lithuanian in an array
const lithuanianMonthNames = [ 
    'Sausis', 
    'Vasaris', 
    'Kovas', 
    'Balandis', 
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis'
];

let result = lithuanianMonthNames[month]; //The Lithuanian name is matched to the index of the month retrieved.
console.log(result);
document.write(result);
