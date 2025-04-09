// grab the count-el element, store it in a countEl variable
const countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  // set countEl's innerText to the count
  countEl.innerText = count;
}
