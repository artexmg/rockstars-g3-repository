// const fruits = ["banana", "apple", "orange", "grape", "mango"];

// fruits.forEach(function(e, i) {

//     console.log(`Element #${i} = ${e}`);

// });

// const dias = [
//   "Lunes",
//   "Martes",
//   "Miercoles",
//   "Jueves",
//   "Viernes",
//   "Sabado",
//   "Domingo"
// ];

// dias.forEach(showmeAllElements);

// function showmeAllElements(dia, index) {
//   console.log(index);
// }

users = [
  {
    firstName: "Arturo",
    lastName: "Montelongo",
    age: 25,
    phones: [121212, 3232121, 99999],
    address: { city: "Ciudad Juarez", country: "MX" }
  },
  {
    firstName: "Robert",
    lastName: "Mendez",
    age: 99,
    phones: [121212, 332223, 88731],
    address: { city: "Houston", country: "US" }
  },
  {
    firstName: "Albert",
    lastName: "E.",
    age: 45,
    phones: [121212, 332223, 434122312],
    address: { city: "Munich", country: "DE" }
  },
  {
    firstName: "Oscar",
    lastName: "Wilde",
    age: 12,
    phones: [121212, 332223, 828281],
    address: { city: "London", country: "UK" }
  },
  {
    firstName: "Monica",
    lastName: "Estrada",
    age: 105,
    phones: [121212, 21212, 212312],
    address: { city: "Cuernavaca", country: "MX" }
  }
];

users.forEach(showUser);

function showUser(element, index) {
  if (element.address.country === "MX") {
    console.log(
      `User Number ${index} ${element.firstName} ${element.lastName}`
    );
  } else {
    console.log(`This guy (${element.firstName}) is not from Mexico`);
  }
}
