function handleInput(event){
    const value = event.target.value;
    console.log("Value:", value);

    const searchTermDOM = document.getElementById("search")
    searchTermDOM.innerHTML = value;
    makeAPIcallFor(value);
}

function makeAPIcallFor(data){
    console.log("Fetching data for", data);
}

function debouncrFn(callbackFn, delay){
    // setTimeout callSe
    // prevSet
    let timeOutId = "";
    return function (){
        clearFunction(timeOutId);
        timeOutId = setTimeOut(function(){}, delay);
    }

}