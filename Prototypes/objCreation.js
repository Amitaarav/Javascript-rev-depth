
// Factory function/ Pattern
// function createStudent(studetName,studentAge){
//     const stdObj = {};
//     stdObj.name = studetName
//     stdObj.age = studentAge
//     stdObj.checkAge = function(){
//         if(this.age > 18){
//             console.log("You are an adult")
//         }else{
//             console.log("You are a minor")
//         }
//     }
//     return stdObj

// }

function createStudent(studetName,studentAge){
    const stdObj = Object.create(studentTask);
    stdObj.name = studetName
    stdObj.age = studentAge
    return stdObj

}



const studentTask = {
    checkAge: function(){
        if(this.age > 18){
            console.log("You are an adult")
        }else{
            console.log("You are a minor")
        }
    }
}

const student1 = createStudent("Amit",20)
const student2 = createStudent("John",15)
const student3 = createStudent("Jane",25)


student1.checkAge()
student2.checkAge()
student3.checkAge()

// In js we can not use class inheritance like class createStudent extends sudent tasks
// but in js we use Object.create(studentTask)
// It does create a new object and link it to the prototype of studentTask


// base object: {} , empty object {} ---------------> Prototype ------> toString(), hasOwnProperty(), valueOf()
// Prototype is an object that is linked to the base object

// constructor(key) points to the function that is used to create the object

// we can say js is a prototype based language

const obj = {}

console.log(obj.toString());
