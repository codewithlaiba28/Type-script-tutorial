"use strict";
// Abstract
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
console.log("Abstract Classes Example:");
let myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!
// function
function abcd(name, age, cb) {
    cb(name);
}
abcd("Alice", 30, (name) => {
    console.log(`Hello, ${name}`);
});
//# sourceMappingURL=app.js.map