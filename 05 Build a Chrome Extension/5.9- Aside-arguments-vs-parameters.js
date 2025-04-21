// Function to greet a user with a personalized message
function greetUser(greeting, name) {
  // Update the text content of the welcomeEl element with the greeting and name
  welcomeEl.textContent = `${greeting}, ${name} 👋`;
}

// Call the greetUser function with specific arguments ("Howdy" and "James")
greetUser("Howdy", "James");

// Function to add two numbers and return the result
function add(num1, num2) {
  // Return the sum of num1 and num2
  return num1 + num2;
}

// Call the add function with specific arguments (3 and 4)
add(3, 4);

// Explanation of terms:
// greeting and name are Parameters (placeholders for values passed into the function)
// "Howdy" and "James" are Arguments (actual values passed to the function)
// num1 and num2 are Parameters (placeholders for values passed into the function)
// 3 and 4 are Arguments (actual values passed to the function)
