"use strict";
// function
Object.defineProperty(exports, "__esModule", { value: true });
function abcd(name, age, cb) {
    cb(name);
}
abcd("Alice", 30, (name) => {
    console.log(`Hello, ${name}`);
});
// rest function
function sum(...numbers) {
    console.log(numbers);
}
sum(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
// spread operator
let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        console.log(a + b);
    }
    else
        throw new Error("Invalid arguments");
}
add(5, 10); // Output: 15
add("Hello, ", "World!"); // Output: Hello, World!
//# sourceMappingURL=app.js.map