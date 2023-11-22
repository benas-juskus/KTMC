export class Straipsnis {

    constructor(pavadinimas, antraste, paveiksliukas, tekstas) {
        this.pavadinimas = pavadinimas;
        this.antraste = antraste;
        this.paveiksliukas = paveiksliukas;
        this.tekstas = tekstas;
    };

    /**
     * Šis metodas naudoja informaciją pateiktą per konstruktorių ir generuoja elementus informacijos atvaizdavimui.
     * Į elementus įsegama atitinkama paduota informacija.
     * @param {html elementas} destination nurodome elementą, į kurį bus įsegama straipsnio informacija.
     */
    generuotiStrapsni(destination) {
        let postName = document.createElement('small');
        postName.textContent = this.pavadinimas;
        let header = document.createElement('h1');
        header.textContent = this.antraste;
        let image = document.createElement('img');
        image.src = this.paveiksliukas;
        let text = document.createElement('p');
        text.textContent = this.tekstas;

        destination.appendChild(postName);
        destination.appendChild(header);
        destination.appendChild(image);
        destination.appendChild(text);
    }
}