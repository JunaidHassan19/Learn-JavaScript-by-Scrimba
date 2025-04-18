let myLeads = ["www.google.com", "www.facebook.com", "www.instagram.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
});

for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
