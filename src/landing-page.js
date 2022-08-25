function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}

function createLink(idString) {
  let link = document.createElement("a");
  link.setAttribute("id", idString);
  link.textContent = idString;
  return link;
}

function createLinks() {
  const nameArr = ["home", "menu", "contact"];
  const linkArr = [];
  for (let num = 0; num < nameArr.length; num++) {
    linkArr.push(createLink(nameArr[num]));
  }
  return linkArr;
}

function createNav() {
  let navContainer = createDiv("nav-container");
  let linkArr = createLinks();
  for (let item of linkArr) {
    navContainer.appendChild(item);
  }
  return navContainer;
}


function createHeadings(headingTxt, subheadingTxt, container) {
  if(headingTxt !== "") {
  let heading = document.createElement("h1");
  heading.textContent = headingTxt;
  container.appendChild(heading);
  }
  if (subheadingTxt !== "") {
  let subheading = document.createElement("h4");
  subheading.textContent = subheadingTxt;
  container.appendChild(subheading);
  }
}


function createFirstLandingPage() {
  const container = document.querySelector("#container");
  container.setAttribute("style", "background-image: url(/src/restaurant.jpg); background-size: cover;")

  let headingContainer = createDiv("heading-container");
  container.appendChild(headingContainer);

  createHeadings("Taqueria de Mitsu",
  "The most delicious tacos on this side of the Atlantic", headingContainer);
 
  let navContainer = createNav();
  container.appendChild(navContainer);
}



function createLandingPageFromLink() {
  const container = document.querySelector("#container")
  container.setAttribute("style", "background-image: url(/src/restaurant.jpg); background-size: cover;")
  
  let heading = document.querySelector("#heading-container > h1");
  heading.textContent = "Taqueria de Mitsu";

  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.remove("hidden");
  headingContainer.setAttribute("style", "bottom: 30%")
  createHeadings("",
  "The most delicious tacos on this side of the Atlantic",
  headingContainer);
  
}
 
export { createFirstLandingPage, createLandingPageFromLink };
