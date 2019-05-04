// (c) Enroute 2018
//
//     Prepared by AMG
//

class Dog {
  constructor(name, breed, dob) {
    this.name = name;
    this.breed = breed;
    this.birthday = new Date(dob);
  }
}
const benjie = new Dog("benjie", "yorkie", "01/Jan/2011");
console.log(benjie);

// add an object with Method

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const epoch = new Date(diff);
    return Math.abs(epoch.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  static yearsInBetween(date1, date2) {
    const iniDate = new Date(date1);
    const endDate = new Date(date2);

    const diff = endDate.getTime() - iniDate.getTime();
    const epoch = new Date(diff);
    return Math.abs(epoch.getUTCFullYear() - 1970);
  }
}
const hilary = new Person("Hilary", "Rodham", "26/oct/1947");
hilary.getsMarried("clinton");
