// (c) Enroute 2018
//
//     Prepared by AMG
//

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Add method "calculate age" using prototype
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const epoch = new Date(diff);
  return Math.abs(epoch.getUTCFullYear() - 1970);
};

// Add method "Get Full Name" using prototype
Person.prototype.getsFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};
// Add method "Gets Married" using prototype
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

// Create Famous People
const albert = new Person("Albert", "Einstein", "March/14/1879");
const marie = new Person("Marie", "Skłodowska", "November/7/1867");

console.log(albert);
console.log(marie);
console.log(`Single Name: ${marie.getsFullName()}`);
marie.getsMarried("Curie");
console.log(`Married Name: ${marie.getsFullName()}`);

// Is it a OWN property or INHERITED one?
console.log(
  `Is firstName alberto's Own Property? ${albert.hasOwnProperty("firstName")}`
);
console.log(
  `Is lastName alberto's Own Property? ${albert.hasOwnProperty("lastName")}`
);
console.log(
  `Is birthday alberto's Own Property? ${albert.hasOwnProperty("birthday")}`
);
console.log(
  `Is calculateAge alberto's Own Property? ${albert.hasOwnProperty(
    "calculateAge"
  )}`
);
console.log(
  `Is getsFullName alberto's Own Property? ${albert.hasOwnProperty(
    "getsFullName"
  )}`
);
console.log(
  `Is getsMarried alberto's Own Property? ${albert.hasOwnProperty(
    "getsMarried"
  )}`
);
