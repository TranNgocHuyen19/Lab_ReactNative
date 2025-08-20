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

// 4. Create a class Rectangle with width and height. 
// Write a method to calculate area and perimeter.
class Rectangle {
  constructor(public width: number, public height: number) {}

  calculateArea(): number {
    return this.width * this.height;
  }

  calculatePerimeter(): number {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 10);
console.log("==================Cau 4==================")
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);

// 5. Create a class BankAccount with balance. 
// Add methods deposit() and withdraw().

class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log("Số dư tiền không đủ để rút.");
    } else {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}, New Balance: ${this.balance}`);
    }
  }
}
const account = new BankAccount(1000);
console.log("==================Cau 5==================")
account.deposit(500);
account.withdraw(200);
// 6. Create a class Book with attributes title, author, year.
class Book {
  constructor(public title: string, public author: string, public year: number) {}

  displayInfo(): void {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
}
const book = new Book("Head First JavaScript Programming_ A Brain-Friendly Guide-O’Reilly Media", "Eric T. Freeman, Elisabeth Robson ", 2014);
console.log("==================Cau 6==================")
book.displayInfo();

// 7. Write a class User with private property name and getter/setter.
class User {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(newName: string) {
    this._name = newName;
  }
}
const user = new User("Trần Ngọc Huyền IUH");
console.log("==================Cau 7==================")
console.log(`User Name: ${user.name}`);
user.name = "Trần Ngọc Huyền";
console.log(`Updated User Name: ${user.name}`);
// 8. Create a Product class with name, price. Create an array of products and filter products with
// price > 100.
// 9. Define an interface Animal with name and method sound().
// 10. Create a class Account with public, private and readonly fields.
// 11. Create a base class Animal. Extend Dog and Cat classes with methods bark() and meow().
// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
// 13. Create an abstract class Shape with method area(). Implement Square and Circle.
// 14. Create a base class Employee. Extend Manager and Developer with specific methods.
// 15. Create a Library class that can store Book and User objects. Add method to add books.
// 16. Create a generic class Box that can store any type of value.
// 17. Write a singleton Logger class that logs messages to console.
// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
// 20. Write a Vehicle interface and implement it in Car and Bike classes.
// 21. Create a generic Repository class with methods add(), getAll().
// 22. Create a class Stack with push, pop, peek, isEmpty methods.
// 23. Create an interface Payment with method pay(amount). Implement CashPayment and
// CardPayment.
// 24. Create an abstract class Appliance with method turnOn(). Implement Fan and AirConditioner.
// 25. Create a class Shape with a static method describe().
// 26. Create a class Order with list of products. Add method to calculate total price.
// 27. Create a class Teacher that extends Person. Add subject attribute and introduce method.

// 28. Create a class Animal with protected method makeSound(). Extend Dog and Cat to override it.
// 29. Create an interface Movable with method move(). Implement it in Car and Robot.
// 30. Create a class School with list of Students and Teachers. Add method to display info.