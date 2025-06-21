import { Animal } from './Animal.js';
import { Mammal } from './Mammal.js';
import { Bird } from './Bird.js';
import { Reptile } from './Reptile.js';
import { Zoo } from './Zoo.js';


const jack = new Mammal('Jack', 'Lion', 'Dark');
const lucy = new Mammal('Lucy', 'Tiger', 'Orange');
const flasko = new Bird('Flasko', 'Golub', 2.0);
const zeus = new Reptile('Zeus', 'Snake', 'Smooth');
const coco = new Bird('Coco', 'parrot', 1.2);
const python = new Reptile('python', 'Snake', 'Cycloid')

const zoo = new Zoo()
 

zoo.addAnimals([jack, lucy, flasko, zeus, coco, python])

console.log(zoo.listAnimals())


