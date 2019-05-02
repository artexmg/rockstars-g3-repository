// Thursday Review
// 1: why does "null" is a primitive but shows as "object"? - google it!

// 2: use of Wrappers to Convert datatypes / new Date(),
console.log("------------- Wrappers for Datatypes -----------------");

const numero = 123;
const literal = "3.234";
const bolean = false;

let val = Number(numero);
// val = String(numero);
// val = Number(literal);
// val = Number(literal);
// val = parseFloat(literal);
// val = parseInt(literal);
// val = String(bolean);
// val = Number(bolean);

console.log(val + " is type " + typeof val);

// 3: trick, how to get the last character of a string?

console.log("------------- practice -----------------");
const sentence = "This is the best day of Summer";
console.log(sentence);
//let lastChar = sentence.charAt(sentence.length - 1);
//lastChar = sentence[sentence.length - 1];
//console.log(lastChar);

// 4: Array to string and
//    and
//    string to array (split)

console.log("-------------Playing with arrays-----------------");
const numeros = "1 2 3 4 5 6 7 8 9";
const numArray = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
const newArray = numeros.split(" ");
const languages = "english,french,portuguese,german,dutch,hindi";

console.log(numeros);
console.log(numArray);
console.log(newArray);
// console.log(newArray[1] + " " + newArray[2]);
// console.log(numArray[1] + " " + numArray[2]);
// console.log(String(numArray));
// console.log(String(newArray));
// console.log(String(newArray).split(","));
// console.log(languages.split(","));

// console.log(languages.replace("hindi", "talegu"));
// console.log(languages.includes("japanesse"));
// console.log(languages.includes("dutch"));

val = numArray.length;
val = Array.isArray(numArray);
val = numArray.indexOf(1);

// Extra - adding elements
console.log("-------------Extra Arrays - Adding Elements -----------------");

numArray.push(10);
numArray.unshift(0);
numArray.pop();
val = numArray.shift();
numArray.splice(1, 5);
numArray.reverse();
const subArray = new Array("elephant", "giraffe", "kohala");
val = subArray.concat(numArray);

console.log(val);
console.log(numArray);

//------------
const today = new Date();
let birthday = new Date("12/25/0");
birthday = new Date("January 6 0001");

val = today;
val = birthday;

console.log(val);
