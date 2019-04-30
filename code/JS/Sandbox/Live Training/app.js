// Let's consume the library
const http = new easyHTTP();

// Get Posts
url = "https://jsonplaceholder.typicode.com/posts/1";

/*
http.get(url, callback);
function callback(error, result) {
  if (!error) {
    console.log(result);
  } else {
    console.log(error);
  }
}
*/

const data = {
  title: "this a nice post",
  body: "body"
};

// http.post(url, data, callback);

// function callback(error, result) {
//   if (!error) {
//     console.log(result);
//   } else {
//     console.log(error);
//   }
// }
// http.put("https://jsonplaceholder.typicode.com/posts/3", data, function(
//   error,
//   result
// ) {
//   if (!error) {
//     console.log(result);
//   } else {
//     console.log(error);
//   }
// });

http.delete("https://jsonplaceholder.typicode.com/posts/1", function(
  error,
  result
) {
  if (!error) {
    console.log(result);
  } else {
    console.log(error);
  }
});
