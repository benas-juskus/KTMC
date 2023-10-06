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

//Uzduotis 6

let taskSixDisplayElement = document.getElementById('task6');
let taskSixText = taskSixDisplayElement.textContent;

let startWithMExpression = /\b(m\w*)\b/gi;

let highlightedText = taskSixText.replace(startWithMExpression, '<strong>$1</strong>');

taskSixDisplayElement.innerHTML = highlightedText;

//Uzduotis 7

let taskSevenDisplayElement = document.getElementById('task7');
let taskSevenText = taskSevenDisplayElement.textContent;

let startWithTExpression = /\b(t\w*)\b/gi;

let highAndUpperText = taskSevenText.replace(startWithTExpression, (matchedWord) => {
    return `<strong>${matchedWord.toUpperCase()}</strong>`;
});

taskSevenDisplayElement.innerHTML = highAndUpperText;

//Uzduotis 8

let emailAddress = document.getElementById('task8text').textContent;
const taskEightResultDisplay = document.getElementById('task8result');

const userAndDomainExpression = /^([^@]+)@([^@]+)$/;

let emailParts = userAndDomainExpression.exec(emailAddress);
    emailParts.shift();

for (let part of emailParts) {
    let li = document.createElement('li');
    li.textContent = part;
    taskEightResultDisplay.appendChild(li);
};

//Uzduotis 9

let link = document.getElementById('link').textContent;

let protocolExpression = /^[^:]+/;
let protocol = protocolExpression.exec(link);
console.log(protocol[0]);

let domainExpression = /\/\/(?:[^./]+\.)*([^./]+\.[^./]+)/;
let domain = domainExpression.exec(link);
console.log(domain[1]);
let subDomainExpression = /\/\/([^./]+)./;
let subDomain = subDomainExpression.exec(link);
console.log(subDomain[1]);
let catalogueExpression = /\/\/[^\/]+(\/[^*]+\/)/;
let catalogue = catalogueExpression.exec(link);

let fileExpression = /\/(?!.*\/)+([^?]+)/;
let file = fileExpression.exec(link);

let parameterExpression = /\?([^?]+)/;
// let parameterExpression = /\?([^?.+]+)/;
let parameters = parameterExpression.exec(link);
// console.log(parameters)

let urlSegments = {
    Protocol: protocol[0],
    Domain: domain[1],
    SubDomain: subDomain[1],
    Catalogue: catalogue[1],
    File: file[1],
    Parameters: parameters[1]
};

const taskNineResultDisplay = document.getElementById('task9result');

for (let segment in urlSegments) {
    let li = document.createElement('li');
    li.textContent = `${segment}: ${urlSegments[segment]}`
    taskNineResultDisplay.appendChild(li);
}