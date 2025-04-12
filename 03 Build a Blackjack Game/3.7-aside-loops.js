// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for (let count = 1; count < 11; count += 1) {
  console.log(count);
}

// --------- LOOPS EXPLAINED ---------
/*
A for loop has three main parts:
1. Initialization: Setting up our counter variable (let count = 1)
2. Condition: The loop will continue as long as this is true (count < 11)
3. Increment: What happens after each iteration (count += 1)
*/

// Alternative syntax for incrementing
for (let i = 1; i <= 10; i++) {
  console.log("Alternative syntax, number:", i);
}

// --------- MORE EXAMPLES ---------

// Counting backwards from 10 to 1
console.log("Counting backwards:");
for (let count = 10; count >= 1; count--) {
  console.log(count);
}

// Counting by twos
console.log("Counting by twos:");
for (let count = 2; count <= 10; count += 2) {
  console.log(count);
}

// Iterating through an array
console.log("Iterating through an array:");
const fruits = ["Apple", "Orange", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Using a for loop for a sum
console.log("Calculating sum:");
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
  console.log(`After adding ${i}, sum is now ${sum}`);
}
console.log(`Final sum: ${sum}`);

// Break statement example
console.log("Using break statement:");
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    console.log("Breaking the loop at 6!");
    break;
  }
  console.log(i);
}

// Continue statement example
console.log("Using continue statement (skipping odd numbers):");
for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; // Skip odd numbers
  }
  console.log(i);
}
