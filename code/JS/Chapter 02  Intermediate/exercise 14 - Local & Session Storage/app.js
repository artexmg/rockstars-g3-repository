// // WARNING UP WITH LOCAL STORAGE!

//// ADD ITEM TO LOCAL STORAGE

// firstName = localStorage.getItem("firstName");
// lastName = localStorage.getItem("lastName");

//localStorage.removeItem('person');
//localStorage.removeItem('lastName')

//// DELETE EVERYTHING!
//localStorage.clear()

//// STRINGIFY

// const obj = { firstName: "artemio", lastName: "mendoza" };

// personString = JSON.stringify(obj);

// localStorage.setItem("person", personString);

// console.log("test");

//// GO TO THE OTHER WEB APP AND RETRIEVE DATA!
////-----------------------------------------------

//// DELETE EVERYTHING!
//sessionStorage.clear()

//// ADD ITEM TO SESSION STORAGE

// firstName = sessionStorage.getItem("firstName");
// lastName = sessionStorage.getItem("lastName");

//sessionStorage.removeItem('person');
//sessionStorage.removeItem('lastName')

//// STRINGIFY

// const obj = { firstName: "artemio", lastName: "mendoza" };

// personString = JSON.stringify(obj);

// sessionStorage.setItem("person", personString);

// console.log("test");

//// GO TO THE OTHER WEB APP AND RETRIEVE DATA! (SESSION STORAGE WILL DIE!!)

//// STORE TASKS (From HTML)

addTask = document.querySelector("form");
inputTask = document.getElementById("task");

if (localStorage.taskList) {
  taskList = JSON.parse(localStorage.taskList);
} else {
  taskList = [];
}

addTask.addEventListener("submit", function(e) {
  taskList.push(inputTask.value);

  localStorage.setItem("taskList", JSON.stringify(taskList));

  e.preventDefault();
});

// Loop over each element

taskList.forEach(element => {
  console.log(element);
});
