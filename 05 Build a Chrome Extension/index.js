let myLeads = ["www.google.com", "www.facebook.com", "www.instagram.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  console.log(myLeads);
});

// Let's try a different method!
for (let i = 0; i < myLeads.length; i++) {
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  // create element
  // set text content
  // append to ul
  const li = document.createElement("li");
  li.textContent = myLeads[i];
  ulEl.append(li);
}
