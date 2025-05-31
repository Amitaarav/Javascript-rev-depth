const str = "a.b.c.d.e"
const strArr = str.split(".")
console.log(strArr)
const strObj = strArr.reduceRight(callBack)

function callBack(acc,next) {

    return {[next]:acc}
}

console.log(strObj)