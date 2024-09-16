// variables
let remove = document.getElementById("remove");
let percent = document.getElementById("percent");
let division = document.getElementById("division");
let multiplication = document.getElementById("multiplication");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let equal = document.getElementById("equal");

// display for the calculator
let calculation = document.querySelector(".calculation");
let finalResult = document.querySelector(".final-result");
calculation.textContent = "2";

//clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  calculation.textContent = "";
  finalResult.textContent = "0";
});
// numbers button
// const buttons = querySelectorAll("button");
document.querySelectorAll("button").forEach((button) => {
  if (
    button.classList.contains("number") ||
    button.id === "plus" ||
    button.id === "minus" ||
    button.id === "division" ||
    button.id === "multiplication"
  ) {
    button.addEventListener("click", () => {
      calculation.textContent += button.textContent;
    });
  }
});

// functions for mathematical calculations

function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

// variables for mathematical calculations
let firstNumber = 0;
let operator = "+";
let secondNumber = 0;

// operator function

function operate(operator, firstNumber, secondNumber) {
  if (operator == "+") {
    return add(firstNumber, secondNumber);
  } else if (operator == "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator == "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator == "/") {
    return divide(firstNumber, secondNumber);
  }
}

console.log(operate("*", 10, 2));
