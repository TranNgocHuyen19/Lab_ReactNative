function hello(name: string): string {
    return `Hello, ${name}!`;
}

console.log(hello("200Lab"));

//1. Create a class Person with attributes name and age. 
// Write a method to display this information.
class Person {
    constructor(public name: string, public age: number) { }

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
    constructor(public brand: string, public model: string, public year: number) { }

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
    constructor(public width: number, public height: number) { }

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
    constructor(public title: string, public author: string, public year: number) { }

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
class Product {
    constructor(public name: string, public price: number) { }
}
const products: Product[] = [
    new Product("Laptop", 1500),
    new Product("Phone", 800),
    new Product("Tablet", 300),
    new Product("Charger", 50),
    new Product("Headphones", 120)
];
const expensiveProducts = products.filter(product => product.price > 100);
console.log("==================Cau 8==================")
console.log("Products with price > 100:");
expensiveProducts.forEach(product => {
    console.log(`Name: ${product.name}, Price: ${product.price}`);
});

// 9. Define an interface Animal with name and method sound().
interface Animal {
    name: string;
    sound(): string;
}
class Dog implements Animal {
    constructor(public name: string) { }
    sound(): string {
        return "Gau gauuuu!";
    }
}

const dog = new Dog("Mực");
console.log("==================Cau 9==================")
console.log(`${dog.name} says: ${dog.sound()}`);
// 10. Create a class Account with public, private and readonly fields.
class Account {
    public accountNumber: string;
    private balance: number;
    readonly accountType: string;

    constructor(accountNumber: string, initialBalance: number, accountType: string) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.accountType = accountType;
    }

    deposit(amount: number): void {
        this.balance += amount;
        console.log(`Deposited: ${amount}, New Balance: ${this.balance}`);
    }

    getBalance(): number {
        return this.balance;
    }
}

const account1 = new Account("123456789", 1000, "Savings");
console.log("==================Cau 10==================")
console.log(`Account Number: ${account1.accountNumber}`);
console.log(`Account Type: ${account1.accountType}`);
console.log(`Initial Balance: ${account1.getBalance()}`);

// 11. Create a base class Animal. Extend Dog and Cat classes 
// with methods bark() and meow().
class Animal2 {
    constructor(public name: string) { }

    makeSound(): string {
        return "Some generic animal sound";
    }
}
class Dog2 extends Animal2 {
    bark(): string {
        return `${this.name} says: Gâu!`;
    }
}
class Cat extends Animal2 {
    meow(): string {
        return `${this.name} says: Meow!`;
    }
}
const dogg = new Dog2("Buddy");
const cat1 = new Cat("Whiskers");
console.log("==================Cau 11==================")
console.log(dogg.bark());
console.log(cat1.meow());

// 12. Define interfaces Flyable and Swimmable. Implement them in Bird and Fish classes.
interface Flyable {
    fly(): string;
}
interface Swimmable {
    swim(): string;
}
class Bird implements Flyable {
    constructor(public name: string) { }
    fly(): string {
        return `${this.name} is flying!`;
    }
}
class Fish implements Swimmable {
    constructor(public name: string) { }
    swim(): string {
        return `${this.name} is swimming!`;
    }
}
const bird = new Bird("Chim bồ câu");
const fish = new Fish("Cá chép");
console.log("==================Cau 12==================")
console.log(bird.fly());
console.log(fish.swim());
// 13. Create an abstract class Shape with method area(). 
// Implement Square and Circle.
abstract class Shape {
    abstract area(): number;
}
class Square extends Shape {
    constructor(private side: number) {
        super();
    }

    area(): number {
        return this.side * this.side;
    }
}
class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}
const square = new Square(4);
const circle = new Circle(3);
console.log("==================Cau 13==================")
console.log(`Square Area: ${square.area()}`);
console.log(`Circle Area: ${circle.area().toFixed(2)}`);
// 14. Create a base class Employee. Extend Manager and Developer
//  with specific methods.
class Employee {
    constructor(public name: string, public position: string) { }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Position: ${this.position}`);
    }
}

class Manager extends Employee {
    constructor(name: string) {
        super(name, "Manager");
    }

    manage(): void {
        console.log(`${this.name} is managing the team.`);
    }
}
class Developer extends Employee {
    constructor(name: string) {
        super(name, "Developer");
    }

    code(): void {
        console.log(`${this.name} is writing code.`);
    }
}
const manager = new Manager("Nguyen Van A");
const developer = new Developer("Nguyen Van B");
console.log("==================Cau 14==================")
manager.displayInfo();
developer.displayInfo();
manager.manage();
developer.code();
// 15. Create a Library class that can store Book and User objects. 
// Add method to add books.
class Library {
    private books: Book[] = [];
    private users: User[] = [];

    addBook(book: Book): void {
        this.books.push(book);
        console.log(`Added book: ${book.title}`);
    }
    addUser(user: User): void {
        this.users.push(user);
        console.log(`Added user: ${user.name}`);
    }

    displayBooks(): void {
        console.log("Books in library:");
        this.books.forEach(book => book.displayInfo());
    }
}
const library = new Library();
console.log("==================Cau 15==================")
library.addBook(new Book(" Head First JavaScript Programming_ A Brain-Friendly Guide-O’Reilly Media (2014)", "F. Scott Fitzgerald", 1925));
library.addUser(new User("John Doe"));
library.displayBooks();
// 16. Create a generic class Box that can store any type of value.
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}
const stringBox = new Box<string>("Hello, World!");
const numberBox = new Box<number>(42);
console.log("==================Cau 16==================")
console.log(`String Box Value: ${stringBox.getValue()}`);
console.log(`Number Box Value: ${numberBox.getValue()}`);
// 17. Write a singleton Logger class that logs messages to console.

class Logger {
    private static instance: Logger;

    private constructor() { }

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`Log: ${message}`);
    }
}
const logger = Logger.getInstance();
console.log("==================Cau 17==================")
logger.log("This is a singleton logger message.");
// 18. Create a static class MathUtil with methods add(), subtract(), multiply(), divide().
class MathUtil {
  private constructor() {}

  static add(a: number, b: number): number {
    return a + b;
  }
  static subtract(a: number, b: number): number {
    return a - b;
  }
  static multiply(a: number, b: number): number {
    return a * b;
  }
  static divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }
}
console.log("==================Cau 18==================")
console.log(`Addition: ${MathUtil.add(5, 3)}`);
console.log(`Subtraction: ${MathUtil.subtract(5, 3)}`);
console.log(`Multiplication: ${MathUtil.multiply(5, 3)}`);
console.log(`Division: ${MathUtil.divide(5, 3).toFixed(2)}`);
// 19. Demonstrate method overriding using polymorphism with Animal and subclasses.
class Animal3 {
    constructor(public name: string) { }

    makeSound(): string {
        return `${this.name} makes a sound.`;
    }
}
class Dog3 extends Animal3 {
    makeSound(): string {
        return `${this.name} gauuuuu!`;
    }
}   
class Cat2 extends Animal3 {
    makeSound(): string {
        return `${this.name} meoooo!`;
    }
}
const animal = new Animal3("Generic Animal");
const dog3 = new Dog3("Mực");
const cat2 = new Cat2("Cam");
console.log("==================Cau 19==================")
console.log(animal.makeSound());
console.log(dog3.makeSound());
console.log(cat2.makeSound());

// 20. Write a Vehicle interface and implement it in Car and Bike classes.
interface Vehicle {
    start(): void;
}
class Car2 implements Vehicle {
    constructor(public brand: string) { }

    start(): void {
        console.log(`${this.brand} car is starting.`);
    }
}
class Bike implements Vehicle {
    constructor(public brand: string) { }

    start(): void {
        console.log(`${this.brand} bike is starting.`);
    }
}
const car2 = new Car2("Toyota");
const bike = new Bike("Yamaha");
console.log("==================Cau 20==================")
car2.start();
bike.start();
// 21. Create a generic Repository class with methods add(), getAll().
class Repository<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
        console.log(`Added item: ${JSON.stringify(item)}`);
    }

    getAll(): T[] {
        return this.items;
    }
}
const userRepository = new Repository<User>();
userRepository.add(new User("Trần Ngọc Huyền"));
const productRepository = new Repository<Product>();
productRepository.add(new Product("Laptop", 15000000));
console.log("==================Cau 21==================")
console.log("Users in repository:");
userRepository.getAll().forEach(user => console.log(user.name));
console.log("Products in repository:");
productRepository.getAll().forEach(product => console.log(`${product.name} - ${product.price}`));
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