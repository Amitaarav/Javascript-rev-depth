function Person(){
    const person1 = new Person();

    console.log(Object.getPrototypeOf(person1)); // Logs the prototype of person1
}
Person()