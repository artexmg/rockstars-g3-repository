-// (c) Enroute 2018
//
//     Prepared by AMG
//
// Sun'qhela, Lets create some arrays!
//

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
const prime = new Array(3, 5, 7, 11, 13, 17, 19, 23);
const numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const numbers2 = new Array(11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
const fruit = ["apple", "pinapple", "banana", "orange", "pear"];
const crazyArray = [
  101,
  "car",
  true,
  undefined,
  null,
  prime,
  new Date(),
  "deleteme please!"
];

// Default display
console.log(prime);
console.log(fruit);
console.log(crazyArray);

// Formated Display
console.log("prime numbers " + prime);
console.log("fibonacci serie " + fibonacci);
console.log("fruit list " + fruit);
console.log("crazy array! " + crazyArray);

// get array length
let arrayLen;
arrayLen = fibonacci.length;
console.log("fibonacci array len = " + arrayLen);
arrayLen = prime.length;
console.log("prime array len = " + arrayLen);

// is array?
console.log("Is crazyArray an array? " + Array.isArray(crazyArray));

// get single value
console.log("first prime number=" + prime[0]);
console.log("fifth prime number=" + prime[4]);

// Mutating an array
// Adding element
prime[0] = 2;
console.log(prime);

// Add element at the end
prime.push(29);
console.log(prime);

// Add element on to the begining
fruit.unshift("grape");
console.log(fruit);

// Delete from the end
crazyArray.pop();
console.log(crazyArray);

// Splice Values
let saneArray = crazyArray.splice(0, 3);
console.log(crazyArray.reverse());
console.log(saneArray);

// Reverse
console.log(fruit.reverse());

// Concatenate array
console.log(fibonacci.concat(prime));

// Sorting array
console.log(fruit.sort());

// Using Sort function to sort numbers
//   -> numbers are sort using the first digit! <-
console.log(numbers);
console.log(numbers2);

valsor = numbers.concat(numbers2);
val = valsor.sort(function(x, y) {
  return x - y;
});
console.log(val);

valsor = numbers.concat(numbers2);
val = valsor.sort(function(x, y) {
  return y - x;
});
console.log(val);
