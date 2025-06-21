export class Animal {
    #name
    #species
    #hungry
    #hungryInterval
    #isAlive

    constructor(name, species) {
        this.#name = name
        this.#species = species
        this.#hungry = Math.floor(Math.random() * 6) + 15;
        this.#isAlive = true

        this.isDead = setInterval(() => {

            if (this.#isAlive === false) {
                clearInterval(this.isDead)
                return
            }
            if (this.#hungry > 0) {
                this.#hungry--
                if (this.#hungry < 4) {
                    console.log(`${this.#name} Im hungry ${this.#hungry}/10! Please feed me Sir!`);
                }
            } else {
                this.#isAlive = false
                console.log(`${this.#name} is dead!`);
                clearInterval(this.isDead)
                
            }
        }, 10000)
    } 

    get isAlive() {
        if (this.#isAlive) {
            console.log(`${this.#name} is alive!}`);
        } else {
            console.log(`${this.#name} is acctualy dead.`);
            
        }
            
        
    }

    feed() {
        if (!this.#isAlive) {
            console.log(`${this.#name} is dead and cannot be fed.`);
            return;
        }
        this.#hungry = 10;
        console.log(`${this.#name} has been fed! Hunger: ${this.#hungry}/10`);
    }
    
    

    

    get name() {
        return this.#name
    }

    get species() {
        return this.#species
    }

    get hungry() {
        return this.#hungry
    }



    greeting() {
        return `Hello! My name is ${this.name} and im ${this.species}!`
    }
}

