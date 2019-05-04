// (c) Enroute 2018
//
//     Prepared by AMG
//

class Fruit {
  constructor(name, color, calories) {
    this.name = name;
    this.color = color;
    this.calories = calories;
  }
  info() {
    return `this ${this.color} ${this.name} 
            contains ${this.calories} calories`;
  }
}

class Smoothie extends Fruit {
  constructor(name, color, calories, size, hasMilk) {
    super(name, color, calories);

    this.size = size;
    this.hasMilk = hasMilk;
  }
  countCalories() {
    let totalCals;

    if (this.size === "large") {
      totalCals = 3 * Number.parseInt(this.calories);
    } else if (this.size === "medium") {
      totalCals = 2 * this.calories;
    } else totalCals = this.calories;
    return totalCals;
  }
}
