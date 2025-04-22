// LET VS CONST IN JAVASCRIPT
// ----------------------
// const: Use for values that should NOT change throughout your code
// let: Use for values that WILL or MIGHT change during execution
// Always prefer const unless you need to reassign the variable

// SETTING THE STAGE
const player = "Per";     // player name won't change during the game
const opponent = "Nick";  // opponent name won't change during the game
const game = "AmazingFighter"; // game name is fixed
let points = 0;           // points will change as the player scores
let hasWon = false;       // win status will change based on game outcome

// PLAYING THE GAME
points += 100;            // incrementing the points (this is why we need 'let')
hasWon = true;            // changing the win status (this is why we need 'let')

// ANNOUNCING THE WINNER
if (hasWon) {
  // Template strings use backticks (`) and ${variable} syntax 
  // This makes it easier to embed variables within strings
  console.log(`${player} got ${points} points and won the ${game} game!`);
} else {
  console.log(`The winner is ${opponent}! ${player} lost the game`);
}

// MORE EXAMPLES OF LET VS CONST
// -----------------------------

// Example 1: Counter (using let for changing values)
let counter = 0;
counter = counter + 1;  // counter is now 1
counter += 2;           // counter is now 3
// counter = 0;         // We can reset it because we used 'let'

// Example 2: Configuration values (using const for fixed values)
const MAX_USERS = 50;
const API_ENDPOINT = "https://api.example.com/scores";
const TAX_RATE = 0.07;
// MAX_USERS = 100;     // This would cause an error! Can't reassign const

// Example 3: Collections (arrays and objects)
const names = ["Alice", "Bob", "Charlie"]; 
// Even though names is const, we can still modify the array contents
names.push("Dave");       // This works! We're not reassigning the variable
// names = ["Eve"];      // This would error - can't reassign the array itself

// MORE EXAMPLES OF TEMPLATE STRINGS
// --------------------------------

const userName = "Sarah";
const score = 95;
const level = 7;

// Old way (string concatenation)
console.log(userName + " scored " + score + " points on level " + level);

// New way (template strings)
console.log(`${userName} scored ${score} points on level ${level}`);

// Template strings can also contain expressions
console.log(`${userName}'s average is ${score/level} points per level`);

// They can also span multiple lines
console.log(`
Player: ${userName}
Score: ${score}
Level: ${level}
`);
