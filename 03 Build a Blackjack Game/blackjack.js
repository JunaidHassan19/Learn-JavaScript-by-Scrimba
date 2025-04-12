// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard(); // Function call to get a random card
let secondCard = getRandomCard(); // Function call to get a random card
let cards = [firstCard, secondCard]; // Array to hold the cards
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
  return 5; // This function will return a random card value (5 in this case)
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
  // 3. Use the getRandomCard() to set the value of card
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
}
