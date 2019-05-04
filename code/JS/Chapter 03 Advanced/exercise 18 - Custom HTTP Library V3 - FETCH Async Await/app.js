const http = new EasyHTTP();
// GET Users

/*
// GET REQUEST
const url = "https://jsonplaceholder.typicode.com/users";
http
  .get(url)
  .then(users => console.log(users))
  .catch(err => console.log(err));
*/

/*
// POST REQUEST
const url = "https://jsonplaceholder.typicode.com/users";
const userData = {
  id: "9911",
  username: "rgarcia",
  name: "Ricardo Garcia",
  email: "ricardo.garcia@gmail.com"
};
http
  .post(url, userData)
  .then(data => console.log(data))
  .catch(error => console.log(error));
*/

// PUT REQUEST
/*
const url = "https://jsonplaceholder.typicode.com/users";
const userData = {
  id: "1",
  username: "rgarcia",
  name: "Ricardo Garcia",
  email: "ricardo.garcia@gmail.com"
};
http
  .put("https://jsonplaceholder.typicode.com/users/2", userData)
  .then(data => console.log(data))
  .catch(error => console.log(error));
*/

// DELETE REQUEST
///*
http
  .delete("https://jsonplaceholder.typicode.com/users/3")
  .then(response => console.log(response))
  .catch(error => console.log(error));
//*/
