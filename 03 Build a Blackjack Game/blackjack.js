let firstCard = 10;
let secondCard = 7;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.
function startGame() {
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

  console.log(message);
}
