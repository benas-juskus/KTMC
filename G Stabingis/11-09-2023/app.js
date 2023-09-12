let gera_nuotaika = true,
    hour = 24;
    let greeting;

if (gera_nuotaika) {
    if (hour <= 9) {
        greeting = "Good morning";
    } else if (hour <= 19) {
        greeting = "Good day";
    } else if (hour <= 23) {
        greeting = "Good evening";
    }   
    console.log(greeting);
} else {
greeting = "Hello";
}

console.log(greeting);