let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const tabBtn = document.getElementById("tab-btn");

// get data from localstorage
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  console.log(myLeads);
  render();
}

// save Input btn
inputBtn.addEventListener("click", function () {
  if (inputEl.value.length > 0) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    //   print the result to consol.log
    console.log(JSON.parse(localStorage.getItem("myLeads")));
    render();
  }
});

// savetab btn
tabBtn.addEventListener("click", function () {
  const currentUrl = window.location.href;
  myLeads.push(currentUrl);
  console.log(myLeads);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render();
});

// delete button
deleteBtn.addEventListener("click", function () {
  myLeads = [];
  localStorage.clear();
  render();
});
function render(leads) {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
