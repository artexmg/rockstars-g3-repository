let car = {
  brand: "Nissan",
  year: 2011,
  plate: "XYZ-1234",
  state: "NL",
  isRunning: false,
  startEngine: function() {
    this.isRunning = true;
  },
  stopEngine: function() {
    this.isRunning = false;
  },
  updatePlate: function(newPlate) {
    this.plate = newPlate;
  }
};
console.log(car.plate);
newPlate = prompt("Enter New Plate");
car.updatePlate(newPlate);
console.log(car.plate);
