let student1 = {
    name: "Ashok",
    age: 20,
    checkAge: function() {
        if (this.age >= 18) {
            console.log(`${this.name} is an adult.`);
        } else {
            console.log(`${this.name} is a minor.`);
        }
    }
}

// using function constructor to create a new object


// factory function to create a student object
function createStudent(studentName, studentAge){
    //const obj = {}; // create an empty object
    const obj = Object.create(studentTask); // create a new object with studentTask as prototype
    obj.name = studentName;
    obj.age = studentAge;

    // if 100+ students are there, then this function will be called 100+ times, which is not efficient in terms of performance and memory
    // obj.checkAge = function() {
    //     if (this.age >= 18) {
    //         console.log(`${this.name} is an adult.`);
    //     } else {
    //         console.log(`${this.name} is a minor.`);
    //     }
    // };
    return obj;
}

const studentTask = {
    checkAge: function() {
        if (this.age >= 18) {
            console.log(`${this.name} is an adult.`);
        } else {
            console.log(`${this.name} is a minor.`);
        }
    }
}

let student2 = createStudent("Ravi", 17);
console.log(student2);
student2.checkAge(); // Ravi is a minor

let student3 = createStudent("Sudheer", 20);
console.log(student3);
student3.checkAge(); // Sudheer is an adult

// linking is achieved by prototype chaining
// student2 and student3 have access to the checkAge method from studentTask prototype

// Using the prototype to add a method

//base Object : Object --> {} --> hidden functionality
// prototype Object : Object.prototype --> {} --> hidden functionality
