// Block scope - let, const
{
  const a = 5;
  let b = 100;
  console.log("a in block scope", a);
  console.log("b in block scope", b);
}

// Reference to block scope outside block will throw an error
// console.log(a);

// Global or function scope (local scope) - var
var x = 10;
console.log("y in global scope", y);

var y = 30;
{
  var y = 100;
  console.log("y in global scope", y);
  function scopeCheck() {
    var y = 100;
    console.log("y in function (local) scope", y);
  }
  scopeCheck();
}
console.log("y in global scope", y);
