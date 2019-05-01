// (c) Enroute 2018
//
//     Prepared by AMG
//

//// Comparison operators
console.log("1 == '1' is " + (1 == "1"));
console.log("1 === 1 is " + (1 === 1));
console.log("1 !== '1' is " + (1 !== "1"));
console.log("1 > '1' is " + (1 > 1));
console.log("1 >= '1' is " + (1 >= 1));
console.log("1 < '1' is " + (1 < 1));
console.log("1 <= '1' is " + (1 <= 1));

//// Boolean
console.log("false && true is " + (false && true));
console.log("true || false is " + (false || true));
console.log("!true is " + !true);

//// IF Conditional
let mood = prompt("are you happy (Y/N)?");

if (mood === "Y") {
  console.log("Today I'm happy!");
} else {
  console.log("Today I'm not happy");
}

let bankAccountBalance = 60000;

if (bankAccountBalance >= 1000000) {
  console.log(`I'm Rich, I have ${bankAccountBalance} in my Bank Account!`);
} else if (bankAccountBalance >= 500000) {
  console.log(
    `I'm not that Rich, but still I have ${bankAccountBalance} in my Bank Account!`
  );
} else {
  console.log(
    `I'm not rich, I just have ${bankAccountBalance} in my Bank Account!:-(`
  );
}

//// How to test if a variable was defined
const abcd = "nothing";

if (typeof abcd == "undefined") {
  console.log("Variable abcd does not exist");
} else {
  console.log("Variable abcd was defined");
}

//// Boolean operator and conditional
const person = {
  name: "Alberto", // Albert
  age: 65 // Try 4, 5 and 65
};

if (person.name === "Albert" && person.age <= 4) {
  console.log("Albert is a toddler!");
} else if (person.name === "Albert" && person.age > 4) {
  console.log("Albert is not a toddler anymore");
} else if (person.age >= 65) {
  console.log(`${person.name} is a Senior Citizen`);
} else {
  console.log(
    `We know that ${person.name} is ${person.age} years old, but nothing more`
  );
}

person = prompt("What's your name");
// //// Ternary Operator
console.log(
  person === "Albertox" ? `Hellow Mr. ${person}` : "What is your name, Sr?"
);

//// Switches

const today = new Date().getDay();
console.log(today);

let weekDay;

switch (today) {
  case 0:
    weekDay = "Sunday";
    break;
  case 1:
    weekDay = "Monday";
    break;
  case 2:
    weekDay = "Tuesday";

  case 3:
    weekDay = "Wednesday";

  case 4:
    weekDay = "Thursday";
  case 5:
    weekDay = "Friday";
  case 6:
    weekDay = "Saturday";
    break;
  default:
    weekDay = "unknown!";
}
console.log(`Today is ${weekDay}`);
