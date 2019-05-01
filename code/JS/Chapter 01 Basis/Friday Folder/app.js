// //
// var msg;
// console.log(msg);

// (function hello() {
//   var msg = "Hola";
//   console.log(msg);
// })();

// console.log(msg);

const car = {
  brand: "nissan",
  year: 2011,
  plate: "XTR1341",
  started: false,

  startEngine: function() {
    this.started = true;
  },
  status: function() {
    console.log(`${this.started ? "Engine running" : "Engine idle"}`);
  }
};

for (let i = 0; i <= 10; i++) {
  if (i === 5) {
    console.log("We are just in the middle");
    continue;
  }
  console.log(i);
}
