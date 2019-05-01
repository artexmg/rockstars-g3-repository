// (c) Enroute 2018
//     Prepared by AMG
// FOR LOOP

let arr = [
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
  "Sonntag"
];
arr.forEach(function(element, i) {
  console.log("Das Tag der Woche Nummer " + i + " ist " + element);
});

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
];

meses.forEach(funcionMeses);

function funcionMeses(mes, i) {
  console.log(`El mes ${i + 1} es: ${mes}.`);
}
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

users.forEach(userinfo);

//console.log(users[0].firstName);

function userinfo(element, index) {
  if (element.address.country == "MX") {
    console.log(
      `${element.firstName} ${element.address.country} ${element.phones[2]}`
    );
  }
}
