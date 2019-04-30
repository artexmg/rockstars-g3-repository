const http = new EasyHTTP();
// // GET Users
url = "https://jsonplaceholder.typicode.com/users";

// const users = http.get(url)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));

url = "https://jsonplaceholder.typicode.com/users";
// POST REQUEST
const userData = {
  id: "9911",
  username: "rgarcia",
  name: "ricardo garcia",
  email: "ricardo.garcia@gmail.com"
};

// http
//   .post(url, userData)
//   .then(data => console.log(data))
//   .catch(error => console.log(err));

url = "https://jsonplaceholder.typicode.com/users/2";
http
  .put(url, userData)
  .then(data => console.log(data))
  .catch(error => console.log(err));

// const users = http.delete(url)
//   .then(users => console.log(users))
//   .catch(err => console.log(err));
