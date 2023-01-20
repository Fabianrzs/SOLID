import { IAveCaminadora } from "./IAveCaminadora";
import { AveNadadora } from "./IAveNadadora";


export class Pinguino implements IAveCaminadora, AveNadadora {
    IAmAveNadadora() {
        console.log("Yo Nado");
    }
    IAmAveCamino() {
        console.log("Yo Camino");
    }
    IAmAve() {
        console.log("Yo Soy un Ave");
    }
}