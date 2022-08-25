
import "./style.css";
import { createFirstLandingPage, createLandingPageFromLink } from "./landing-page";
import { createMenuPage} from "./menu-page.js";
import { createContactPage } from "./contact-page";
import {removeItems} from "./set-up-functions.js"

function setUpLinks() {
  const links = document.querySelectorAll("#nav-container a");
  links.forEach((link) => {
    switch (link.getAttribute("id")) {
        case "menu":
          link.addEventListener("click", function() {
            removeItems(); 
            createMenuPage()});
          break;
        case "home":
          link.addEventListener("click", function() {
            removeItems();  
            createLandingPageFromLink()});
          break;
        case "contact":
          link.addEventListener("click", function() {
            removeItems();  
            createContactPage()});
          break;         
    }
  })
}

createFirstLandingPage();
setUpLinks();

 