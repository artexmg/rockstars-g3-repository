// (c) Enroute 2018
//
//     Prepared by AMG
//

const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const heading = document.querySelector("h5");

// Submit Event Handler
form.addEventListener("submit", runEvent);

// Write Task Event handler
taskInput.addEventListener("keydown", eventHandlerOnKey);

// Write Task Event hander - keyup
taskInput.addEventListener("keyup", eventHandlerOnKeyUp);

// Write Task Event hander - keyup
taskInput.addEventListener("keypress", eventHandlerOnKeyPress);

// Write Task Event Handler - focus
taskInput.addEventListener("focus", eventHandlerOnKeyFocus);

// Write Task Event Handler - blur
taskInput.addEventListener("blur", eventHandlerOnKeyBlur);

// Write Task Event Handler - cut
taskInput.addEventListener("cut", eventHandlerOnKeyCut);

// Write Task Event Handler - copy
taskInput.addEventListener("copy", eventHandlerOnKeyCopy);

// Write Task Event Handler - paste
taskInput.addEventListener("paste", eventHandlerOnKeyPaste);

// Write Task Event Handler - input
taskInput.addEventListener("input", eventHandlerOnKeyInput);

// NOTE: We NEED TO ADD A SELECT LIST FIRST!

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);
  e.preventDefault();
}

function eventHandlerOnKey(e) {
  console.log("Event Type:[" + e.type + "]");

  //console.log(e.target.value);

  heading.innerText = e.target.value;
}

function eventHandlerOnKeyUp(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyPress(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyFocus(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyBlur(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyCut(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyCopy(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyPaste(e) {
  console.log("Event Type:[" + e.type + "]");
}

function eventHandlerOnKeyInput(e) {
  console.log("Event Type:[" + e.type + "]");
}
//console.log(form);
//console.log(taskInput);
