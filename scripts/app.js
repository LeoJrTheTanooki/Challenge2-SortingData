import { DataCall } from "./datafetch.js";
let peopleList = await DataCall();
let table = document.getElementById("table");
let display10 = document.getElementById("display10");
let display20 = document.getElementById("display20");
let display30 = document.getElementById("display30");
let display40 = document.getElementById("display40");
let display50 = document.getElementById("display50");
let displayAll = document.getElementById("displayAll");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let docTableData = table.innerHTML;
let maxData = 10;
let currentData = 0;
let displayAmount = 10;

// Adds event listeners to pagination
display10.addEventListener("click", () => {
  maxData = 10;
  currentData = 0;
  displayAmount = 10;
  PopulateTable();
});
display20.addEventListener("click", () => {
  maxData = 20;
  currentData = 0;
  displayAmount = 20;
  PopulateTable();
});
display30.addEventListener("click", () => {
  maxData = 30;
  currentData = 0;
  displayAmount = 30;
  PopulateTable();
});
display40.addEventListener("click", () => {
  maxData = 40;
  currentData = 0;
  displayAmount = 40;
  PopulateTable();
});
display50.addEventListener("click", () => {
  maxData = 50;
  currentData = 0;
  displayAmount = 50;
  PopulateTable();
});
displayAll.addEventListener("click", () => {
  maxData = peopleList.length;
  currentData = 0;
  displayAmount = peopleList.length;
  PopulateTable();
});
prev.addEventListener("click", () => {
  currentData -= displayAmount * 2;
  maxData -= displayAmount;
  PopulateTable();
});
next.addEventListener("click", () => {
  maxData += displayAmount;
  PopulateTable();
});
// Could probably use classes instead of seperate IDs and make maxData based on value (displayAll being an exception). Will test later

PopulateTable();

function PopulateTable() {
  //   console.log(`Max Data: ${maxData}; Current Data: ${currentData}; Display Amount: ${displayAmount}`);

  // Clears any pre-existing content
  table.innerHTML = "";

  // Reimplements table headers
  table.innerHTML = docTableData;

  // Adds event listeners to table headers
  HeaderButtons();

  // Populates table with relevant data
  try {
    for (currentData; currentData < maxData; currentData++) {
      let tr = document.createElement("tr");

      let tableId = document.createElement("td");
      tableId.textContent = peopleList[currentData].Id;

      let tableFirstName = document.createElement("td");
      tableFirstName.textContent = peopleList[currentData].FirstName;

      let tableLastName = document.createElement("td");
      tableLastName.textContent = peopleList[currentData].LastName;

      let tableEmail = document.createElement("td");
      tableEmail.textContent = peopleList[currentData].Email;

      let tableHeight = document.createElement("td");
      tableHeight.textContent = peopleList[currentData].Height;

      let tableAge = document.createElement("td");
      tableAge.textContent = peopleList[currentData].Age;

      tr.append(
        tableId,
        tableFirstName,
        tableLastName,
        tableEmail,
        tableHeight,
        tableAge
      );
      // Leave table.append towards the end to add content after gathering data
      table.append(tr);
    }
  } catch (error) {
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  }
  //   console.log(`Max Data: ${maxData}; Current Data: ${currentData}; Display Amount: ${displayAmount}`);
}

function HeaderButtons() {
  let headerID = document.getElementById("headerID");
  headerID.addEventListener("click", () => {
    peopleList.sort((a, b) => a.Id - b.Id);
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
  let headerFirstName = document.getElementById("headerFirstName");
  headerFirstName.addEventListener("click", () => {
    peopleList.sort((a, b) => {
      const nameA = a.FirstName.toUpperCase();
      const nameB = b.FirstName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
  let headerLastName = document.getElementById("headerLastName");
  headerLastName.addEventListener("click", () => {
    peopleList.sort((a, b) => {
      const nameA = a.LastName.toUpperCase();
      const nameB = b.LastName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
  let headerEmail = document.getElementById("headerEmail");
  headerEmail.addEventListener("click", () => {
    peopleList.sort((a, b) => {
      const nameA = a.LastName.toUpperCase();
      const nameB = b.LastName.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
  let headerHeight = document.getElementById("headerHeight");
  headerHeight.addEventListener("click", () => {
    peopleList.sort((a, b) => {
      const nameA = a.Height.toUpperCase();
      const nameB = b.Height.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
  let headerAge = document.getElementById("headerAge");
  headerAge.addEventListener("click", () => {
    peopleList.sort((a, b) => a.Age - b.Age);
    currentData = 0;
    maxData = displayAmount;
    PopulateTable();
  });
}
