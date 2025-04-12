let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "I just finished a new project.",
];

/*
// DRY - Don't repeat yourself
console.log(messages[0]);
console.log(messages[1]);
console.log(messages[2]);
console.log(messages[3]);
*/

// Loop through the messages array and print each message
for (let i = 0; i < messages.length; i++) {
  console.log(messages[i]);
}

// EXAMPLE 1: Looping through array and modifying data
console.log("\n--- EXAMPLE 1: Numbers multiplied by 2 ---");
const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// EXAMPLE 2: Using a for loop with an if condition
console.log("\n--- EXAMPLE 2: Even numbers only ---");
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i] + " is even");
  }
}

// EXAMPLE 3: Creating a new array from existing array
console.log("\n--- EXAMPLE 3: Creating a new array ---");
const fruits = ["Apple", "Orange", "Banana", "Mango"];
const fruitLengths = [];
for (let i = 0; i < fruits.length; i++) {
  fruitLengths.push(fruits[i].length);
}
console.log("Fruit names:", fruits);
console.log("Lengths of fruit names:", fruitLengths);

// EXAMPLE 4: Counting/summing with a loop
console.log("\n--- EXAMPLE 4: Summing array values ---");
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Numbers:", numbers);
console.log("Sum of all numbers:", sum);

// EXAMPLE 5: Looping backwards through an array
console.log("\n--- EXAMPLE 5: Reverse loop ---");
for (let i = messages.length - 1; i >= 0; i--) {
  console.log(`Message ${i + 1}: ${messages[i]}`);
}

// EXAMPLE 6: Nested loops with arrays
console.log("\n--- EXAMPLE 6: Nested loops with 2D array ---");
const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let row = 0; row < grid.length; row++) {
  let rowOutput = "";
  for (let col = 0; col < grid[row].length; col++) {
    rowOutput += grid[row][col] + " ";
  }
  console.log(rowOutput);
}
