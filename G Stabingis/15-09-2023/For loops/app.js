let number = 5,
    result = 0;
    result_display = '';

for (let i = 1; i <= number; i++) {

    result = result + i;
    result_display = result_display + i;
    if ( i < number) {
        result_display = result_display + ' + ';
    }
}

// for (let i = 1; i <= number; i++) {

//     result = result + i;
    
//     if ( i > 1) {
//         result_display = result_display + ' + ';
//     }
//     result_display = result_display + i;
// }

result_display = result_display + ' = ' + result;
document.getElementById('demo').innerHTML = result_display;