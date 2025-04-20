// Get the welcome element from the HTML
const welcomeEl = document.getElementById("welcome-el");

// Example 1: Function with a 'name' parameter
// This function takes one parameter (name) and inserts it into the welcome message
function greetUser(name) {
  welcomeEl.textContent = "Welcome back, " + name + " 👋";
}

// Calling the function with the argument "Junior"
greetUser("Junior");

// Example 2: Function with a 'greeting' parameter
// Give the function a parameter, greeting, that replaces "Welcome back"
function greetUser(greeting) {
  welcomeEl.textContent = greeting + ", " + "Junior 👋";
}

// Calling the function with the argument "Welcome back"
greetUser("Welcome back");

// Example 3: Function with multiple parameters
// This function takes both greeting and name as parameters
function greetUserComplete(greeting, name) {
  welcomeEl.textContent = greeting + ", " + name + " 👋";
}

// Calling the function with two arguments
greetUserComplete("Welcome back", "Junior");
greetUserComplete("Hello", "Developer");

// Example 4: Function with default parameter values
function greetUserDefault(name, greeting = "Hi there") {
  welcomeEl.textContent = greeting + ", " + name + " 👋";
}

// Using the default greeting
greetUserDefault("Junior");
// Overriding the default greeting
greetUserDefault("Junior", "Good morning");

/* 
Notes about function parameters:
1. Parameters are variables listed as part of the function definition
2. Arguments are the values passed to the function when it is called
3. Functions can have multiple parameters
4. Parameters can have default values
5. The order of arguments must match the order of parameters
*/
