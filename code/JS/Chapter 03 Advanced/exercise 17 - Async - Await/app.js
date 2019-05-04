//
//  EXAMPLE #1
//

// async function myFunc() {
//   const error = false;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello there"), 1000);
//   });

//   if (!error) {
//     const res = await promise; // Wait until the promise is resolved
//     return res;
//   } else {
//     await Promise.reject(new Error("something went wrong"));
//   }
// }

// // // //console.log(myFunc());
// myFunc()
//   .then(response => console.log(response))
//   .catch(error => console.log(error));

//
//  EXAMPLE #2 Arrow Functions
//
/*

const hello = async () => {
  const promise = new Promise((resolve, reject) => {
    error = false; // simulating error in promise

    if (!error) {
      setTimeout(() => resolve("Hello World"), 1000);
    } else {
      reject(new Error("Something went wrong!"));
    }
  });

  return await promise.then(res => res).catch(err => err);
};

hello().then(response => console.log(response));
*/

//// EXAMPLE 3 : FETCH

const url = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  // awaiting the response of the fetch call
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  // we only proceed when this promise is resolved
  const data = await response.json();

  // we only proceed when the second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));
