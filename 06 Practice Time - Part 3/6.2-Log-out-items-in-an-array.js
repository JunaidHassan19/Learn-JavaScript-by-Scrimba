// Array of course names that we want to work with
let myCourses = [
  "Learn CSS Animations",
  "UI Design Fundamentals",
  "Intro to Clean Code",
];

// TASK:
// Create a function that takes a single parameter, an array,
// and logs all the items of the array to the console.
// Call the function while passing in myCourses as an argument

function logItems(arr) {
  // Loop through each item in the array using its index
  for (let i = 0; i < arr.length; i++) {
    // Output the current array element to the console
    console.log(arr[i]);
  }
}

// Call the function with our myCourses array as the argument
// This will print each course name to the console
logItems(myCourses);
