import NagyKep from "./NagyKep.js";

export default class LeptetesKezelo{
    #aktIndex;
    #lista = [];
    constructor(lista, szuloelem){
/* peldanyositani nagykep ostalyt, kezelni a leptetest */
        this.#lista = lista;
        this.#aktIndex = 0;
        this.szuloelem = szuloelem;
        this.jobbGombElem = document.querySelector(".jobb")

        this.balGombElem = document.querySelector(".bal")


        this.peldanyosit()

        this.esemenykezelo()
        this.kisKepKezeles()
    }

    kisKepKezeles(){
        window.addEventListener("kivalaszt",(event)=>{
            console.log(event.detail)
            this.#aktIndex=event.detail
            this.peldanyosit();
        })
    }

    esemenykezelo(){
        this.jobbGombElem.addEventListener("click",()=>{
            this.#aktIndex++;
            this.#aktIndex= this.#aktIndex % this.#lista.length;
            this.peldanyosit();
         
         })

         this.balGombElem.addEventListener("click", ()=>{
            this.#aktIndex--;
            if (this.#aktIndex < 0) {
                this.#aktIndex = this.#lista.length-1;
                
            }
            console.log(this.#aktIndex)
            this.peldanyosit()
            
         })
    }

    peldanyosit(){
        const NAGYKEP = new NagyKep(this.#lista[this.#aktIndex].cim,this.#lista[this.#aktIndex].src, this.#lista[this.#aktIndex].leiras,this.szuloelem)
    }

}


