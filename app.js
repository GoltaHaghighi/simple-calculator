const cal  = document.querySelector(".calculate");
const clearAllInput  = document.querySelector(".clear-all");
const clearLastInput  = document.querySelector(".clear-last");
let displayBox = document.querySelector(".display");
let but = document.querySelectorAll(".but");

function showDisplay(e) {
    if (displayBox.innerHTML == 0 ) {
        return displayBox.innerHTML = e.target.innerText;
    }
    return displayBox.innerHTML += e.target.innerText;
    
}
function calculate() {
    displayBox.innerText = eval(displayBox.innerText);
}

function clearAll() {
    displayBox.innerText = "0";
}
function clearLast() {
    let text = displayBox.innerText;
    if (text.length === 1 ) {
        displayBox.innerText = "0";
    }else {
        displayBox.innerText = text.substring(0 , text.length-1);
    }
}
////////////////////////////////////////////////////////////
but.forEach(item =>{
    item.addEventListener("click" , showDisplay);
});

cal.addEventListener("click" , calculate);

clearAllInput.addEventListener("click" , clearAll);

clearLastInput.addEventListener("click" , clearLast);