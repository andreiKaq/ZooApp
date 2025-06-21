import { Animal } from "./Animal.js";

export class Bird extends Animal {
    constructor(name, species, wingSpan) {
        super(name, species) 
        this.wingSpan = wingSpan
    }
}

 