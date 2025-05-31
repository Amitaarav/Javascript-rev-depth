const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function(){
    console.log(this)
    this.innerText = "From JS"
})

const input = document.getElementsByTagName('input')[0];

input.addEventListener("keyup", function(){
    console.log(this)
    console.log(this.value)
})

// const boxR = document.querySelector(".box-r");


