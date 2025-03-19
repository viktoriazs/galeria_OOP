import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import LeptetesKezelo from "./LeptetesKezelo.js";
import NagyKep from "./NagyKep.js";
import { OBJLISTA } from "./tomb.js";

let szuloElem = document.getElementsByClassName("galeria")[0]
let nkep = document.getElementsByClassName("kiemelt")[0]

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

/* const n1 = new Kep(obj[0].cim, obj[0].src,obj[0].leiras, nkep) */



 const KEPEK = new Kepek(OBJLISTA, szuloElem) 


 /* jobbra gombra kattintva leptet kepeket */
 /* 
 1. meg kell fogni job gombot
 2.kell egy esemenykezelo
 2.5. letre kell honi egy aktIndex kedeti erteke 0
 3.indexet kell noveni --OBJISTA hanyadik eemenel tartok
 */

 new LeptetesKezelo(OBJLISTA,nkep)
