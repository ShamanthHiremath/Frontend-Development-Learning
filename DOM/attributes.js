let div = document.querySelector("div");

// gets the attribute ie. id of the element
let id = div.getAttribute("id");
console.log(id); 

let namee = div.getAttribute("name");
console.log(namee);

// sets the attribute ie. id of the element\
div.setAttribute("name", "new_name");

// changing the style of the element
div.style.backgroundColor = "lightblue";
div.style.fontSize = "20px";
// div.innerText = "Hello World";

// Creating elements 
let newButton = document.createElement("button");
newButton.innerText = "Click me";
newButton.style.backgroundColor = "red";
console.log(newButton);

// Appending the element to the last child of the node (here div)
div.append(newButton);

// Appending the element to the first child of the node (here div)
div.prepend(newButton);

// Appending the element before the last child of the node (here div)
div.before(newButton);

// Appending the element after the last child of the node (here div)
div.after(newButton);

let newHeading = document.createElement("h1");

newHeading.innerHTML = "<i>Heading</i>";
document.body.prepend(newHeading);
// document.body.querySelector("div").before(newHeading);

// Deleting elements
newButton.remove();

// append child
let newButton2 = document.createElement("button");
newButton2.innerText = "Click me";
newButton2.style.backgroundColor = "red";
div.appendChild(newButton2);

// remove child
// div.removeChild(newButton2);

let paraa = document.querySelector(".para");
// changes the class of the element to newpara and corresponding css will be applied
paraa.setAttribute("class", "newpara");

paraa.classList.add("newpara");

// paraa.classList.remove("newpara");