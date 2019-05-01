// (c) Enroute 2018
//
//     Prepared by AMG
//
// FOR LOOP

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("We are just in the middle");
    continue;
  }
  console.log(i);
}

startTime = new Date().getTime();
//console.log(startTime);

// FOR LOOP - Break & Continue

for (let i = 0; i < 100; i++) {
  timeElapsed = new Date().getTime() - this.startTime;

  if (i === 5) {
    console.log("We are just in the middle");
    continue;
  }
  if (timeElapsed > 3) {
    console.log(
      `Time Elapsed ${timeElapsed} is too long. End cicle at iteration ${i}`
    );
    break;
  } else {
    console.log(`time elapsed ${timeElapsed} i=${i}`);
  }
}

// WHILE LOOP
let tickets = 10;

while (tickets > 0) {
  console.log(`Ride the Rollacoster, we have ${tickets} ticket left!`);
  tickets--;
}
console.log("Tickets are gone!");

// DO .. WHILE
let scoop = 1;

do {
  console.log(`Add scoop #${scoop}`);
  scoop++;
} while (scoop <= 5);
{
  console.log(`This is a ${scoop - 1}-scoops icecream!`);
}

// Arrays loops

const fruits = ["apple", "banana", "orange", "grape", "watermelon"];

fruits.forEach(function(fruit, index) {
  console.log(`fruit #${index} = ${fruit}`);
});

// MAP
const users = [
  { id: 101, name: "Richard Mathew" },
  { id: 201, name: "Albert Siqueiros" },
  { id: 212, name: "Spencer Robins" },
  { id: 215, name: "Marcell Menendez" },
  { id: 532, name: "Sophie Maturana" }
];
const idArray = users.map(function(user, i) {
  return user.id;
});

console.log(idArray);

// For ... in loop

var obj = { a: 1, b: 2, c: 3 };

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

for (let user in users) {
  console.log(user + " " + users[user].name);
}
