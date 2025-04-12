// let randomNumber = Math.random() * 6

let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);

/* 
What does Math.floor() do to positive numbers?
Your answer: It rounds down the number to the nearest integer.
*/

// More examples of Math.floor() for better understanding:

// Example 1: With positive numbers
console.log("Example 1: Positive numbers");
console.log(Math.floor(5.95)); // Output: 5
console.log(Math.floor(5.05)); // Output: 5
console.log(Math.floor(5)); // Output: 5 (integers stay the same)

// Example 2: With negative numbers
console.log("Example 2: Negative numbers");
console.log(Math.floor(-3.1)); // Output: -4 (rounds down to the next integer)
console.log(Math.floor(-3.9)); // Output: -4 (rounds down to the next integer)

// Example 3: Creating a random dice roll (1-6)
console.log("Example 3: Random dice roll");
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll:", diceRoll);

// Example 4: Creating a function that generates random numbers in a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Example 4: Random numbers in range");
console.log("Random number between 10-20:", getRandomNumber(10, 20));
console.log("Random number between 1-100:", getRandomNumber(1, 100));

// Example 5: Practical application - creating a deck of cards
console.log("Example 5: Creating card values");
let suit = Math.floor(Math.random() * 4); // 0-3 for hearts, diamonds, clubs, spades
let cardValue = Math.floor(Math.random() * 13) + 1; // 1-13 for card values

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
console.log(`Random card: ${cardValue} of ${suits[suit]}`);
