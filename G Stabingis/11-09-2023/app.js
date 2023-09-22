const hour = new Date().getHours(); //Retrieve current hour.
let greeting; //Declare greeting variable with no defined value.

let goodMood = true; //Declare the status of mood in boolean.

//Following block of code checks the 
//status of the mood and the depending 
//on the hour of the day provides a value to the greeting.

switch (goodMood) {
    case true:
      hour <= 11 ? greeting = "Good morning" 
      : (hour <= 19 ? greeting = "Good day"
        : (hour <= 23 ? greeting = "Good evening" 
          : greeting = "Hello"));
      break;
    default:
      greeting = "Hello";
      break;
  }

document.getElementById("demo").innerHTML = greeting;