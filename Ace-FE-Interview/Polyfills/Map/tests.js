const sample1 = [1,2,3,4,5];
const sample2 = new Array(10);
const sample3 = [1, , , , 2, , , 3, , , 4, , , 5];
const sample4 = {length:2,0:10,1:20,3:30,4:40,5:50};

const result1 = sample1.map((d) => d*2);
const result2 = sample2.map((d) => d*2);
const result3 = sample3.map((d) => d*2);
const result4 = Array.prototype.map.call(sample4,(d)=>d*2);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);