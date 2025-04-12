let randomNumber = Math.random();

console.log(randomNumber);

/* 

What does Math.random() do?
Math.random() returns a random number between 0 (inclusive) and 1 (exclusive).

Your answer:
*/

// More examples to understand Math.random():

// Example 1: Generate a random number between 0 and 10
let randomZeroToTen = Math.random() * 10;
console.log("Random number between 0-10:", randomZeroToTen);

// Example 2: Generate a random integer between 1 and 6 (like a dice roll)
let diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice roll (1-6):", diceRoll);

// Example 3: Generate a random integer between 1 and 100
let randomOneToHundred = Math.floor(Math.random() * 100) + 1;
console.log("Random number between 1-100:", randomOneToHundred);

// Example 4: Generate a random card value (1-13)
let cardValue = Math.floor(Math.random() * 13) + 1;
console.log("Random card value (1-13):", cardValue);

// Example 5: Simulate a coin flip (0 = heads, 1 = tails)
let coinFlip = Math.floor(Math.random() * 2);
console.log("Coin flip (0=heads, 1=tails):", coinFlip);
console.log("Result:", coinFlip === 0 ? "Heads!" : "Tails!");

// Common pattern explanation:
// Math.random()                  → 0 to less than 1
// Math.random() * n              → 0 to less than n
// Math.floor(Math.random() * n)  → integer from 0 to n-1
// Math.floor(Math.random() * n) + 1  → integer from 1 to n
