let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
// 1. Create a variable called isAlive and assign it to true
let isAlive = true;
// 2. Flip its value to false in the appropriate code block
if (sum <= 20) {
  console.log("Do you want to draw a new card? 🙂");
  isAlive = true;
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🥳");
  hasBlackjack = true;
} else {
  console.log("You're out of the game! 😭");
  isAlive = false;
}

// 3. Log it out to check that you're doing it right
console.log(isAlive);
