// // (c) Enroute 2018
// //
// //     Prepared by AMG
// //
// // traversing the HTML DOM

let val;
const list = document.querySelector("ul");
const listItem = document.querySelector("li.collection-item:first-child");
//console.log(list);
//console.log(listItem);

//// Get child nodes
//val = list.childNodes;

//console.log(val);
//console.log(list.nextSibling);

node = document.querySelector("title");
// console.log(node);
// console.log(node.firstChild);
// console.log(node.firstChild.nodeValue);
// console.log(node.childNodes[0].nodeValue);

// // Get Children element nodes

// type = document.querySelector("ul.collection").childNodes[0].nodeType;
// console.log(type);

// type = document.querySelector("ul.collection").childNodes[1].nodeType;
// console.log(type);

// ////
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itself
// // 10- Doctype
// ////

childrenList = list.children;
// console.log(childrenList[0]);
// console.log(childrenList[1]);

childrenList[0].textContent = "Hello";

// // Children of Children
// console.log(childrenList[3].children[0]);
// childrenList[3].children[0].id = "test-link";

// // First child vs First Element Child (ignores TEXT Node)
// console.log(list.firstChild);
// console.log(list.firstElementChild);

// console.log(list.lastChild);
// console.log(list.lastElementChild);

// // Count Child Elements
// console.log(list.childElementCount);

// // Get Parent Node
// console.log(listItem.parentNode);
// console.log(listItem.parentElement);
// console.log(listItem.parentElement.parentElement);

// // Traversing Siblings
//console.log(listItem.nextSibling);
//console.log(listItem.nextElementSibling);
console.log(listItem.previousElementSibling);
