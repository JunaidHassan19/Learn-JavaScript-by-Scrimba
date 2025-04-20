const credits = 12;

// Example of a conditional statement using a numeric value
// If credits is greater than 0 (which is truthy), the first block executes
if (credits > 0) {
  console.log("Let's play! 🎰");
} else {
  console.log("Sorry, you have no credits left. 😔");
}

// TRUTHY & FALSY VALUES IN JAVASCRIPT
// ===================================

// In JavaScript, values are evaluated as either "truthy" or "falsy" in boolean contexts
// such as if statements, while loops, ternary operators, etc.

// FALSY VALUES - these all evaluate to false in boolean contexts:
// =============================================================
// false - the boolean value false
// 0 - the number zero
// "" - empty string
// null - represents the intentional absence of any object value (developer-defined emptiness)
// undefined - represents a variable that has been declared but not assigned a value (JavaScript-defined emptiness)
// NaN - "Not a Number", result of invalid mathematical operations

// EXAMPLES OF FALSY VALUES:
console.log("\nFalsy value examples:");
console.log("Boolean false:", Boolean(false));
console.log("Number 0:", Boolean(0));
console.log("Empty string:", Boolean(""));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));

// TRUTHY VALUES - all other values are considered "truthy"
// =======================================================
// Some examples include:
// - Any non-zero number (positive or negative)
// - Any non-empty string
// - All objects and arrays (even empty ones)
// - The boolean value true

// EXAMPLES OF TRUTHY VALUES:
console.log("\nTruthy value examples:");
console.log("Boolean true:", Boolean(true));
console.log("Number 1:", Boolean(1));
console.log("Negative number:", Boolean(-42));
console.log("Non-empty string:", Boolean("hello"));
console.log("Empty array:", Boolean([]));
console.log("Empty object:", Boolean({}));

// PRACTICAL EXAMPLES:
console.log("\nPractical examples:");

// Example 1: Checking if an array has elements
const myArray = [1, 2, 3];
if (myArray.length) {
  console.log("The array has elements");
} else {
  console.log("The array is empty");
}

// Example 2: Checking if a variable has a value before using it
const userName = ""; // Try changing this to a name
if (userName) {
  console.log(`Hello, ${userName}!`);
} else {
  console.log("Please enter your name");
}

// Example 3: Providing a default value
const userInput = undefined; // Try changing this to any value
const displayValue = userInput || "No input provided";
console.log("Display value:", displayValue);
