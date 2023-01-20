import { IAveCaminadora } from "./IAveCaminadora";

export class Avestruze implements IAveCaminadora {
    IAmAveCamino() {
        console.log("Yo Camino");
    }
    IAmAve() {
        console.log("Yo Soy un Ave");
    }
}