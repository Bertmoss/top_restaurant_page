

/* MENU SECTION */
function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}
const body = document.querySelector("body");
const container = document.querySelector("#container");
let menuDiv = createDiv("menu-container");

/* menu content section */
let menuContent = createDiv("menu-content");
let foodContainer = createDiv("food-container");
let drinksContainer = createDiv("drinks-container");

/* menu image section */
let img = document.createElement("img");
img.setAttribute("src", "/src/menu-side.jpg");
img.setAttribute("alt", "image of a Taco");

/* appending children */
appendChildren([foodContainer, drinksContainer], menuContent);
appendChildren([menuContent, img], menuDiv);

/* Table data and headers arr*/
const headerArr = ["WARM DRINKS", "COCKTAILS", "CERVEZAS", "LUNCH", "DINNER"];
const foodArr = [
  "LUNCH",
  "Barbacoa Salad:13.45",
  "Grilled Chicken Salad:11.50",
  "Carnitas Tacos: 10.50",
  "Veggie Tacos:9:50",
  "DINNER",
  "Carne Asada Tacos:15.00",
  "Tacos al Pastor:16.00",
  "Tacos de Pescado:16.00",
  "Campechanos: 15.00",
  "Tacos de Birra: 15.50",
  "Tacos de Veggie: 13.00",
  "Vegetable Burrito: 16.00",
  "Chili con Carne Burrito: 17.00",
];
const drinkArr = [
  "WARM DRINKS",
  "Coffee:2.50",
  "Espresso:4.50",
  "Tea:1.50",
  "Mint Tea:4.00",
  "COCKTAILS",
  "Mojito:7.50",
  "Aztec Mule:8.00",
  "The Dr. Koizumi:10.00",
  "Cuba Libre:8.50",
  "CERVEZAS",
  "Red Stripe:5.00",
  "Corona (the good kind):4.50",
  "Heineken:4.00",
];

/* FUNCTIONS AND CONSTRUCTORS */

/* loop that appends children from an arr to location */
function appendChildren(arr, location) {
  for ( let i = 0; i < arr.length; i++ ) {
    location.appendChild(arr[i]);
  }
}
/* Table element and caption constructor */
function tableConstruction (captionText, container) {
  this.captionText = captionText;
  this.container = container;
}

tableConstruction.prototype.createTableElement = function () {
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = this.captionText;
  table.appendChild(caption);
  this.container.appendChild(table);
  return table;
}

/* constructor that creates a td element or th element for the menu */
function menuItemConstructor(name, price, table) {
  this.name = name;
  this.price = price;
  this.table = table;
}

menuItemConstructor.prototype.createItemRow = function () {
  let tableRow = document.createElement("tr");
  let itemCell = document.createElement("td");
  itemCell.textContent = this.name;
  tableRow.appendChild(itemCell);
  let itemPriceCell = document.createElement("td");
  itemPriceCell.textContent = this.price;
  itemPriceCell.setAttribute("style", "text-align: right");
  tableRow.appendChild(itemPriceCell);
  this.table.appendChild(tableRow);
};

menuItemConstructor.prototype.createHeaderRow = function () {
  let tableRow = document.createElement("tr");
  let headerCell = document.createElement("th");
  headerCell.setAttribute("colspan", "2");
  headerCell.setAttribute("scope", "colgroup");
  headerCell.textContent = this.name;
  tableRow.appendChild(headerCell);
  this.table.appendChild(tableRow);
};

/* generate inside of the table based on the headingArr and food/drink arr */

function generateTable(itemArr, table) {
  loop: for (let num = 0; num < itemArr.length; num++) {
    for (let numb = 0; numb < headerArr.length; numb++) {
      if (itemArr[num] == headerArr[numb]) {
        let name = itemArr[num],
            price = "N/A";
        let item = new menuItemConstructor(name, price, table);
        item.createHeaderRow();
        continue loop;
      }
    }
    let [name, price] = itemArr[num].split(":");
    let item = new menuItemConstructor(name, price, table);
    item.createItemRow();
  }
}

function createMenuPage() {
  container.setAttribute(
    "style",
    "background-image: url(/src/menu-header.jpg); background-size: cover;"
  );
  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.remove("hidden");
  headingContainer.setAttribute("style", "bottom: 50%");

  let heading = document.querySelector("#heading-container h1");
  heading.textContent = "Menu";
  
  let drinksTable = new tableConstruction("Beverages", drinksContainer);
  let foodTable = new tableConstruction("Dishes", foodContainer);

  appendChildren([foodContainer, drinksContainer], menuContent);
  appendChildren([menuContent, img], menuDiv);

  generateTable(drinkArr, drinksTable.createTableElement());
  generateTable(foodArr, foodTable.createTableElement());

  body.appendChild(menuDiv);
}

export { createMenuPage };
