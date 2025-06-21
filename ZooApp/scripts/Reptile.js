import { Animal } from "./Animal.js";

export class Reptile extends Animal {
    constructor(name, species, scaleType) {
        super(name, species)
        this.scaleType = scaleType
    }
}
