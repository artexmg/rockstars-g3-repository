// (c) Enroute 2018
//
//     Prepared by AMG
//

// document.getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);

// // Modifying Items
// items[0].style.color = "red";
// items[1].textContent = "We Rock!";
// items[1].style.color = "grey";

// const listItems = document.querySelector("ul");
// const elements = listItems.getElementsByClassName("collection-item");

// console.log(elements);

// // document.getElementsByTagName
// const list = document.getElementsByTagName("li");

// console.log(list);
// console.log((list[3].style.color = "blue"));

// // Convert HTMLCollection into Array
// arrayList = Array.from(list);

// arrayList.forEach((li, index) => {
//   li.textContent = `${index}: Item`;
//   li.style.color = `rgb(${index}${index}${index})`;
// });

// // document.querySelectorAll()
const varElements = document.querySelectorAll(
  "ul.collection li.collection-item"
);
// let rgb;
// let red, green, blue;

// varElements.forEach((li, i) => {
//   red = `${200 - 22 * i + 2 * i}`;
//   green = `${5 * i * i + 100}`;
//   blue = `${(i + 1) * (2 * i + 1)}`;
//   rgb = `rgb(${red},${green},${blue})`;

//   li.textContent = `[${i}]: Item color set to : ${rgb}`;
//   li.style.color = `${rgb}`;
//   li.style.background = `rgb(${blue},${green},${red})`;
// });

// // Set Odd and Even Background colors!
const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function(li) {
  li.style.background = "#ccc";
});

liEven.forEach(function(li) {
  li.style.background = "#f2f2f2";
});
