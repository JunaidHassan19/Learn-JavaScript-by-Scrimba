// Create a for loop that counts from 10 to 100 in steps of 10
for (let i = 10; i <= 100; i += 10) {
  console.log(i);
}
// Use console.log to log out the numbers

// Additional loop examples for better understanding:

// Example 1: Counting backwards from 10 to 1
console.log("Counting backwards:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Example 2: Looping through an array
console.log("Looping through an array:");
const fruits = ["Apple", "Orange", "Banana", "Grapes"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example 3: Using for...of loop (modern way to loop through arrays)
console.log("Using for...of loop:");
for (let fruit of fruits) {
  console.log(fruit);
}

// Example 4: Using while loop
console.log("Using while loop:");
let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}

// Example 5: Using do...while loop (runs at least once)
console.log("Using do...while loop:");
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// Example 6: Break statement in a loop
console.log("Using break statement:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break; // Stop the loop when i is 6
  }
  console.log(i);
}

// Example 7: Continue statement in a loop
console.log("Using continue statement:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Only prints odd numbers
}
