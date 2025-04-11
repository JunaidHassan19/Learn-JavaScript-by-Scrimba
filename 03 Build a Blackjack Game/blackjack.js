let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let message = "";
// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
  message = "Do you want to draw a new card? 🙂";
  isAlive = true;
} else if (sum === 21) {
  message = "Wohoo! You've got Blackjack! 🥳";
  hasBlackjack = true;
} else {
  message = "You're out of the game! 😭";
  isAlive = false;
}

// 3. Log it out!
console.log(message);
