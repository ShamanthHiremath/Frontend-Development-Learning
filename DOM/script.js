console.log('script.js');
// alert('script.js');
//window is a global object in the browser that represents the browser window. It is an instance of Window object.
console.log(window);
window.console.log('script.js');

// document is a property of window object that represents the HTML document loaded in the window. It is an instance of Document object.
// html can be accessed using document.documentElement
console.log(document);
console.dir(window.document);

console.log(document.body);

if(true){
    document.body.style.backgroundColor = 'lightblue';
}

// METHODS TO ACCESS ELEMENTS IN DOM

// document.getElementById() returns the element with the specified id 
document.getElementById('main-header').style.color = 'red';

// this will return the elements with class name 'heading' in the form of HTMLCollection
let headingss = document.getElementsByClassName('heading')

// document.getElementsByTagName() returns the elements with the specified tag name in the form of HTMLCollection
let para = document.getElementsByTagName('p');


// QUERY SELECTOR
// document.querySelectorAll() returns all the element that matches a specified CSS selector(s) in the document.
let heading = document.querySelectorAll('.heading');
console.log(heading);
let element = document.querySelectorAll('p');
console.log(element);
let element2 = document.querySelectorAll('#main-header');
console.log(element2);

// document.querySelector() returns the first element that matches a specified CSS selector(s) in the document.
let firstelement = document.querySelector('.heading');
console.log(firstelement);

const allElements = document.querySelectorAll('*');
console.log(allElements);

// prints the tagname of an element
console.log(firstelement.tagName);

// innerText returns the text content of an element
console.log(document.querySelector('body').innerText);

console.log(firstelement.innerText);

// innerHTML returns the HTML content of an element including the tags
console.log(firstelement.innerHTML);

// textContent returns the text content of an element
console.log(firstelement.textContent);

// firstChild returns the first child node of an element
console.dir(document.body.firstChild);

// firstElementChild returns the first child element of an element
console.dir(document.body.firstElementChild);

// lastChild returns the last child node of an element
console.dir(document.body.lastChild);