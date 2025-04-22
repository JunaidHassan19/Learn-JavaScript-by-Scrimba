// The generateSentence(desc, arr) takes two parameterer: a description and an array.
// It should return a string based upon the description and array.

// Example 1: if you pass in "largest countries",and ["China", "India", "USA"],
// it should return the string: "The 3 largest countries are China, India, USA"

// Example 2:If you pass in "best fruits" and ["Apples", "Bananas"], it should return:
// "The 2 best fruits are Apples, Bananas"

// Use both a for loop and a template string to solve the challenge
function generateSentence(desc, arr) {
  // Create a variable to hold the sentence
  let sentence = `The ${arr.length} ${desc} are `;

  // Loop through the array to build the sentence
  for (let i = 0; i < arr.length; i++) {
    // Add each item to the sentence
    sentence += arr[i];

    // If it's not the last item, add a comma and space
    if (i < arr.length - 1) {
      sentence += ", ";
    }
  }

  // Return the complete sentence
  return sentence;
}
