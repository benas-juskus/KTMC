import { StraipsnisRubrika } from "../../etapas3/StraipsnisRubrika.js";
import { buttonFunctionality } from "./buttonFunctionality.js";

/**
 * Funkcija generuoja straipsnius pagal paduotą šaltinį ir įsega juos į puslapio .container elementą.
 * @param {array} source tai masyvas su visais straipsniais.
 */
export function loadAllPosts(source) {

    let container = document.querySelector('.container');

    for (let post of source) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('post');
        let newRubrika = new StraipsnisRubrika(
            post.rubrika,
            post.post_header,
            post.image,
            post.link,
            post.id
        );
        newRubrika.generuotiRubrika(newDiv);
        container.appendChild(newDiv);
    }
    buttonFunctionality(source);
}