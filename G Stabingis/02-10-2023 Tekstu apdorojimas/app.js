//Uzduotis 1

function elementSearch(element, tag, result) {

    for (let child of element.children) {
        if (child.tagName == tag) {
            result.push(child.href);
        } 
        
        elementSearch(child, tag, result);
    }
};

let taskOneText = document.getElementById('task1');
let elementTag = 'A';
let linkList = [];

elementSearch(taskOneText, elementTag, linkList);

const taskOneResultDisplay = document.getElementById('task1result');
taskOneResultDisplay.innerHTML = linkList.join('<br>');