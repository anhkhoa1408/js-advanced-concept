// Example 1: extends in OOP
function Animal(name, weight) {}

function Parrot() {
  Animal.apply(this, arguments);
  this.speak = () => {
    console.log(this);
  };
  this.fly = function () {
    console.log(this);
  };
}

const parrot = new Parrot("Parrot", 10);

console.log("parrot:", parrot);
parrot.speak();
parrot.fly();
