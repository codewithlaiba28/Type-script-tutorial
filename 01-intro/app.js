"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// .primitive types (number, string, boolean)
// number
let a = 12;
// string
let b = "hello";
// boolean
let c = true; //or false
// Array
let d = [1, 2, 3, "hello", true];
let e = [1, 2, 3, { name: "hello" }, true];
//touple
let f = [1, "hello"];
//enum
// enum Color {Red, Green, Blue}
// let backgroundColor= Color.Red
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
// let backgroundColor= Color.Red
// any
// let g;
//unknown
let g;
g = 1;
g = true;
//is mai problem hoti hai yani ke phele app type check karo pher change karo 
//voild
// jo kuch return na kar raha ho
function logMessage(message) {
    console.log(message);
}
//null
let h;
//undefined
let i;
//never
// jo kabhi bhi age ka code nahi chalne dega
function doSomething() {
    throw new Error();
}
//Type inference
let j = 10;
// j= "hello"  //error kyuki typescript ne infer kar liya hai ke j number hai
//Type annotation
let k;
k = 20;
function greet(person) {
    console.log(`Hello, ${person.name}`);
}
function getData(User) {
    console.log(`Hello, ${User.name}`);
}
function getEmployeeData(employee) {
    console.log(`Employee ID: ${employee.employeeId}, Name: ${employee.name}`);
}
let pet;
// union types  |  
let q;
q = 10;
q = "hello";
let emptyDetails = {
    street: "123 Main St",
    city: "Anytown",
    email: " hi",
    phone: "123-456-7890"
};
// class and object
class Bottle {
    //properties
    color = "blue";
    capacity = 500;
}
//object of class
let waterBottle = new Bottle();
// constructors
class HumanMaker {
    name;
    age;
    isEmployed;
    theGender;
    constructor(name, age, isEmployed, theGender = "not specified") {
        this.name = name;
        this.age = age;
        this.isEmployed = isEmployed;
        this.theGender = theGender;
        if (!theGender) {
            this.theGender = "not specified";
        }
    }
}
let person1 = new HumanMaker("Alice", 30);
let person2 = new HumanMaker("Bob", 25);
// this
class Counter {
    count = 0;
    increment() {
        this.count++;
    }
    getCount() {
        return this.count;
    }
}
let counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1
// public, private, protected
class BankAccount {
    balance;
    constructor(initialBalance) {
        this.balance = initialBalance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    }
}
let myAccount = new BankAccount(1000);
myAccount.deposit(500);
console.log(myAccount.getBalance()); // Output: 1500
// myAccount.balance = 2000; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// myAccount.withdraw(300); // Error: Property 'withdraw' is protected and only accessible within class 'BankAccount' and its subclasses.
// optional
class Car {
    name;
    constructor(name) {
        this.name = name;
    }
    changeName(newName) {
        // this.name= newName; //error kyuki name readonly hai
    }
}
let myCar = new Car("Toyota");
let myHouse = {
    address: "123 Main St"
};
// Getter and Setter
class UserProfile {
    username;
    constructor(username) {
        this.username = username;
    }
    get() {
        return this.username;
    }
    set(name) {
        this.username = name;
    }
}
let userProfile = new UserProfile("JohnDoe");
console.log(userProfile.get()); // Output: JohnDoe
userProfile.set("Jane");
console.log(userProfile.get()); // Output: Jane
// but the correct method is to use getter and setter with proper naming conventions
class UserAccount {
    _username;
    constructor(_username) {
        this._username = _username;
    }
    get username() {
        return this._username;
    }
    set username(name) {
        this._username = name;
    }
}
let userAccount = new UserAccount("JohnDoe");
console.log(userAccount.username); // Output: JohnDoe
userAccount.username = "Jane";
console.log(userAccount.username); // Output: Jane
// static members
class Game {
    static version = "1.0.0";
    static getVersion() {
        return Game.version;
    }
}
console.log(Game.getVersion()); // Output: 1.0.0
//# sourceMappingURL=app.js.map