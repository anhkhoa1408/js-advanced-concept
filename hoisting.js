// Code in js is readed and hoisting
/////////////////////// Example of var ///////////////////////
// temp variable declaration is placed to the top, which is global scope
console.log(temp); // undefined
var temp = 10;

// This code is equivalent to
var temp;
console.log(temp);
temp = 10;

/////////////////////// Example of function ///////////////////////
// sum function declaration is placed to the top, which is global scope
console.log(sum(3, 4));
function sum(a, b) {
  return a + b;
}

/////////////////////// Example of let, const ///////////////////////
console.log(temp2);
let temp2 = 10;
// Exception - ReferenceError: Cannot access 'temp2' before initialization in let and const
