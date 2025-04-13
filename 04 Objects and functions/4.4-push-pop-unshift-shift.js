let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()

largeCountries.pop(); // Removes the last element (Monaco)
largeCountries.push("Pakistan"); // Adds Pakistan to the end of the array
largeCountries.shift(); // Removes the first element (Tuvalu)
largeCountries.unshift("China"); // Adds China to the beginning of the array

console.log(largeCountries); // ["China", "India", "USA", "Indonesia", "Pakistan"]
