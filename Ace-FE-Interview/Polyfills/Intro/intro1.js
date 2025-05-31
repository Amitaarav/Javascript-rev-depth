// new feature in old browsers
// Js is link base language
function show(){
    const Amit = "Amit"
    console.log(Amit)
}

show()


const obj ={
    name:"Amit",
    show:function(){
        console.log(this.name)
    }
}

obj.show()


//explicitly setting this using .call().

// if we dont not know polyfill then we can use call method
 // 1. write a pure function first
 // 2. attach the same function in Prototype chain
 // 3. Use this bindings
// 4 . Re-visite the logic

// What is checked
// 1. understanding of map, filter
// 2. Analytical thinking
