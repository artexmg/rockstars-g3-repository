// (c) Enroute 2018
//
//     Prepared by AMG
//
const clearTaskButton = document.querySelector(".clear-tasks");

console.log(clearTaskButton);
clearTaskButton.addEventListener("click", clickEvent);

function clickEvent(event) {
  //alert("happy!");
  console.log("hello World");

  event.preventDefault(); // prevents reload of page and jump to link

  // REVIEW EVENT OBJECT!
  target = event.target;
  console.log(target.classList);
  console.log(target.className);
  target.innerText = "Stop it!";

  console.log("Event Type [" + event.type + "]");
  console.log("Timestamp [" + event.timeStamp + "]");
  console.log("client X =" + event.clientX);
  console.log("client Y =" + event.clientY);
}
