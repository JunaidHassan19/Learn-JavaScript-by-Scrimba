// This program checks if a person is eligible for a birthday card from the King
// A person only receives a card when they turn exactly 100 years old

// Variable declaration - storing the person's age
let age = 100;

// Decision logic using if...else if...else statement:
// Three possible scenarios based on age:
// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
  // This block executes if the person is younger than 100
  console.log("Not elegible");
} else if (age === 100) {
  // This block executes if the person is exactly 100 years old
  // Note the === which checks for both value and type equality
  console.log("Here is your birthday card from the King!");
} else {
  // This block executes if the person is older than 100
  console.log("Not elegible, you have already gotten one");
}

// In this example, since age is 100, the second condition is true
// and "Here is your birthday card from the King!" will be logged to console
