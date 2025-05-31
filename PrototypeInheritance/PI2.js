// 10000 students
// we will consider n = 2

// let student1Name = 'X'
// let student1Age = 10

// let student2Name = "Y"  
// let student2Age = 20

const student3 = {
    name:"Amit",
    age:10,
    checkAge: function(){
        if(this.age < 4){
            return "Not Eligible"
        }
    }
};

const student4 = {
    name:"Aarav",
    age:3,
    checkAge: function(){
        if(this.age < 4){
            return "Not Eligible"
        }
    }
};


function createStudent(name,age){
    const obj = {};
    obj.name = name;
    obj.age = age;
    obj.checkAge = function(){
        if(obj.age < 4){
            return "Not Eligible"
        }
    }
    // console.log(obj);
    return obj
}

const student5 = createStudent('x',10);
const student6 = createStudent('y',3);

console.log(student5);
console.log(student6);