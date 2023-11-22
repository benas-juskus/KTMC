import { loadAllPosts } from "./loadAllPosts.js";
import { Straipsnis } from "../../etapas1/Straipsnis.js";

/**
 * Funkcija tikrina kokiame html puslapyje vartotojas yra, 
 * ir pagal tai nusprendžia ar generuoti visų straipsnių sutrumpintą informaciją, 
 * ar visą vieno konkretaus straipsnio informaciją.
 * @param {array} source tai masyvas su visais straipsniais.
 */
export function pageLoader(source) {

    let location = window.location.pathname.split('/');

    if (location.slice(-1) == 'index.html') {

        loadAllPosts(source);

    } else {

        let newDiv = document.createElement('div');
        newDiv.classList.add('post');

        let backBtn = document.createElement('button');

        let aElement = document.createElement('a');
        aElement.href = '../index.html';
        aElement.textContent = 'Grizti atgal';

        backBtn.appendChild(aElement);
        newDiv.appendChild(backBtn);

        let pageId = location.slice(-1);
        pageId = pageId.slice(0, 1);
        pageId = pageId[0].split('');

        let post = source.find(post => post.id == pageId[0]);
        let newStraipsnis = new Straipsnis(
            post.post_name,
            post.post_header,
            post.image,
            post.text_content
        )

        let container = document.querySelector('.container');
        
        newStraipsnis.generuotiStrapsni(newDiv);
        container.appendChild(newDiv);
    };
}