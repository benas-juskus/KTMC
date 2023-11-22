/**
 * Šis metodas generuoja nuorodas mygtukų paspaudimui, 
 * priklausomai nuo mygtuko ID ir susieja su straipnsiu 
 * į kurį vartotojas bus nuvestas po paspaudimo.
 */
export function buttonFunctionality() {

    let buttons = document.querySelectorAll('button');
    for (let btn of buttons) {

        let aElement = document.createElement('a');
        aElement.textContent = 'Skaityti plačiau';
        aElement.href = `./pages/${btn.id}.html`;
        btn.innerText = '';
        btn.appendChild(aElement);
    }
};