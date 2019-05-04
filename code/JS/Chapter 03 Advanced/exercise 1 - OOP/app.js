// (c) Enroute 2018
//
//     Prepared by AMG
//

// This is the OBJECT ROBERTO
// What if we want MORE OBJECTS LIKE ROBERTO??
//

let roberto = {
  firstName: "roberto"
};

console.log(roberto);

//  Then we created a "CONSTRUCTOR"
//
//  Person CONSTRUCTOR
//

/*
function Person(name) {
  this.firstName = name;
}

const arturo = new Person("arturo");
const juan = new Person("juan");
const jose = new Person("jose");

console.log(arturo);
console.log(juan);
console.log(jose);
*/

// Let's make a more complex person
function Person(name, dob) {
  this.firstName = name;
  this.birthday = new Date(dob);
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

arturo = new Person("arturo", "01/01/1980");

console.log(arturo.firstName);
console.log(arturo.calculateAge());
