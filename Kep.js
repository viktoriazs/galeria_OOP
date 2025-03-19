export default class Kep{
    #cim
    #src
    #leiras
    #index
    constructor(index, cim, src,leiras, szuloElem ){
        this.#index=index;
        this.#cim=cim;
        this.#src = src;
        this.#leiras=leiras;
        this.szuloElem=szuloElem;
        this.megjelenit();
        this.esemenykezelo();

    }

    esemenykezelo(){
        /* megfogjuk adott objektmho tartozo kep elemet */
        /* rateszunk kattintas esemenyt */
        this.kepElem=document.querySelector(".kep:last-child");
        this.kepElem.addEventListener("click", ()=>{/* function nevtelen fgg eseten egy esemenykezeloben a this arra a elemre mutat ami a esemenyt kivaltotta, olyasmi mint a event target, nyil fgg eseten a this arra az objektumra mutat ameyiknek a hatokoreben a nyilfgg szerepel */
            console.log(this.#index)
            /* a kiskep atadja at az infot magarol hogy o kicsoda, hanyadik a sorban, megmondja hogy o kicsoda */
            /* sajat esemenyt hozunk letre - */
            const e = new CustomEvent("kivalaszt",{detail:this.#index})
            window.dispatchEvent(e);

        })
    }

    megjelenit(){
        let html = `<div class="kep">
                        <img src="${this.#src}" alt="">


                    </div>`
        this.szuloElem.insertAdjacentHTML("beforeend",html);/* html dom objektmot hozz letre */

    }
}