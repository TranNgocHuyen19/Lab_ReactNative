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

// 2. Write a class Student extending Person with an 
// additional attribute grade. Add a method to
// display all info.
class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age);
  }

  displayAllInfo(): void {
    this.displayInfo();
    console.log(`Grade: ${this.grade}`);
  }
}

const student = new Student("Tran Ngoc Huyen", 20, "DHKTPM18A");
console.log("==================Cau 2==================")
student.displayAllInfo();

// 3. Create a class Car with properties brand, model, year. 
// Write a method to show car info.
class Car {
  constructor(public brand: string, public model: string, public year: number) {}

  showCarInfo(): void {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
  }
}

const car = new Car("Vinfast", "VF3", 2025)
console.log("==================Cau 3==================")
car.showCarInfo();