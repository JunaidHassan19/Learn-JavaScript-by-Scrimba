// This file demonstrates how to add and remove items from arrays using push() and pop() methods

// Creating an array of numbers representing card values
let cards = [7, 4];

// Adding a new element to the end of the array using push()
// push() modifies the original array and returns the new length of the array
cards.push(6); // cards is now [7, 4, 6]
//console.log(cards);  // Uncomment to see the updated array

// Example: Simulating a chat conversation with an array of messages

// Initialize an array with existing conversation messages
let messages = [
  "Hey, how's it going?", // First message - index 0
  "I'm great, thank you! How about you?", // Second message - index 1
  "All good. Been working on my portfolio lately.", // Third message - index 2
];

// Creating a new message to add to the conversation
let newMessage = "Same here!";

// Adding the new message to the end of the messages array
// After this operation, messages will have 4 elements
messages.push(newMessage); // Same as messages.push("Same here!");

// Displaying the updated array of messages
console.log(messages); // Shows all 4 messages including our new one

// Removing the last item from the array using pop()
// pop() modifies the original array, removes the last element, and returns that element
messages.pop(); // Removes "Same here!" from the end of the array

// Displaying the array after removing the last message
console.log(messages); // Back to the original 3 messages

// Additional array operations:
// - unshift() - adds an element to the beginning of an array
// - shift() - removes the first element from an array
// Example:
// messages.unshift("Hello there!") - adds "Hello there!" to the start
// messages.shift() - removes the first message

// Note: push() and pop() are more efficient than unshift() and shift()
// because they don't need to reindex all elements in the array
