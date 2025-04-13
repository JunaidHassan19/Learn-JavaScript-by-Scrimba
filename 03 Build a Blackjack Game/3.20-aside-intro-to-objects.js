// Objects - store data in-depth - composite / complex data type
// key-value pairs

/*
 * INTRODUCTION TO OBJECTS IN JAVASCRIPT
 * 
 * Objects are collections of properties stored as key-value pairs
 * They help organize related data and functionality in one container
 * Objects can represent real-world entities like users, cards, or game elements
 */

let course = {
  title: "Learn JavaScript",
  lessons: 8,
  creator: "Per Harald Borgen",
  length: 9,
  level: 1,
  isFree: true,
  tags: ["JavaScript"],
};

// ACCESSING OBJECT PROPERTIES

// 1. Dot notation - most common way
console.log(course.title);   // "Learn JavaScript"
console.log(course.lessons); // 8
console.log(course.tags);    // ["JavaScript"]

// 2. Bracket notation - useful when property names have spaces or are dynamic
console.log(course["creator"]); // "Per Harald Borgen"
console.log(course["isFree"]);  // true

// MODIFYING AND ADDING PROPERTIES

// Adding a new property
course.description = "Learn JS from scratch";
console.log(course.description); // "Learn JS from scratch"

// Changing an existing property
course.lessons = 10;
console.log(course.lessons);    // 10

// NESTED OBJECTS - objects inside objects

let player = {
  name: "John",
  chips: 145,
  // Nested object
  stats: {
    wins: 10,
    losses: 5
  }
};

console.log(player.stats.wins);  // 10
console.log(player.name + " has " + player.chips + " chips");

// OBJECTS WITH METHODS (functions inside objects)

let dealer = {
  name: "Dealer",
  cards: ["2♥", "K♠"],
  // Method (function in an object)
  getTotal: function() {
    return 12; // Simplified - would normally calculate from cards
  },
  // ES6 shorter syntax for methods
  dealCard() {
    console.log("Dealing a card...");
  }
};

dealer.dealCard();
console.log("Dealer's total: " + dealer.getTotal());

// PRACTICAL BLACKJACK EXAMPLE
let blackjackGame = {
  player: {
    name: "Player 1",
    cards: ["A♣", "J♦"],
    score: 21,
    hasBlackjack: true
  },
  dealer: {
    cards: ["10♥", "9♠"],
    score: 19,
    hasBlackjack: false
  },
  isGameActive: true,
  determineWinner() {
    if (this.player.score > this.dealer.score) {
      return this.player.name + " wins!";
    } else if (this.player.score < this.dealer.score) {
      return "Dealer wins!";
    } else {
      return "It's a tie!";
    }
  }
};

console.log(blackjackGame.determineWinner()); // "Player 1 wins!"
