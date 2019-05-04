personObj = JSON.parse(localStorage.getItem("person"));

list = document.querySelector("ul");

li = document.createElement("li");
li.innerText = personObj.firstName;
list.appendChild(li);

li = document.createElement("li");
li.innerText = personObj.lastName;
list.appendChild(li);
