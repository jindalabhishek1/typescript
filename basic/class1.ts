import Animal from './classAnimal';

interface AnimalProperties {
  name: string;
  color: string;
  height: number;
  weight: number;
  legs: number;
}

class Dog extends Animal implements AnimalProperties{
  name: string;
  color: string;
  constructor(AnimalProperties) {
    super(AnimalProperties.height, AnimalProperties.weight, AnimalProperties.legs);
    this.name = AnimalProperties.name;
    this.color = AnimalProperties.color;
  }

  displayAll(): void {
    this.display();
    console.log("Name: " + this.name);
    console.log("Color: " + this.color);
  }
}

let animal1 = new Animal(120, 50, 4);
animal1.display();

const data:AnimalProperties = {name: "Bravo", color: "white", height: 140, weight: 50, legs: 4}

let dog1 = new Dog(data);
dog1.displayAll();
