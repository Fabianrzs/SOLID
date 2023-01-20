import { Paralelogramo } from "./Paralelogramo";

export class Cuadrado extends Paralelogramo {
    constructor(lado:number) {
        super(lado, lado);
    }
}