// (c) Enroute 2018
//
//     Prepared by AMG
//

// FUNCTION DECLARATIONS

function helloWorld() {
  console.log("Hello World!");
}
helloWorld();

function square(number) {
  return number * number;
}
console.log(square(5));

// FUNCTION EXPRESSIONS

const square2 = function(number) {
  return number * number;
};

console.log(square2(5));

var factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(5));

// Functions parameters - Default parameters
// first undefined
// second - default parameters

function greet(firstName, lastName) {
  //function greet(firstName = "John", lastName = "Doe") {
  return "Hello " + firstName + " " + lastName;
}
console.log(greet());

function pwr(base = 2, exponent = 2) {
  return Math.pow(base, exponent);
}
console.log(pwr(3));

// IMMEDIATLY INVOKED FUNCTION EXPRESSION - IIFE - "iffy"

(function() {
  //alert("Hello!");
})();

// IIFE FOR PRIVACY
let foo;
(function() {
  let foo = "bar";

  // Outputs: "bar"
  console.log(foo);
})();

console.log(foo);

// PROPERTY METHODS for OBJECT LITERALS
const car = {
  brand: "nissan",
  year: 2011,
  started: false,
  clean: false,
  plate: "XTR1341",

  startEngine: function() {
    this.started = true;
  },
  stopEngine: function() {
    this.started = false;
  },
  cleanCar: function() {
    this.clean = true;
  },
  changePlate(newPlate = this.plate) {
    if (typeof newPlate) {
      this.plate = newPlate;
    }
  }
};

// start engine
car.startEngine();
console.log(car);

// stop engine
car.stopEngine();
console.log(car);

// clean car
car.cleanCar();
console.log(car);

// changes plate
car.changePlate("XRM1121");
console.log(car);
