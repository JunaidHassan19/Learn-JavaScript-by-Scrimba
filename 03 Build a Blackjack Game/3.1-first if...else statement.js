// This is a simple age verification program for a nightclub
// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

// Variable declaration - storing the person's age
let age = 22;

// Decision logic using if...else statement:
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

// If statement checks if age is less than the required minimum (21)
if (age < 21) {
  // This block executes if the condition is true (person is under 21)
  console.log("You can not enter the club!");
} else {
  // This block executes if the condition is false (person is 21 or older)
  console.log("Welcome!");
}

// In this example, since age is 22 (which is not less than 21),
// the else block will execute and "Welcome!" will be logged to console
