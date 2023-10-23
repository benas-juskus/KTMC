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

let calcSmallDisplay = document.querySelector('.calculator-operation');
let calcBigDisplay = document.querySelector('.calculator-operation-result');
let calculatorButtonWrapper = document.querySelector('.calculator-button-wrapper');

let ongoingOperation = [];
let firstNumber = '';
let secondNumber = '';
let operator = '';

let divisionBtn = calculatorButtonWrapper.children[1];
let multiplyBtn = calculatorButtonWrapper.children[2];
let eraserBtn = calculatorButtonWrapper.children[3];
let minusBtn = calculatorButtonWrapper.children[7];
let plusBtn = calculatorButtonWrapper.children[11];
let resultBtn = calculatorButtonWrapper.children[15];
let percentBtn = calculatorButtonWrapper.children[16];
let dotBtn = calculatorButtonWrapper.children[18];


function mathAction (numOne, operator, numTwo) {
  let result = eval(`${numOne} ${operator} ${numTwo}`);
  return result;
};

function mathLogic(op) {

  if (operator == '') {
    operator = op;
  }

  if (firstNumber == '') {

    firstNumber = ongoingOperation.join('');
    operator = op;
    calcSmallDisplay.innerText = `${firstNumber} ${operator}`;
    ongoingOperation = [];

  } else if (firstNumber != '') {

    if (ongoingOperation.length == 0) {
      return;
    }

    secondNumber = ongoingOperation.join('');
    let result = mathAction(firstNumber, operator, secondNumber);
    result.toFixed(5);
    result = parseFloat(result);
    if (result.toString().length > 10) {
      calcBigDisplay.style.fontSize = '30px';
    }
    firstNumber = result;
    calcBigDisplay.innerText = result;
    operator = op;
    calcSmallDisplay.innerText = `${firstNumber} ${operator}`;
    ongoingOperation = [];
    secondNumber = '';

  }
};

let operatorVariables = {
  '/': divisionBtn,
  '*': multiplyBtn,
  '-': minusBtn,
  '+': plusBtn,
};

for (let operator in operatorVariables) {
  operatorVariables[operator].addEventListener('click', () => {
    mathLogic(operator);
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === operator) {
      operatorVariables[operator].click();
    }
  });
};


eraserBtn.addEventListener('click', () => {

  if (ongoingOperation.length == 0) {
    return;
  }

  ongoingOperation.pop();
  calcBigDisplay.innerText = ongoingOperation.join('');

  if (ongoingOperation.length == 0) {
    calcBigDisplay.innerText = 0;
  }
});
window.addEventListener('keydown', function (event) {
  if (event.key === "Backspace") {
    eraserBtn.click();
  }
});



resultBtn.addEventListener('click', () => {
  calcBigDisplay.style.fontSize = '42px';

  if (firstNumber == '') {
    return;
  }

  if (secondNumber == '') {
    secondNumber = ongoingOperation.join('');
  }

  let result = mathAction(firstNumber, operator, secondNumber);
  result = result.toFixed(5);
  result = parseFloat(result);
  if (result.toString().length > 10) {
    calcBigDisplay.style.fontSize = '30px';
  }

  calcBigDisplay.innerText = result;
  calcSmallDisplay.innerText = `${firstNumber} ${operator} ${secondNumber} = `;
  ongoingOperation = [];
  firstNumber = result;
  secondNumber = '';
  operator = '';
});
window.addEventListener('keydown', function (event) {
  if (event.key === "=") {
    resultBtn.click();
  }
});

percentBtn.addEventListener('click', () => {
  secondNumber = ongoingOperation.join('');
  secondNumber = firstNumber / 100 * secondNumber;
  calcSmallDisplay.innerText = `${firstNumber} ${operator} ${parseFloat(secondNumber.toFixed(5))} = `;
  ongoingOperation = [];
});
window.addEventListener('keydown', function (event) {
  if (event.key === "%") {
    percentBtn.click();
  }
});

dotBtn.addEventListener('click', () => {
  if (ongoingOperation.includes('.')) {
    return;
  }
  ongoingOperation.push('.');
  calcBigDisplay.innerText = ongoingOperation.join('');
});
window.addEventListener('keydown', function (event) {
  if (event.key === "." || event.key === ",") {
    dotBtn.click();
  }
});

for (let button of calculatorButtonWrapper.children) {

  button.addEventListener('click', () => {

    if (button.children[0].innerText == 'C') {
      firstNumber = '';
      secondNumber = '';
      ongoingOperation = [];
      calcBigDisplay.style.fontSize = '42px';
      calcBigDisplay.innerText = '0';
      calcSmallDisplay.innerText = ongoingOperation;
    } else if (button.children[0].innerText !== ''){
      ongoingOperation.push(button.children[0].innerText);
      calcBigDisplay.innerText = ongoingOperation.join('');
    }
  });
  window.addEventListener('keydown', function (event) {
    if (event.key === button.children[0].innerText) {
      button.click();
    }
  });
};