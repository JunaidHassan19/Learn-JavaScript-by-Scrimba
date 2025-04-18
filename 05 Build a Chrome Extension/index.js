let myLeads = ["www.google.com", "www.facebook.com", "www.instagram.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
});

// Log out the items in the myLeads array using a for loop
for (let i = 0; i < myLeads.length; i++) {
  console.log(myLeads[i]);
}
