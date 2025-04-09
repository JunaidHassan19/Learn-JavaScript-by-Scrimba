// grab the count-el element, store it in a countEl variable
const countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count = count + 1;
  // set countEl's innerText to the count
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called
function save() {
  console.log(count);
}
