// console.log(this === window) // in node js the `window` is not defined

// console.log(globalThis)

function greet(){
    // "use strict"
    console.log(this)
    this.greeting = "Hello"
}

greet();

new greet(); // newly created object

// 3. Call method
greet.call({animal: "Dog"})

// 4. Apply method
greet.apply({animal: "Dog"})

// 5. Bind method
const boundGreet = greet.bind({animal: "Dog"})
boundGreet();

