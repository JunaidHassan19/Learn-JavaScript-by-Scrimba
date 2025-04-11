let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;

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

console.log(isAlive);
