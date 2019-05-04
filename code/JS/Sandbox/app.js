// (c) Enroute 2018
//
//     Prepared by AMG
//

//// Define User Interface Variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector("ul.collection");
const clearBtn = document.querySelector("a.clear-tasks");
const filter = document.getElementById("filter");
const taskInput = document.getElementById("task");

//// Master Event Handler Function
masterEventHandler();

// Load all event Listeners
function masterEventHandler() {
  // DOM Load Event
  document.addEventListener("DOMContentLoaded", getTasks);

  // STEP 3.3 Creates Local Storage Function
  document.addEventListener("DOMContentLoaded", getTasks);

  // Register add task event
  form.addEventListener("submit", addTask);

  // Remove task event
  taskList.addEventListener("click", removeTask);

  // Clear Task Event
  clearBtn.addEventListener("click", clearTasks);
  // Filter Tasks
  filter.addEventListener("keyup", filterTasks);
}
// Load Tasks from Local Storage for the first Time
function getTasks(e) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  // Add list elements to UL
  tasks.forEach(function(task) {
    // creates li node
    const li = document.createElement("li");
    li.className = "collection-item";

    // add rest of code
    const extraHTML = `${task} <a href="#!" class="delete-item secondary-content">
      <i class="fa fa-times"></i>
    </a>`;
  });
  li.innerHTML = extraHTML;

  taskList.appendChild(li);
}

// Populate initial page from Local Storage
function getTasks() {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task) {
    // Create li element
    const li = document.createElement("li");
    li.className = "collection-item";

    // Create Text Node and Append to li
    li.appendChild(document.createTextNode(task));

    // ADD link element
    const link = document.createElement("a");
    link.className = "delete-item secondary-content";

    // ADD icon html
    link.innerHTML = `<i class="fa fa-times"></i>`;

    // Append node to LI
    li.appendChild(link);

    // Append li to ul
    taskList.appendChild(li);
  });
}

// individual Event Handlers (per event)

// ADD TASK
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  // Create li element
  const li = document.createElement("li");
  li.className = "collection-item";

  // Create Text Node and Append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // ADD link element
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";

  // ADD icon html
  link.innerHTML = `<i class="fa fa-times"></i>`;

  // Append node to LI
  li.appendChild(link);

  // STOP HERE AND VERIFY CONSOLE.LOG BEFORE CONTINUING!
  console.log(li);

  // Append li to ul
  taskList.appendChild(li);

  // Store in Local Storage
  storeTaskInLocalStorage(taskInput.value);

  // Clear Value
  taskInput.value = "";

  // Prevents default behaviour!
  e.preventDefault(); // NECESSARY!
}

// Store Task into LocalStorage
function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.push(task);

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//  Remove Task from HTML
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    //console.log(e.target);

    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      //Remove from Local Storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

// Remove Element from Local Storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;

  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  tasks.forEach(function(task, index) {
    if (task == taskItem.textContent) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Clear Tasks - How to do it with Array Loop????
function clearTasks() {
  // SLOW OPTION
  //taskList.innerHTML = "";

  // FASTER OPTION!
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Clear Local Storage
  clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll(".collection-item").forEach(function(task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });

  console.log(text);
}
