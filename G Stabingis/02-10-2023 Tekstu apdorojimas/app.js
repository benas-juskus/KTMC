//Uzduotis 1

function elementSearch(element, tag, attribute, result) {

    for (let child of element.children) {
        if (child.tagName == tag) {
            result.push(child.getAttribute(attribute));
        } 
        
        elementSearch(child, tag, attribute, result);
    }
};

let taskOneText = document.getElementById('task1');
let aTag = 'A';
let hrefAttribute = 'href'
let linkList = [];

elementSearch(taskOneText, aTag ,hrefAttribute, linkList);


const taskOneResultDisplay = document.getElementById('task1result');
taskOneResultDisplay.innerHTML = linkList.join('<br>');

//Uzduotis 2

let taskTwoText = document.getElementById('task2').innerHTML;

let hrefExpression = /<a\s+[^>]*href="([^"]*)"[^>]*>/g;

let hrefValues = [];

let match;

while ((match = hrefExpression.exec(taskTwoText)) !== null) {
  hrefValues.push(match[1]);
}

const taskTwoResultDisplay = document.getElementById('task2result');
taskTwoResultDisplay.innerHTML = hrefValues.join('<br>');

//Uzduotis 3

let taskThreeContent = document.getElementById('task3');
let imageTag = 'IMG';
let srcAttribute = 'src'
let imgList = [];

elementSearch(taskThreeContent, imageTag, srcAttribute, imgList);

const taskThreeResultDisplay = document.getElementById('task3result');

for (let image of imgList) {
    let li = document.createElement('li');
    li.innerHTML = image;
    taskThreeResultDisplay.appendChild(li);
};

//Uzduotis 4

let taskFourText = document.getElementById('task4').innerHTML;


let imgExpression = /<img\s+[^>]*src="([^"]*)"[^>]*>/g;

let imgValues = [];

let matchTwo;

while ((matchTwo = imgExpression.exec(taskFourText)) !== null) {
    imgValues.push(matchTwo[1]);
}

const taskFourResultDisplay = document.getElementById('task4result');

for (let image of imgValues) {
    let li = document.createElement('li');
    li.innerHTML = image;
    taskFourResultDisplay.appendChild(li);
};

//Uzduotis 5

let taskFiveText = document.getElementById('task5').innerText;

let startWithAExpression = /\ba\w*\b/g;

let startWithAValues = [];

let matchStartWithA;

while ((matchStartWithA = startWithAExpression.exec(taskFiveText)) !== null) {
    startWithAValues.push(matchStartWithA[0]);
};

const taskFiveResultDisplay = document.getElementById('task5result');
taskFiveResultDisplay.innerText = startWithAValues.join(', ');