export default class NagyKep{
    #cim
    #src
    #leiras
    constructor(cim, src,leiras, szuloElem ){
        this.#cim=cim;
        this.#src = src;
        this.#leiras=leiras;
        this.szuloElem=szuloElem;
        this.megjelenit();

    }

  

    megjelenit(){
        let html = `<div class="nagy">
                        <h2>${this.#cim}</h2>
                        <img src="${this.#src}" alt="">
                        <p>${this.#leiras}</p>


                    </div>`
       /*  this.szuloElem.insertAdjacentHTML("beforeend",html);/ *//* * html dom objektmot hozz letre */
            this.szuloElem.innerHTML=html;
    }
}