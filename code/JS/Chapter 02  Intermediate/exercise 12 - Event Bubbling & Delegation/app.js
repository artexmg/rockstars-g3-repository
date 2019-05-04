// Event Bubbling

// const childNode = document.querySelector("li");
// const parentNode = document.querySelector("ul");
// const grandParentNode = document.querySelector(".card-action");
// const granGrandParentNode = document.querySelector(".card-content");

// childNode.addEventListener("click", function() {
//   console.log("Child Node: li");
// });

// parentNode.addEventListener("click", function() {
//   console.log("Parent Node: ul");
// });

// grandParentNode.addEventListener("click", function() {
//   console.log("Grand Parent Node: card-action");
// });

// granGrandParentNode.addEventListener("click", function() {
//   console.log("Gran Grand Parent Node: card-content");
// });

// EVENT DELEGATION

const bodyNode = document.body;

bodyNode.addEventListener("click", eventHandler);

function eventHandler(e) {
  // if (e.target.className === "fa fa-times") {
  //   e.target.parentElement.parentElement.remove();
  // }

  if (e.target.classList.contains("fa-times")) {
    console.log("it works!");
    e.target.parentElement.parentElement.remove();
  }

  console.log(e.target);

  e.preventDefault();
}
