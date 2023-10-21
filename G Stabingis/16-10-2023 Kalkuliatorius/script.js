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
let ongoingOperationChunk = [];

let divisionBtn = calculatorButtonWrapper.children[1];
let multiplyBtn = calculatorButtonWrapper.children[2];
let eraserBtn = calculatorButtonWrapper.children[3];
let minusBtn = calculatorButtonWrapper.children[7];
let plusBtn = calculatorButtonWrapper.children[11];
let resultBtn = calculatorButtonWrapper.children[15];
let percentBtn = calculatorButtonWrapper.children[16];
let dotBtn = calculatorButtonWrapper.children[18];


plusBtn.addEventListener('click', () => {
  ongoingOperation.push(ongoingOperationChunk.join(''));
  calcBigDisplay.innerText = eval(ongoingOperation.join(''));
  ongoingOperation.push(' + ');
  ongoingOperationChunk = [];
  calcSmallDisplay.innerText = ongoingOperation.join('');

  console.log(ongoingOperation);
});

divisionBtn.addEventListener('click', () => {
    console.log('ongoingOperationChunk inside /: ' + ongoingOperationChunk);
    ongoingOperation.push(ongoingOperationChunk.join(''));
    ongoingOperationChunk = [];
    console.log(ongoingOperation);
  if (ongoingOperation.length !== 0 && ongoingOperationChunk[ongoingOperationChunk.length - 1] !== ' / ' ){
    ongoingOperation.push(' / ');
    calcSmallDisplay.innerText = ongoingOperation.join('');

    if (ongoingOperation.length > 2) {
      console.log('ongoingOperation length = 3: ' + ongoingOperation.length)
      ongoingOperation.pop();
      console.log(ongoingOperation);
      console.log(eval(ongoingOperation.join('')));
      calcBigDisplay.innerText = eval(ongoingOperation.join(''));
      ongoingOperationChunk.push(calcBigDisplay.innerText);
      console.log(ongoingOperationChunk);
    }

  };
});



multiplyBtn.addEventListener('click', () => {
  console.log('multiply was pressed');
});
eraserBtn.addEventListener('click', () => {
  ongoingOperation.pop();
  calcSmallDisplay.innerText = ongoingOperation.join('');
});
minusBtn.addEventListener('click', () => {
  console.log('minus was pressed');
});



resultBtn.addEventListener('click', () => {
    // console.log('ongoingOperationChunk inside /: ' + ongoingOperationChunk);
    ongoingOperation.push(ongoingOperationChunk.join(''));
    ongoingOperationChunk = [];
    // console.log(ongoingOperation);
  if (ongoingOperation.length !== 0){
    calcSmallDisplay.innerText = ongoingOperation.join('');

    if (ongoingOperation.length > 2) {
      console.log('ongoingOperation length = 3: ' + ongoingOperation.length)
      ongoingOperation.pop();
      console.log(ongoingOperation);
      console.log(eval(ongoingOperation.join('')));
      calcBigDisplay.innerText = eval(ongoingOperation.join(''));
      ongoingOperationChunk.push(calcBigDisplay.innerText);
      console.log(ongoingOperationChunk);
    }

  };
});


percentBtn.addEventListener('click', () => {
  console.log('percent was pressed');
});
dotBtn.addEventListener('click', () => {
  console.log('dot was pressed');
});



for (let button of calculatorButtonWrapper.children) {

  button.addEventListener('click', () => {

    if (button.children[0].innerText == 'C') {
      ongoingOperation = [];
      ongoingOperationChunk = [];
      calcBigDisplay.innerText = '0';
      calcSmallDisplay.innerText = ongoingOperation;
    } else if (button.children[0].innerText !== ''){
      // console.log('pushing from lower');
      ongoingOperationChunk.push(button.children[0].innerText);
      console.log('ongoingOperationChunk: ' + ongoingOperationChunk);
      calcBigDisplay.innerText = ongoingOperationChunk.join('');
    }
    
  })
}

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(evt) {
    if (evt.keyCode == "13") {
        alert("You pressed 'enter'.");
    }
}