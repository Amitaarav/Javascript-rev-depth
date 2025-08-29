//   Step-1: Put pan on gas
//   Step-2: Add water
//   Step-3: Once water start boilling add tea leaves
//   Step-4: Add Sugar
//   Step-5: After some time add Ginger or whatever u want to add
//   Step-6: Boil it for few mins and then pour it into cup

function putPan(){
    console.log("Step-1: Put pan on gas")
}

function addWater(){
    console.log("Step-2: Add water")
}

function addTeaLeaves(){
    console.log("Step-3: Once water start boilling add tea leaves")
}

function addSugar(){
    console.log("Step-4: Add Sugar")
}

function addGinger(){
    console.log("Step-5: After some time add Ginger or whatever u want to add")
}

function boil(){
    console.log("Step-6: Boil it for few mins and then pour it into cup")
}

function makingTea(){
    putPan();
    addWater();
    addTeaLeaves();
    addSugar();
    addGinger();
    boil();
}
console.time("Tea")
makingTea();
console.timeLog("Tea")