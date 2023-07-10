let operation = prompt("Enter the operation (+ , - , * , /):");
let num1 =Number(prompt("Enter the first number:"));
let num2 =Number(prompt("Enter the second number:"));
let result;

if (operation == "+") {
  result = num1 + num2;
} else if (operation == "-") {
  result = num1 - num2;
} else if (operation == "*") {
  result = num1 * num2;
} else if (operation == "/") {
  result = num1 / num2;
} else {
  console.log("Invalid operation entered.");
}

if (result !== undefined) {
  console.log("The result is: " + result);
}