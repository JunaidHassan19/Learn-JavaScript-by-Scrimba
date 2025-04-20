// Create a function, add(), that adds two numbers together and returns the sum

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4)); // should log 7
console.log(add(9, 102)); // should log 111

// More examples for better understanding
console.log(add(0, 5)); // should log 5
console.log(add(-3, 7)); // should log 4 (negative + positive)
console.log(add(-10, -5)); // should log -15 (negative + negative)
console.log(add(2.5, 3.5)); // should log 6 (decimal numbers)

// Examples with variables
let firstNumber = 10;
let secondNumber = 20;
console.log(add(firstNumber, secondNumber)); // should log 30

// Using the function in real-world scenarios
let priceOfItem = 25.99;
let taxAmount = 2.1;
let totalPrice = add(priceOfItem, taxAmount);
console.log("Total price including tax: $" + totalPrice); // should log "Total price including tax: $28.09"
