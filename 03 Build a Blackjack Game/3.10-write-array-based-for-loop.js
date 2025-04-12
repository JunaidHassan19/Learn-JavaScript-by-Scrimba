// Array-based For Loops in JavaScript
// Arrays are zero-indexed, meaning the first element is at position 0

// Example 1: Basic array iteration
let cards = [7, 3, 9];

// Create a for loop that logs out all the cards in the array
// Structure: for (initialization; condition; increment/decrement)
for (let i = 0; i < cards.length; i++) {
  // i = 0: First iteration, access cards[0] which is 7
  // i = 1: Second iteration, access cards[1] which is 3
  // i = 2: Third iteration, access cards[2] which is 9
  // i = 3: Loop stops because 3 is not less than cards.length (3)
  console.log(cards[i]);
}

// Example 2: Modifying array elements with a for loop
let numbers = [1, 2, 3, 4, 5];
console.log("Original numbers:", numbers);

for (let i = 0; i < numbers.length; i++) {
  // Double each number in the array
  numbers[i] = numbers[i] * 2;
}
console.log("Numbers after doubling:", numbers);

// Example 3: Finding elements in an array
let fruits = ["apple", "banana", "orange", "grape", "kiwi"];
let searchFruit = "orange";
let foundIndex = -1;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === searchFruit) {
    foundIndex = i;
    break; // Exit the loop once found
  }
}

if (foundIndex !== -1) {
  console.log(`Found ${searchFruit} at index ${foundIndex}`);
} else {
  console.log(`${searchFruit} not found in the array`);
}

// Example 4: Sum of all elements in an array
let scores = [85, 92, 78, 90, 88];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
  sum += scores[i]; // Add each score to the sum
}

let average = sum / scores.length;
console.log(`Sum of all scores: ${sum}`);
console.log(`Average score: ${average.toFixed(2)}`);

// Alternative ways to iterate through arrays in JavaScript:
// 1. forEach method
console.log("\nUsing forEach method:");
cards.forEach(function(card) {
  console.log(card);
});

// 2. for...of loop (ES6)
console.log("\nUsing for...of loop:");
for (let card of cards) {
  console.log(card);
}
