const display = document.querySelector(".calculator__display");
const btnEqual = document.querySelector(".equal");
const btnNums = document.querySelectorAll(".number");

btnEqual.style.background = "yellow";

btnNums.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (isOperator) {
      display.value = '';
      isOperator = false;
    }
    console.log(e.target.innerHTML);
    display.value += e.target.innerHTML;
  });
});
const btnOpt = document.querySelectorAll(".operation");

let prevNum;
let isOperator;
let operation;

function calc() {
  switch(operation) {
    case '+': 
    display.value = +prevNum + (+display.value); 
    break;
    case '-': 
    display.value = +prevNum - (+display.value); 
    break;
    case 'x': 
    display.value = +prevNum * (+display.value); 
    break;
    case '/': 
    display.value = +prevNum / (+display.value); 
    break;
  }
}

btnOpt.forEach((element) => {
  element.addEventListener("click", (e) => {
    operation = e.target.innerHTML;
    isOperator = true;

    if (prevNum !== undefined) {
      calc();
    } 
    prevNum = display.value;
    
  });
});

btnEqual.addEventListener("click", e => {
 calc();
})