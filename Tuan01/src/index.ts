function hello(name: string): string {
  return `Hello, ${name}!`;
}

console.log(hello("200Lab"));

//1. Create a class Person with attributes name and age. 
// Write a method to display this information.
class Person {
  constructor(public name: string, public age: number) {}

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person = new Person("Tran Ngoc Huyen", 20);
console.log("==================Cau 1==================")
person.displayInfo();