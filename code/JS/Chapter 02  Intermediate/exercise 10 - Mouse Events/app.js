// (c) Enroute 2018
//
//     Prepared by AMG
//

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Register Click Event
clearBtn.addEventListener("click", eventHandlerEvent);
//Register Double Click Event
clearBtn.addEventListener("dblclick", eventHandlerEvent);
//Register MouseDown Event
clearBtn.addEventListener("mousedown", eventHandlerEvent);
//Register MouseUp Event
clearBtn.addEventListener("mouseup", eventHandlerEvent);
//Register MouseEnter Event
card.addEventListener("mouseenter", eventHandlerEvent);
//Register MousDown Event
clearBtn.addEventListener("mousedown", eventHandlerEvent);
// MouseLeave Event
card.addEventListener("mouseleave", eventHandlerEvent);
// Mousemove Event
card.addEventListener("mousemove", eventHandlerEvent);

// Event Handler
function eventHandlerEvent(event) {
  console.log(`EVENT TYPE: ${event.type}`);

  heading.textContent = `MouseX: ${event.offsetX} MouseY: ${event.offsetY}`;

  event.preventDefault();

  document.body.style.backgroundColor = `rgb(${event.offsetX},${
    event.offsetY
  },40`;
}
