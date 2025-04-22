// Challenge:
// Round the price in the button down to two decimal places.
// Don't know which method to use? Google it!

const totalPrice = 420.69235632455;
const btn = document.getElementById("purchase-btn");
btn.textContent = `Buy $${totalPrice.toFixed(2)}`;
