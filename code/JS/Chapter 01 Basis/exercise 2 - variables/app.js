// PRIMITIVE DATATYPES
//comentario

const nombrePersona = "Roberto";
console.log(nombrePersona);

// // Strings
// const personName = "Arthur";
// console.log(
//   "Variable: personName=" + personName + ", datatype=" + typeof personName
// );

// Number
const personAge = 25;
console.log(
  "Variable: personAge=" + personAge + ", datatype=" + typeof personAge
);
// Boolean
const isRockstar = true; // <-- lowercase!!
console.log(
  "Variable: isRockstar=" + isRockstar + ", datatype=" + typeof isRockstar
);
// Undefined
let personThoughts;
console.log(
  "Variable: personThoughts=" +
    personThoughts +
    ", datatype=" +
    typeof personThoughts
);
// Undefined
const personRewards = null;
console.log(
  "Variable: personRewards=" +
    personRewards +
    ", datatype=" +
    typeof personRewards +
    " [ >WHY?< ]"
);

// Symbol
const personNationality = Symbol();
console.log("Variable: personNationality datatype=" + typeof personNationality);

// REFERENCE TYPES - Objects (non primitives)

// Array
const personLanguages = ["javaScript", "HTML", "CSS", "Linux", "Git"];
console.log(
  "Variable: personLanguages=" +
    personLanguages +
    ", datatype=" +
    typeof personLanguages
);
// Date
const hireDate = new Date();
console.log(
  "Variable: hireDate=[" + hireDate + "], datatype=" + typeof hireDate
);
// Object Literal
const personSkills = {
  javaScript: "expert",
  HTML: "expert",
  CSS: "expert",
  linux: "intermediate",
  previousExperience: true
};
console.log(personSkills);
