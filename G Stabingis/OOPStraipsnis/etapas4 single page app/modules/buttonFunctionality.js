
import { Straipsnis } from "../../etapas1/Straipsnis.js";
import { loadAllPosts } from "./loadAllPosts.js";

/**
 * Šis metodas generuoja ir pakeičia vartotojui matomą vaizdą, 
 * priklausomai nuo mygtuko ID, kuris susietas su straipnsio ID.
 * @param {array} source tai masyvas su visais straipsniais.
 */
export function buttonFunctionality(source) {

    let container = document.querySelector('.container');

    let buttons = document.querySelectorAll('button');
    for (let btn of buttons) {
        btn.addEventListener('click', () => {

            let newDiv = document.createElement('div');
            newDiv.classList.add('post');

            let backBtn = document.createElement('button');
            backBtn.textContent = 'Grįžti atgal';
            backBtn.addEventListener('click', () => {
                container.innerHTML = '';
                loadAllPosts(source);
            });
            newDiv.appendChild(backBtn);

            let post = source.find(post => post.id == btn.id);
            let newStraipsnis = new Straipsnis(
                post.post_name,
                post.post_header,
                post.image,
                post.text_content
            )

            container.innerHTML = '';
            newStraipsnis.generuotiStrapsni(newDiv);
            container.appendChild(newDiv);
        })
    }

};