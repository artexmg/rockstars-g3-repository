// Use easyHTTP library
const http = new easyHTTP();
url = "https://jsonplaceholder.typicode.com/posts";

// Get posts

//// First - this <> that
http.get(url);

//// Second - without callback
/*
const response = http.get(url);
console.log(response);
*/

//// Third - with callback (OK)
/*
const response = http.get(url, function(result) {
  console.log(result);
});
*/
