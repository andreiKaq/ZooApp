import { Animal } from "./Animal.js";

export class Mammal extends Animal {
    constructor (name, species, furColor) {
        super(name, species)
        this.furColor = furColor
    }

}

 