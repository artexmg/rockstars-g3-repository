// (c) Enroute 2018
//
//     Prepared by AMG
//
//// Create Element

const li = document.createElement("li");

//console.log(li);

// // Add Class
li.className = "collection-item s12";
// // Add ID
li.id = "new-li-item";
// // Add Attribute
li.setAttribute("title", "New li Item");

//li.textContent = "This is a new LI";
//li.innerText = "This is a new LI";

// // Create a Text Node
newTextNode = document.createTextNode("This is a new LI");

li.appendChild(newTextNode);

// //ALSO: li.appendChild(document.createTextNode("this is a new LI"));

// console.log(li);

// // Add li to ul (append child)

list = document.querySelector("ul.collection");
// console.log(list);

list.appendChild(li);

// // Add DELETE icon

//deleteElement = document.createElement("a"); // a link
//deleteElement.className = "delete-item secondary-content";
//deleteElement.setAttribute("href", "#");

// //// ADD Delete Icon ("X")

//// OPTION 1: build the tag then appendChild
/*
delIcon = document.createElement("i");
delIcon.className = "fa fa-times";

deleteElement.appendChild(delIcon);
*/
// //// OPTION 2: use innerHTML

//deleteElement.innerHTML = '<i class="fa fa-times"></i>';

li.innerHTML = `This is a New LI 
    <a class="delete-item secondary-content">
        <i class="fa fa-times"></i>
    </a>`;

//li.appendChild(deleteElement);
