/**
 * Input : a.b.c.d.e
 * output : {a : {b : {c : {d : e}}}}
 */

const inputString = "a.b.c.d.e";

function unpack(str){
    const strArray =  str.split(".");

    let obj = {};
    strArray.forEach(function(char){
        const newObj = {[char]: obj}
        obj = newObj
    })
    return obj;
}

const output = unpack(inputString);
console.log(output);

// 
function Person(name) {
    this.name = name;
  }
  
  const person1 = new Person("Amit");
  console.log(Object.getPrototypeOf(person1) === Person.prototype ); // true

  // Here Person is a function 
  // And person1 is a new object created by calling new Person("Amit")

  // the "new"

  // Prototype Chain
  console.log(Person.prototype)
  console.log(Object.getPrototypeOf(person1))

  Person.prototype.greet = function(){
    console.log("Hello " + this.name);
  }

  person1.greet(); 


  console.log(Array.length)// 1
  console.log(Array.prototype.length) // 0

  const arr = [] // new Array
  
  obj.__proto__ = Person.prototype