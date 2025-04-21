let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.getElementById("tab-btn");

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

const tabs = [{ url: "https://www.linkedin.com/in/junaidhassan19/" }];

tabBtn.addEventListener("click", function () {
  // Grab the URL of the current tab!
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    // since only one tab should be active and in the current window at once
    // the return variable should only have one entry
    let activeTab = tabs[0];
    let activeTabId = activeTab.id; // or do whatever you need
  });
  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        <button class='delete-btn'>Delete</button>
      </li>`;
  }
  ulEl.innerHTML = listItems;

  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      myLeads.splice(index, 1);
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    });
  });
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
});
