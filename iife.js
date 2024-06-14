// IIFE
(function myFunc(message) {
  console.log("THIS IS IIFE " + message);
})("!!!");

// Error
// myFunc("!!!");

const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  edit(index, car) {
    this.cars[index] = car;
  },
};

console.log(app);

// user can also
app.cars = null;

// By using IIFE
const appIIFE = (function () {
  let cars = [];

  return {
    add(car) {
      cars.push(car);
    },
    get(index) {
      return cars[index];
    },
    edit(index, car) {
      cars[index] = car;
    },
  };
})();

// This will hide cars because it is block variable
console.log(appIIFE);

// This will show error => Ensure data integrity, user cannot change cars
appIIFE.add("aaa");
console.log(appIIFE.get(0));
