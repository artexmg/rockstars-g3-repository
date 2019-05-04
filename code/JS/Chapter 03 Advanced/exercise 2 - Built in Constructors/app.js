// (c) Enroute 2018
//
//     Prepared by AMG
//

// This is the OBJECT ROBERTO
// What if we want MORE OBJECTS LIKE ROBERTO??
//
/*
const name1 = "Zoila";

const name2 = new String("Reyna");

console.log(name1);

console.log(name2);
console.log(typeof name2);
*/
const name2 = new String("Reyna");
const name3 = "Reyna";

if (name3 === name2) {
  console.log("Same name");
} else {
  console.log("Different Name");
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(`num1 is ${typeof num1},num2 is ${typeof num2}`);
// Boolean
const bool1 = true;
const bool2 = new Boolean(true);
console.log(`bool1 is ${typeof bool1},bool2 is ${typeof bool2}`);

// Functions
const getSum1 = function(x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return x + y");

console.log(`getSum1(1,3) = ${getSum1(1, 1)}`);
console.log(`getSum2(1,3) = ${getSum2(1, 1)}`);

// Objects
const albert1 = { firstName: "albert" };
const albert2 = new Object({ name: "albert" });

console.log(albert1);
console.log(albert2);
// Array
const array1 = [1, 2, 3, 4];
const array2 = new Array(1, 2, 3, 4);

console.log(array1);
console.log(array2);
