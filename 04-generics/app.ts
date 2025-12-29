// Generics

// hum aik function ko use karte waqt bata sakte hai ke function argument ko kis tarah se treat kare wo

//Gemerics function

function abcd <T> (a: T) {
    console.log(a);
}
abcd<string>("Hello Generics"); // Output: Hello Generics
abcd<number>(123); // Output: 123
abcd(123); // Output: 123
abcd<boolean>(true); // Output: true



// Generict interface

interface Halwa<T> {
    name: string;
    age: T;
}
let obj1: Halwa<number> = {
    name: "Alice",
    age: 30
};

let obj2: Halwa<string> = {
    name: "Bob",
    age: "Thirty"
};
console.log(obj1); // Output: { name: 'Alice', age: 30 }
console.log(obj2); // Output: { name: 'Bob', age: 'Thirty' }



// Generic class
class DataHolder<T> {
    constructor(public data: T) {}
}
let numberHolder = new DataHolder<number>(100);
let stringHolder = new DataHolder<string>("Generics in TypeScript");
console.log(numberHolder); // Output: DataHolder { data: 100 }
console.log(stringHolder); // Output: DataHolder { data: 'Generics in TypeScript' }