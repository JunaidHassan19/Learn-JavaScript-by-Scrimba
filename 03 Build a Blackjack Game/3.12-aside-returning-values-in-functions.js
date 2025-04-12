let player1Time = 102;
let player2Time = 107;

// Function to determine the fastest race time between two players
function getFastestRaceTime() {
  if (player1Time < player2Time) {
    return player1Time;
  } else if (player2Time < player1Time) {
    return player2Time;
  } else {
    // If times are equal, return either one
    return player1Time;
  }
}

// Store the result of getFastestRaceTime function in a variable
let fastestRaceTime = getFastestRaceTime();

// Output the fastest race time to the console
console.log(fastestRaceTime); // 102

// Challenge: Write a function that returns the total race time

// Solution: Function to calculate the total time of both players
function getTotalRaceTime() {
  return player1Time + player2Time;
}

// Call/invoke the getTotalRaceTime function and store the result in a variable
let totalRaceTime = getTotalRaceTime();

// Output the total race time to the console
console.log(totalRaceTime); // 209
