// Test for condition to fullfill promise
let goalAchived = confirm("Did you get the grades?");
//const goalAchived = false;

// PROMISE
let willIgetMyNewCar = new Promise(function(resolve, reject) {
  if (goalAchived) {
    car = {
      brand: "ferrari",
      year: "2018",
      model: "488 GTB",
      color: "red"
    };
    resolve(car);
  } else {
    let reason = new Error("You didn't get the grades");
    reject(reason);
  }
});

// ASK PARENTS!
let askParents = function() {
  willIgetMyNewCar
    .then(function(newCar) {
      // YOU GOT YOUR PROMISED CAR!
      document.body.innerHTML = `
     Congratulations, you got a new car!
            <li>${newCar.brand} </li>
            <li>${newCar.color} </li>
            <li>${newCar.model} </li>
      `;
    })
    .catch(function(message) {
      // SORRY, TRY HARDER NEXT TIME!
      document.body.innerHTML = `
       Sorry, try harder next time!
      `;
      console.log(message);
    });
};

//askParents();
