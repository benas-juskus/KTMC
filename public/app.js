let btn = document.getElementById('btn');
let card = document.getElementById('card');
let result = document.getElementById('result');
let newMsg = 'Thank you for clicking';
let secondMsg = 'Thank you for clicking again';
let addition = document.createElement('div');
addition.innerText = 'And again';

function btnClickResponse() {
    if (result.innerHTML == '') {
        result.innerHTML = newMsg
        return
    } if (result.innerHTML == newMsg) {
        result.innerHTML = secondMsg;
        return
    } if (result.innerHTML == secondMsg) {
        
        result.appendChild(addition);

        btn.addEventListener('click', function() {

            result.innerHTML = 'You can stop now';
            result.setAttribute('style', 'color: red');
            btn.setAttribute('disabled', '');
            btn.setAttribute('style', 'color: black');
            btn.innerText = 'No more clicky';

            let restart = document.createElement('button');
            restart.innerText = 'Restart me';
            restart.setAttribute('class', 'restart');
            card.appendChild(restart);

            restart.addEventListener('click', () => location.reload());
        })
    }
}

btn.addEventListener('click', function(){
    btnClickResponse();
    });