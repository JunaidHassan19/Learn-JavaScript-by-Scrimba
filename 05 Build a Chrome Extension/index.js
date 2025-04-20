let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

// 2. Listen for double clicks on the delete button (google it!)
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        <button class='delete-btn'>Delete</button>
      </li>`;
  }
  ulEl.innerHTML = listItems;
  //  4. Select all delete buttons inside the renderLeads function
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      myLeads.splice(index, 1);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      renderLeads();
    });
  });
}
