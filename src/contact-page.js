
function createDiv(idString) {
  let div = document.createElement("div");
  div.setAttribute("id", idString);
  return div;
}

let addressHeading = document.createElement('h2');
addressHeading.textContent = "Address";
let address = document.createElement("p");
address.textContent= "Aalmarkt 3011,\n 2311 EC Leiden";


let contactHeading = document.createElement("h2");
contactHeading.textContent = "Contact Us";

let contactPhone = document.createElement("p");
contactPhone.textContent = "+666 666 666"
let contactMail = document.createElement("p");
contactMail.textContent = "fakeemail@gmail.com"

function appendChildren(arr, location) {
  for ( let i = 0; i < arr.length; i++ ) {
    location.appendChild(arr[i]);
  }
}


function createContactPage() {

  let headingContainer = document.querySelector("#heading-container");
  headingContainer.classList.add("hidden");
  let contactContainer = createDiv("contact-info-container");
  contactContainer.setAttribute("style", "bottom: 35%");
  const container = document.querySelector("#container")
  container
  container.setAttribute("style", "background-image: url(/src/contact-side.jpg); background-size: cover; background-position: center")
  container.appendChild(contactContainer);
  appendChildren([addressHeading, address, contactHeading, contactPhone, contactMail], contactContainer);
}

export { createContactPage };