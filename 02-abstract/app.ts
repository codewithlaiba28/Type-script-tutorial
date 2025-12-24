// Abstract

class Animal {
    constructor(public name: string) {}
    makeSound(): void {
        console.log("Some generic animal sound");
    }   
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}
console.log("Abstract Classes Example:");
let myDog = new Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!




// function

function abcd (name:string, age:number , cb: (name:string)=> void) {
    cb(name);
}

abcd("Alice", 30, (name:string) => {
    console.log(`Hello, ${name}`);
}
)