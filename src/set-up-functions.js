function removeItems() {
  const allInBodyExceptContainer = document.querySelectorAll("body :not(#container):not(#nav-container):not(a):not(#heading-container):not(#heading-container > h1)"); 
  allInBodyExceptContainer.forEach((item) => {
    item.remove();
  })
 }
 export {removeItems}


