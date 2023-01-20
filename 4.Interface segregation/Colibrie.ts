import { IAveVoladora } from "./IAveVoladora";

export class Colibrie implements IAveVoladora {
    IAmAveVoladora() {
        console.log("Yo Vuelo");
    }
    IAmAve() {
        console.log("Yo Soy un Ave");
    }
}