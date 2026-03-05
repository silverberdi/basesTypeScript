interface Character {
  name: string;
  hp: number;showHp:() => void;
}

const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
}   

const strider: Character = {
  name: 'Strider',
  hp: 100,
  showHp() {
    console.log(`${this.name} has ${this.hp} HP.`);
  }
};

strider.showHp();
healCharacter(strider, 20);
strider.showHp();

console.group('Tarea');

interface Address {
    street: string;
    city: string;
    country: string;
}

interface SuperHero {
    name: string;
    age: number;
    address: Address;
    showAddress: () => string;
}

const superHero: SuperHero = {
    name: 'Superman',
    age : 30,
    address: {
        street: 'Main St',
        city: 'Metropolis',
        country: 'USA'
    }, 
    showAddress() {
        return (`${this.name} lives at ${this.address.street}, ${this.address.city}, ${this.address.country}.`);
    }
}


const address = superHero.showAddress();

console.log(address);
export{};