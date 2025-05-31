const myArrow = () => {
    console.log(this)
}

myArrow();

function showMessage(){
    const newArrow = () => {
        console.log(this)
    }
    newArrow();
}
showMessage.call({}); 

const obj = {
    message: "Hello",
    // with arrow function `this` is not bound to the object
    // it takes `this` from its surrounding scope
    // which is the global scope
    greet2: function() {
        console.log(this.message)
    },
    // with regular function `this` is bound to the object
    greet: () => {
        console.log(this.message)
    }
}

obj.greet(); // print undefined , here this does not bind with the object instead it lexically bind with the global scope
obj.greet2(); // print Hello    
