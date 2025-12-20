// .primitive types (number, string, boolean)
// number
let a = 12
// string
let b = "hello"
// boolean
let c = true   //or false


// Array
let d= [1, 2, 3, "hello", true]
let e= [1, 2, 3, {name:"hello"}, true]

//touple
let f:[number, string]= [1, "hello"]

//enum

// enum Color {Red, Green, Blue}
// let backgroundColor= Color.Red

enum Color {
    Red="red", 
    Green="green", 
    Blue="blue"
}
// let backgroundColor= Color.Red



// any
// let g;

//unknown
let g: unknown;
g= 1;
g= true;

//is mai problem hoti hai yani ke phele app type check karo pher change karo 



//voild
// jo kuch return na kar raha ho

function logMessage(message:string): void {
    console.log(message);
}

//null
let h: null;

//undefined
let i: undefined;

//never
// jo kabhi bhi age ka code nahi chalne dega
function doSomething(): never {
    throw new Error();
}


//Type inference
let j= 10;
// j= "hello"  //error kyuki typescript ne infer kar liya hai ke j number hai

//Type annotation
let k: number;
k= 20;
 

//interface

interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
    gender?: string; //optional property

}
function greet(person: Person) {
    console.log(`Hello, ${person.name}`);
}


//extending interfaces
interface User {
    name: string;
    age: number;
    isEmployed: boolean;
    gender?: string; //optional property

}
function getData(User: User) {
    console.log(`Hello, ${User.name}`);
}
interface Employee extends User {
    employeeId: number;
}
function getEmployeeData(employee: Employee) {
    console.log(`Employee ID: ${employee.employeeId}, Name: ${employee.name}`);
}



// type aliases
type Animal = number | string | boolean;

let pet: Animal;


// union types  |  
let q: number | string;
q= 10;
q= "hello";


// intersection types &
type Address = {
    street: string;
    city: string;
}
type Contact = {
    email: string;
    phone: string;
}
type EmployeeDetails = Address & Contact;

let emptyDetails: EmployeeDetails = {
    street: "123 Main St",
    city: "Anytown",
    email: " hi",
    phone: "123-456-7890"
}


// class and object

class Bottle {
    //properties
    color: string = "blue";
    capacity: number = 500;
}
//object of class
let waterBottle = new Bottle();



// constructors
class HumanMaker {
    constructor(public name: string, public age: number, public isEmployed?: boolean, public theGender: string ="not specified") {
        if (!theGender){
            this.theGender= "not specified"
        }
        
    }
}
let person1 = new HumanMaker("Alice", 30);
let person2 = new HumanMaker("Bob", 25);



// this
class Counter {
    count: number = 0;
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
    private balance: number;
    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }
    public deposit(amount: number) {
        this.balance += amount;
    }
    public getBalance() {
        return this.balance;
    }
    protected withdraw(amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
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
    constructor(public readonly name:string){}

    changeName(newName:string){
        // this.name= newName; //error kyuki name readonly hai
    }
}
let myCar= new Car("Toyota");
// myCar.name= "Honda"; //error kyuki name readonly hai




// optional chaining
interface House {
    address: string;
    owner?: {
        name: string;
        age: number;
    }
}
let myHouse: House = {
    address: "123 Main St"
};


// Getter and Setter
class UserProfile {
    constructor(public username: string ) {}

    get(): string {
        return this.username;
    }   
    set(name: string) {
        this.username = name;
    }
}
let userProfile = new UserProfile("JohnDoe");
console.log(userProfile.get()); // Output: JohnDoe
userProfile.set("Jane");
console.log(userProfile.get()); // Output: Jane




// but the correct method is to use getter and setter with proper naming conventions
class UserAccount {
    constructor(public _username: string) {}
    get username(): string {
        return this._username;
    }
    set username(name: string) {
        this._username = name;
    }
}
let userAccount = new UserAccount("JohnDoe");
console.log(userAccount.username); // Output: JohnDoe
userAccount.username = "Jane";
console.log(userAccount.username); // Output: Jane



// static members
class Game {
    static version: string = "1.0.0";

    static getVersion(): string {
        return Game.version;
    }
}

console.log(Game.getVersion()); // Output: 1.0.0