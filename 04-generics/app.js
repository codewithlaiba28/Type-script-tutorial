"use strict";
// Generics
Object.defineProperty(exports, "__esModule", { value: true });
// hum aik function ko use karte waqt bata sakte hai ke function argument ko kis tarah se treat kare wo
//Gemerics function
function abcd(a) {
    console.log(a);
}
abcd("Hello Generics"); // Output: Hello Generics
abcd(123); // Output: 123
abcd(123); // Output: 123
abcd(true); // Output: true
let obj1 = {
    name: "Alice",
    age: 30
};
let obj2 = {
    name: "Bob",
    age: "Thirty"
};
console.log(obj1); // Output: { name: 'Alice', age: 30 }
console.log(obj2); // Output: { name: 'Bob', age: 'Thirty' }
// Generic class
class DataHolder {
    data;
    constructor(data) {
        this.data = data;
    }
}
let numberHolder = new DataHolder(100);
let stringHolder = new DataHolder("Generics in TypeScript");
console.log(numberHolder); // Output: DataHolder { data: 100 }
console.log(stringHolder); // Output: DataHolder { data: 'Generics in TypeScript' }
//# sourceMappingURL=app.js.map