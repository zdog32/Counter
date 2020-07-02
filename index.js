function count(){
    number = number + 1;
    displayNumber.innerText = number;
}
function uncount(){
    number = number - 1;
    displayNumber.innerText = number;
}
function square(){
    number = number * number;
    displayNumber.innerText = number;
}
function reset(){
    number = 0;
    displayNumber.innerText = number;
}
function half(){
    number = number / 2;
    displayNumber.innerText = number;
}
var displayNumber = document.querySelector("#displayNumber");
var number = 0;
