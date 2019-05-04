// Use easyHTTP library
//
// Create object http from easyHTTP library

const http = new easyHTTP();

/*
// Get Multiple Results

url = "https://jsonplaceholder.typicode.com/posts/1";

http.get(url, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});

// Get a Single Post
const http = new easyHTTP();
url = "https://jsonplaceholder.typicode.com/posts/1";

http.get(url, function (error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
*/

//// Make  a POST request
// url = "https://jsonplaceholder.typicode.com/posts";
// const data = {
//   title: "this is a nice post",
//   body: "this is a nice body"
// };
// http.post(url, data, function(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

//// Make  a PUT request
// url = "https://jsonplaceholder.typicode.com/posts/5";
// const data = {
//   title: "this is a nice post",
//   body: "this is a nice body"
// };
// http.put(url, data, function(error, result) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// MAKE a DELETE REQUEST
const url = "https://jsonplaceholder.typicode.com/posts/1";
http.delete(url, function(error, result) {
  if (error) {
    console.log(error);
  } else {
    console.log(result);
  }
});
