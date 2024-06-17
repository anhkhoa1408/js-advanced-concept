const ip = {
  // Property
  name: "Phone",
  color: "Dark",
  weight: 300,

  // Method
  takePhoto() {
    console.log(this);
  },
  objChild: {
    name: "Child Object",
    methodChild() {
      console.log(this);
    },
  },
};

ip.objChild.methodChild();

console.log(this);

function myFunc() {
  console.log(this);
}
myFunc();

const func = () => {
  console.log(this);
};
func();

function Phone(name) {
  this.name = name;
  this.takeCall = function () {
    console.log("Answer", this);
  };
}

const phone = new Phone("Iphone");
phone.takeCall();
