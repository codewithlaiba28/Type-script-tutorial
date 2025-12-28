// function

function abcd (name:string, age:number , cb: (name:string)=> void) {
    cb(name);
}

abcd("Alice", 30, (name:string) => {
    console.log(`Hello, ${name}`);
}
)

// rest function

function sum(...numbers: number[]): void {
    console.log(numbers);
}
sum(1, 2, 3, 4, 5); // Output: [1, 2, 3, 4, 5]
    

// spread operator

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5, 6];
console.log(newArr); // Output: [1, 2, 3, 4, 5, 6]



// function overloading

//ts fnc signature

function add(a: number, b: number): void;
function add(a: string, b: string): void;

function add(a: any, b: any){
    if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else if (typeof a === "string" && typeof b === "string") {
        console.log(a + b);
    }
    else throw new Error("Invalid arguments");    
}
add(5, 10); // Output: 15
add("Hello, ", "World!"); // Output: Hello, World!


// optional parameter

function greet(name: string, greeting?: string): void {
    if (greeting) {
        console.log(`${greeting}, ${name}`);
    } else {
        console.log(`Hello, ${name}`);
    }
}

greet("Alice"); // Output: Hello, Alice
greet("Bob", "Good morning"); // Output: Good morning, Bob


// default parameter

function multiply(a: number, b: number = 2): void {
    console.log(a * b);
}   
multiply(5); // Output: 10
multiply(5, 3); // Output: 15

