// Array containing parts of a sentence (note that each element has a space at the end)
let sentence = ["Hello ", "my ", "name ", "is ", "Per"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
// How do you keep the spaces between the words if I remove them from the array?

/*
 * EXPLANATION:
 * 1. We create a for loop that runs for each element in the sentence array
 * 2. For each iteration, we add the current array element to the textContent of greetingEl
 * 3. The += operator appends each new word to the existing content
 */
for (let i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i];
}

/*
 * ALTERNATIVE SOLUTION:
 * If we remove spaces from the array elements, we can add them manually in the loop:
 */
// Example with an array without spaces
let words = ["Hello", "my", "name", "is", "Per"];
let outputEl = document.getElementById("output-el"); // Assuming this element exists

// Method 1: Add spaces during iteration
for (let i = 0; i < words.length; i++) {
  outputEl.textContent += words[i];

  // Add space after each word except the last one
  if (i < words.length - 1) {
    outputEl.textContent += " ";
  }
}

// Method 2: Using join() method (more elegant way to combine array elements with separators)
// let combinedSentence = words.join(" ");
// outputEl.textContent = combinedSentence;

/*
 * OTHER EXAMPLES OF FOR LOOPS WITH ARRAYS:
 */
// Example 1: Calculate sum of numbers
let numbers = [5, 10, 15, 20];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  // After loop completes, sum will be 50
}

// Example 2: Creating HTML elements dynamically
let fruits = ["Apple", "Banana", "Orange"];
// This would typically be used in an HTML file with a fruits-list element
// let fruitList = document.getElementById("fruits-list");
// for (let i = 0; i < fruits.length; i++) {
//   let listItem = document.createElement("li");
//   listItem.textContent = fruits[i];
//   fruitList.appendChild(listItem);
// }
