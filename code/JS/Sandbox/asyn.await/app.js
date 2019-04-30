// function myFunc() {
//   return "Hello";
// }
// console.log(myFunc());

// //async way
// async function myFunc2() {
//   return "Hello";
// }
// myFunc2().then(res => console.log(res));

// //async + arrow function
// const myFunc3 = async () => "Hello";
// myFunc3().then(res => console.log(res));

// const myFunc3 = async () => {
//   // .then(response => response.json() )
//   const json = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello World"), 2000);
//   });

//   const data = await json;
//   return data;
// };

// myFunc3().then(res => console.log(res));
url = "https://jsonplaceholder.typicode.com/users";

//async function getUser() {
const getUser = async () => {
  // wait for fetch to respond
  const response = await fetch(url); //response.json()

  // wait for response.json() stream
  const data = await response.json();

  return data;
};

getUser().then(users => console.log(users));
