import { Straipsnis } from "../etapas1/Straipsnis.js";

export class StraipsnisRubrika extends Straipsnis {

    constructor(rubrika, antraste, paveiksliukas, nuoroda) {
        super('', paveiksliukas, antraste);
        this.rubrika = rubrika;
        this.nuoroda = nuoroda;
    }

    generuotiRubrika(destination) {
        let rubrikaName = document.createElement('h4');
        rubrikaName.textContent = this.rubrika;
        let image = document.createElement('img');
        image.src = this.paveiksliukas;
        image.style.width = '30%';
        let header = document.createElement('h1');
        let shortenedHeader = this.antraste.split(' ')

        if (shortenedHeader.length > 10) {
            shortenedHeader = shortenedHeader.slice(0, 10);
            shortenedHeader.push('...');
            shortenedHeader = shortenedHeader.join(' ');
        }

        header.textContent = shortenedHeader;
        let link = document.createElement('a');
        link.textContent = 'Skaityti plačiau';
        link.href = this.nuoroda;

        destination.appendChild(rubrikaName);
        destination.appendChild(image);
        destination.appendChild(header);
        destination.appendChild(link);
    }
}