const http = new EasyHTTP();
let url = "https://jsonplaceholder.typicode.com/users";

// GET
// http
//   .get(url)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));

const userData = {
  id: "9911",
  username: "rgarcia",
  name: "Ricardo Garcia",
  email: "ricardo.garcia@gmail.com"
};
url = "https://jsonplaceholder.typicode.com/users";
// //POST
// http
//   .post(url, userData)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));
//POST
// url = "https://jsonplaceholder.typicode.com/users/2";
// http
//   .put(url, userData)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));

// GET
http
  .delete(url)
  .then(users => console.log(users))
  .catch(err => console.log(err));
