let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

// 1. Store the message-el paragraph in a variable called messageEl
const messageEl = document.getElementById("message-el");

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

  // 2. Display the message in the messageEl
  messageEl.textContent = message;
}
