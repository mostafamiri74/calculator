const result = document.getElementById("output-value");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

let lastOperation = "";
let firstNumber = 0;

const numbersFunc = function (e) {
  if (result.textContent.length > 15) return;

  let data = e.target.dataset.input;

  if (result.textContent === "0") {
    if (data === "0" || data === "00") return;
    else result.textContent = data;
  } else result.textContent += data;
};

const operatorFunc = function (e) {
  if (e.target.dataset.input === "clear") {
    result.textContent = 0;
  } else if (e.target.dataset.input === "backspace") {
    result.textContent = result.textContent.substring(
      0,
      result.textContent.length - 1
    );
  } else {
    firstNumber = Number(result.textContent);
    result.textContent = 0;
    lastOperation = e.target.dataset.input;
  }
};

const equalFunc = function (e) {
  if (lastOperation !== "") {
    let lastNumber = Number(result.textContent);
    switch (lastOperation) {
      case "+":
        result.textContent = firstNumber + lastNumber;
        break;
      case "-":
        result.textContent = firstNumber - lastNumber;
        break;
      case "*":
        result.textContent = firstNumber * lastNumber;
        break;
      case "/":
        result.textContent = firstNumber / lastNumber;
        break;
      case "%":
        result.textContent = firstNumber % lastNumber;
    }
    lastOperation = "";
  }
};

numbers.forEach((num) => num.addEventListener("click", numbersFunc));

operators.forEach((operator) =>
  operator.addEventListener("click", operatorFunc)
);

equal.addEventListener("click", equalFunc);
