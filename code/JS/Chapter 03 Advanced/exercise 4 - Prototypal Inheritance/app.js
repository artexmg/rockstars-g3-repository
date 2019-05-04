// (c) Enroute 2018
//
//     Prepared by AMG
//

// Mammal constructor
function Mammal(order, family, genus, species) {
  this.order = order;
  this.family = family;
  this.genus = genus;
  this.species = species;
}

// Add new method to Mammal
Mammal.prototype.getsFullClassification = function() {
  return `${this.species}.${this.genus}.${this.family}.${this.order}`;
};

// Constructor for a Dog, using Mammal as Parent
function Dog(name, breed, dob) {
  Mammal.call(this, "Carnivora", "Canidae", "Canis", "Canis Lupus");

  this.name = name;
  this.breed = breed;
  this.birthday = new Date(dob);
}

apolo = new Dog("apolo", "boxer", "30/April/2016");

// PROTOTYPAL INHERITaNCE!

// Inherits the Mammal prototype methods
Dog.prototype = Object.create(Mammal.prototype);
// Set constructor to Dog()
Dog.prototype.constructor = Dog;

// This new Dog will inherits the method
coco = new Dog("coco", "pug", "1/January/2011");

console.log(`Mammal Classification: ${coco.getsFullClassification()}`);
// Overrites Mammal Method
Dog.prototype.getsFullClassification = function() {
  return `${this.name}.${this.breed}.${this.species}.${this.genus}.${
    this.family
  }.${this.order}`;
};

// Coco should have the new version of getsFullClassification
console.log(`Dog Classification:${coco.getsFullClassification()}`);
