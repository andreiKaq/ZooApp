export class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimals(animals) {
        let count = 0
        animals.forEach(animal => { 
            this.animals.push(animal)
            count++
            
        });
        console.log(`Animal(s) added: ${count}`);
    }

    listAnimals() {
        console.log('In our zoo we have these animals:')
        this.animals.forEach(animal => {
            console.log(`${animal.name} and he is ${animal.species}`);
            
        })
        
    }

    getAnimalsBySpecies(species) {

        console.log(`List of animals who has this ${species}:`);
        
        let count = 1
        this.animals.forEach(animal => {
            if (animal.species === species) {
                console.log(`${count}. ${animal.name} is a ${animal.species}`)
                count++

            }
            
        })
    }

    feedAnimal(animal) {
        if (this.animals.includes(animal)) {
            animal.feed()
        } else {
            console.log('We dont have this animal in our zoo. ');
            
        }
    }

    removeAnimal(animal) {
        this.animals.splice(this.animals.indexOf(animal), 1)
        console.log(`${animal.name} was removed from animals list!`)
    }

    countAnimals() {
        return `Tottaly we have ${this.animals.length} animals left`
    }

}

