let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el");

function startGame() {
  // 3. Render the cards on the page using this format -> "Cards: 10 4"
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
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

  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck!");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 5; // Example hard-coded card value
  // 2. Add the new card to the sum variable
  sum += card;

  // 3. Call startGame()
  startGame();
}
