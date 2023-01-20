import { IAveCaminadora } from "./IAveCaminadora";
import { AveNadadora } from "./IAveNadadora";
import { IAveVoladora } from "./IAveVoladora";


export class Pato implements IAveVoladora, IAveCaminadora, AveNadadora {
    IAmAveNadadora() {
        console.log("Yo Nado");
    }
    IAmAveCamino() {
        console.log("Yo Camino");
    }
    IAmAveVoladora() {
        console.log("Yo Vuelo");
    }
    IAmAve() {
        console.log("Yo Soy un Ave");
    }
}