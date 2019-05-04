// function add(a, b) {
//   return a + b;
// }

// console.log(8, 9);

let add = (a, b) => {
  return a + b;
};

let log = msg => {
  console.log(msg);
};

let hello = () => {
  console.log("hello world!");
};

let sqr = x => x * x;

///////////////////////////////////////////////
///      LOTS of ExAMPLES OF ARROW SYTNTAXIS
///////////////////////////////////////////////
//
// const sayHello = function() {
//   console.log('Hello');
// }

// const sayHello = () => {
//   console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//   return 'Hello';
// }

// Return object
// const sayHello = () => ({ msg: 'Hello' });

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// Multuiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'Traversy');

const users = ["Nathan", "John", "William"];

// const nameLengths = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = users.map(name => name.length);

console.log(nameLengths);

///////////////////////////////////////////////
///       NON BINDING ADVANTAGE!
///////////////////////////////////////////////

function Timer() {
  this.i = 0;

  this.timer = setInterval(function increase() {
    this.i++;
    console.log(this.i);
  }, 1000);
}

// function Timer() {
//   this.i = 0;

//   that = this;
//   this.timer = setInterval(function increase() {
//     that.i++;
//     console.log(that.i);
//   }, 1000);
// }

// function Timer() {
//   this.i = 0;

//   this.timer = setInterval(() => {
//     this.i++;
//     console.log(this.i), 1000;
//   });
// }
