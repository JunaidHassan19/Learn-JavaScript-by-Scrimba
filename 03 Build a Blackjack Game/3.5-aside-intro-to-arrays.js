// Arrays - ordered lists of items - composite / complex data type

// Arrays in JavaScript:
// - Are 0-indexed (first item is at position 0, second at position 1, etc.)
// - Can hold any type of data (strings, numbers, booleans, objects, other arrays)
// - Are created using square brackets []
// - Allow storing multiple values in a single variable

// Creating an array of strings with three blog post titles
let featuredPosts = [
  "Check out my Netflix clone", // Position 0
  "Here's the code for my project", // Position 1
  "I've just relaunched my portfolio", // Position 2
];

// Accessing array elements using their index position inside square brackets
console.log(featuredPosts[0]); // Output: "Check out my Netflix clone"
console.log(featuredPosts[1]); // Output: "Here's the code for my project"

// Exercise: Create an array that describes yourself using three primitive data types
// The array contains:
// - A string (name)
// - A number (age)
// - A boolean (whether you like pizza or not)

let myInfo = ["Junni", 30, true];
// myInfo[0] is the string "Junni"
// myInfo[1] is the number 30
// myInfo[2] is the boolean true (indicating "likes pizza")

// Note: Arrays can mix different data types like this example shows
// Arrays are very flexible and are one of the most commonly used data structures in JavaScript
