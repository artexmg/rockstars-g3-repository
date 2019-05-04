// (c) Enroute 2018
//
//     Prepared by AMG
//

// EVENT BUBBLING

// childNode = document.querySelector("li");
// parentNode = document.querySelector("ul");
// grandPaNode = document.querySelector(".card-action");
// grandGrandPaNode = document.querySelector(".card-content");

// childNode.addEventListener("click", function() {
//   // li
//   console.log("Child Node: li");
// });

// parentNode.addEventListener("click", function() {
//   // ul
//   console.log("Parent Node: ul");
// });

// grandPaNode.addEventListener("click", function() {
//   // div card-action
//   console.log("Grand Parent Node: div card-action");
// });

// grandGrandPaNode.addEventListener("click", function() {
//   // div card-action
//   console.log("Gran Grand Parent Node: div card-content");
// });

// EVENT DELEGATION

const bodyNode = document.body;

bodyNode.addEventListener("click", handleEvent);

function handleEvent(e) {
  //   if (e.target.parentElement.className === "delete-item secondary-content") {
  //     console.log("Delete Task!");
  //   }
  // }

  /// BETER WAY! (classList instead of className)

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("Delete Task!");

    e.target.parentElement.parentElement.remove();
  }
}
