const arr = [1, 2, 3, 4, 5]

const result =myMap(arr,transFormArr);
console.log(result);
function transFormArr(element, index, meraArr) {
    const met = element * 2;
    return {index: index, element:met, meraArr:meraArr}; // return element * 2;
}
function myMap(dataArr,callBackFn){
    // implement myMap
    let finalArr = [];
    for(let i=0;i<dataArr.length;i++){
        finalArr.push(callBackFn(dataArr[i],i,dataArr));
    }
    return finalArr;
}