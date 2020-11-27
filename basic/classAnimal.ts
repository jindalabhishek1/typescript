export default class Animal {
  height: number;
  weight: number;
  legs: number;

  constructor(height: number, weight: number, legs: number) {
    this.height = height;
    this.weight = weight;
    this.legs = legs;
  }

  display(): void {
    console.log("Height: " + this.height);
    console.log("Weight: " + this.weight);
    console.log("Legs: " + this.legs);
  }
}