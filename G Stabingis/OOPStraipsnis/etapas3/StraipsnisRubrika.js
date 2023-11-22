import { Straipsnis } from "../etapas1/Straipsnis.js";

export class StraipsnisRubrika extends Straipsnis {

    constructor(rubrika, antraste, paveiksliukas, nuoroda, id) {
        super('', antraste, paveiksliukas, '');
        this.id = id;
        this.rubrika = rubrika;
        this.nuoroda = nuoroda;
    };

    /**
     * Šis metodas naudoja informaciją pateiktą per konstruktorių ir generuoja elementus informacijos atvaizdavimui.
     * @param {html elementas} destination nurodome elementą, į kurį bus įsegama Straipsnio Rubrikos informacija.
     */
    generuotiRubrika(destination) {
        let rubrikaName = document.createElement('h4');
        rubrikaName.textContent = this.rubrika;
        let image = document.createElement('img');
        image.src = this.paveiksliukas;
        image.style.width = '30%';
        let header = document.createElement('h1');
        
        this.sutrumpintiAntraste(header);

        let link = document.createElement('button');
        link.textContent = 'Skaityti plačiau';
        link.setAttribute('id', this.id);

        destination.appendChild(rubrikaName);
        destination.appendChild(image);
        destination.appendChild(header);
        destination.appendChild(link);
    }

    /**
     * Metodas patikrina ar antraštė yra ilgesnė nei 10 žodžių.
     * Jei sąlyga atitinka, grąžinama antraštė sutrumpinta iki 10 žodžių, jos pabaigoje pridėtas daugtaškis.
     * @param {string} header antraštės tektinė informacija.
     */
    sutrumpintiAntraste(header) {
        let shortenedHeader = this.antraste.split(' ')

        if (shortenedHeader.length > 10) {
            shortenedHeader = shortenedHeader.slice(0, 10).join(' ').concat(['...']);
            header.textContent = shortenedHeader;
        } else {
            header.textContent = this.antraste;
        }
    }
}