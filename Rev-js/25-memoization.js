const memoizedAddition = () => {
    let cache = {};// Cache to store previously calculated results
    // This cache will hold the results of previous calculations to avoid redundant computations
    return (value) => {
        if(value in cache){
            console.log("Fetching from cache:", value);
            return cache[value];
        } else {
            console.log("Calculating result");
            let result = value + 20
            cache[value] = result;
            return result;
        }
    }
}
const addition = memoizedAddition();
console.log(addition(20)); //output: 40 calculated
console.log(addition(20)); //output: 40 cached