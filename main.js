import Kep from "./Kep.js";
import Kepek from "./Kepek.js";
import { obj } from "./tomb.js";

let szuloElem = document.getElementsByClassName("galeria")[0]
let nkep = document.getElementsByClassName("kiemelt")[0]

/* let k1 = new Kep(obj[0].cim, obj[0].src, szuloElem); */

const n1 = new Kep(obj[0].cim, obj[0].src,obj[0].leiras, nkep)

 const KEPEK = new Kepek(obj, szuloElem) 
