// (c) Enroute 2018
//
//     Prepared by AMG
//
const person = {
  firstName: "Robert",
  lastName: "Calavanti",
  age: 32,
  email: "rcalavanti@gmail.com",
  address: {
    city: "Houston",
    state: "Texas"
  }
};

console.log(person);

// Get specific value
name = person.lastName + ", " + person.firstName;

console.log(name);
console.log("is " + person["age"] + " years old");
console.log("lives in " + person.address.city);

// Array of Object Literals
const people = [
  { name: "Ricardo", age: 21 },
  { name: "Alberto", age: 42 },
  { name: "Theodore", age: 75 }
];

console.log(people);
