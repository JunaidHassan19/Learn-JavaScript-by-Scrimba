// This program demonstrates how boolean values (true/false) work in conditional statements

// Variable declaration - a boolean flag indicating if the user has a discount code
// true means the user has a valid discount code
// false would mean no discount code is available
let hasDiscountCode = true;

/**
 * Function to process a food order with discount logic
 * This function checks if a discount should be applied based on the hasDiscountCode variable
 */
function processOrder() {
  // Decision logic using the boolean value directly in the condition
  // Since boolean values are already true/false, no comparison operator is needed
  if (hasDiscountCode) {
    // This block executes if hasDiscountCode is true
    console.log("Discount applied to food order");
  } else {
    // This block executes if hasDiscountCode is false
    console.log("No discount applied");
  }
}

// Call the processOrder function to execute the discount logic
// Since hasDiscountCode is true, "Discount applied to food order" will be logged
processOrder();

// Note: When using booleans in conditions, you don't need to write:
// if (hasDiscountCode === true)
// The simpler form if (hasDiscountCode) is preferred and does the same thing
