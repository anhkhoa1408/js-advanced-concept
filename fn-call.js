"use strict";

// Example 1
function random() {
  console.log(Math.random());
}

// random() <=> random.call()
random();
random.call();

// Example 2 and 4
const na = {
  firstName: "Phương",
  lastName: "Nhi",
};

const me = {
  firstName: "Anh",
  lastName: "Khoa",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

me.showFullName.call(na);

// using call without bind thisArg will return undefined in this
// me.showFullName.call();

// bind object
me.showFullName.call(me);

// Example 2 with strict mode
this.name = "Khoa";

function showName() {
  console.log(this.name);
}

showName.call(this);

// Example 3 with OOP
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Dog(name, weight, type) {
  Animal.call(this, name, weight);
  this.type = type;
}

const bao = new Dog("Fubao", 14, "Corgi");
console.log("bao:", bao);

// Example 4 with agruments
function agrExample() {
  console.log(...arguments);

  // Using forEach in Array prototype
  Array.prototype.forEach.call(arguments, (item, index) => {
    console.log("Array.prototype.forEach - item:", item);
  });
}

agrExample(1, 2, 3, 4, 5, 6);
