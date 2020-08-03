"use strict";
const dateNow = moment();

dateNow.locale("fr");

const introParagraph = document.getElementById("intro");
let filterCategory = "Toutes";
let filterDate = "Par date";
let filterName = "De A à Z";
let filterNameReverse = "De Z à A";

if (introParagraph) {
  introParagraph.textContent = `Bonjour, nous sommes le ${dateNow.format(
    "dddd D MMMM YYYY"
  )}`;
}

function sortByDate(arrayOfDDMMYYYY) {
  const dateFormat = "DD/MM/YYYY";
  const filterDates = entries.filter(el => {
    if (filterDate === "Par date") {
      return true;
    } else {
      return arrayofDDMMYYYY.sort(
        (A, B) => moment(A.date, "DD/MM/YYYY") - moment(B.date, "DD/MM/YYYY")
      );
    }
  });
}
sortByDate();

/* function sortByDate(arrayOfDDMMYYYY) {
    return arrayOfDDMMYYYY.sort(
      (A, B) => moment(A, "DD/MM/YYYY") - moment(B, "DD/MM/YYYY")
    );
  }
  console.log(sortByDate(dateStrings));
  let filterdate = "Par date"
function activateFilterByDate()
{
  const selectDate = document.getElementById("filterdate")

}
*/
function insertEntries() {
  const ulEl = document.createElement("ul");
  const gridContainer = document.getElementById("grid-container");
  ulEl.classList.add("row", "list-unstyled");
  const filterEntries = entries.filter(el => {
    if (filterCategory === "Toutes") {
      return true;
    } else {
      return el.category.includes(filterCategory);
    }
  });
  for (let entry of filterEntries) {
    console.log(entry);
    const li = document.createElement("li");
    li.classList.add("row");
    li.innerHTML = `<div class="card shadow p-3 mb-5 bg-white rounded-lg mw-100 mx-auto">
    
    <div class="card-entry mx-auto mb-4"></div>
                <div class="card-body">
                <h5 class="card-title h2 mb-2">${entry.subject}</h5>
                <div class="badge bg-primary p-1 mb-3">${entry.category}</div>
                <p class="card-text">${entry.date}</p>

      </div>               
    </div>`;
    ulEl.append(li);
  }
  console.log(ulEl);
  gridContainer.innerHTML = "";
  gridContainer.append(ulEl);
}
insertEntries();

function activateFilterByCategory() {
  const selectEl = document.getElementById("filtercategory");
  uniqueTags.sort();

  for (let tag of uniqueTags) {
    const option = document.createElement("option");
    option.textContent = tag;
    option.value = tag;
    selectEl.append(option);
  }
  selectEl.addEventListener("change", () => {
    filterCategory = selectEl.value;
    insertEntries();
  });
}
activateFilterByCategory();
