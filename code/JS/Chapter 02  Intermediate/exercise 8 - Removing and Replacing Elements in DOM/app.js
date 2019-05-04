// (c) Enroute 2018
//
//     Prepared by AMG
//
// Create Element
const newHeading = document.createElement("h2");
// Add id
newHeading.id = "task-title";
// New text node
textParagraph = document.createTextNode("This is a New Title");
// append text node to heading
newHeading.appendChild(textParagraph);

// Get the old Heading (the one to replace)
const oldHeading = document.getElementById("task-title");
const parentHeading = oldHeading.parentNode;

parentHeading.replaceChild(newHeading, oldHeading);

// console.log(newHeading);
// console.log(textParagraph);
// console.log(oldHeading);
// console.log(parentHeading);

// REMOVE ELEMENT
let lis = document.querySelectorAll("li");
let list = document.querySelector("ul");

console.log(lis);
console.log(list);

// Remove All li's
/*
lis.forEach(function(li) {
  li.remove();
});

lis = document.querySelectorAll("li");
list = document.querySelector("ul");

console.log(lis);
*/
/*
console.log(lis[3]);
lis[0].remove();
list.removeChild(lis[2]);
*/

// CLASSES & ATTRIBUTES
const firstLi = document.querySelector(".collection-item");
const link = firstLi.children[0];
console.log(firstLi);
console.log(link);

// Add new class to li
link.classList.add("new-class");
console.log(link.className);

// Remove the class :-()
link.classList.remove("new-class");
console.log(link.className);
console.log(link.classList);
console.log(link.classList[1]);
console.log(link.getAttribute("href"));
link.setAttribute("href", "http://google.com");

testAttributeHref = link.hasAttribute("href");
testAttributeTitle = link.hasAttribute("title");
console.log(testAttributeHref);
console.log(testAttributeTitle);

// Add Attribute
link.setAttribute("title", "Exercises!");
testAttributeTitle = link.hasAttribute("title");
console.log(testAttributeTitle);

// Removes attribute
link.removeAttribute("title");
testAttributeTitle = link.hasAttribute("title");
console.log(testAttributeTitle);
