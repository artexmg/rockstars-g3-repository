const form = document.querySelector("form");
const taskInput = document.getElementById("task");
const list = document.querySelector("ul.collection");

console.log(form);

form.addEventListener("submit", runEvent);

function runEvent(e) {
  //console.log(e.type);

  console.log(taskInput.value);

  if (taskInput.value.length > 0) {
    newTask = document.createElement("li");
    newTask.setAttribute("class", "collection-item");
    newTask.innerHTML = `${
      taskInput.value
    }<a class="delete-item secondary-content"><i class="fa fa-times"></i></a>`;

    //li.insertAdjacentElement("afterend", newTask);
    list.appendChild(newTask);
  }
  // console.log(taskInput.textContent);
  event.preventDefault();
}
