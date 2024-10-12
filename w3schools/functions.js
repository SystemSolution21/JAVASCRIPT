// Regular Function Declaration.
function reFuncAdd(a, b) {
  return a + b;
}
console.log(reFuncAdd(2, 3));

// Function Expression.
const exFuncMultiply = function (a, b) {
  return a * b;
};
console.log(exFuncMultiply(2, 3));

// Arrow Function Expression when single statement.
let arrFuncAdd = (a, b) => a + b;
console.log(arrFuncAdd(4, 5));

// Arrow Function Expression when multiple statement.
let arrFuncMultiStat = (guest) => {
  console.log("Hello");
  return "Hello " + guest;
};
console.log(arrFuncMultiStat("John"));

// Regular function 'this' represents the object that calls the function.
function regFuncThis() {
  document.getElementById("reg-this").innerHTML += this;
}
// The window object calls the function. Owner of 'this' is window.
window.addEventListener("load", regFuncThis);
// A button object calls the function. Owner of 'this' is button.
document.getElementById("btn-reg-this").addEventListener("click", regFuncThis);

//Arrow function 'this' represents the owner of the function.
let arrFuncThis = () => {
  document.getElementById("arr-this").innerHTML += this;
};
// The window object calls the function. Owner of 'this' is window.
window.addEventListener("load", arrFuncThis);
// A button object calls the function. Owner of 'this' is window too.
document.getElementById("btn-arr-this").addEventListener("click", arrFuncThis);

// Anonymous Self-invoking function.
(function () {
  console.log("Anonymous Self-invoking function");
})();

// Setting default value for undefined missing arguments.
function missArgument(x, y) {
  if (y === undefined) {
    y = 2;
  }
  return x * y;
}
document.getElementById("undef-mis-args").innerHTML = missArgument(8);

// default parameter values.
function defPara(x, y = 1) {
  return x + y;
}
document.getElementById("def-para").innerHTML = defPara(2);

// Function Rest parameter.
function resPara(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}
let x = resPara(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.getElementById("res-para").innerHTML = x;

// Javascript built-in "arguments" Object.
// find maximum value in array.
function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
let max = findMax(1, 123, 500, 115, 44, 88);
console.log(
  "Using built-in 'arguments' Object to find the maximum value in array: " + max
);
console.log(
  "Also using built-in Math.max() and apply() to find the maximum value in array: " +
    Math.max.apply(null, [1, 123, 500, 115, 44, 88])
);
// sum all the values of array.
function sumArray() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
let sum = sumArray(1, 123, 500, 115, 44, 88);
console.log(
  "Using built-in 'arguments' Object to sum all values of array: " + sum
);

// All functions are methods.
const person1 = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
document.getElementById("func-meth").innerHTML = person1.fullName();

// Predefined JavaScript call() method.
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  details: function (city, country) {
    return this.firstName + " " + this.lastName + "," + city + " " + country;
  },
  display: function () {
    let x = document.getElementById("bind-this");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};
const person2 = {
  firstName: "Mary",
  lastName: "Smith",
};
document.getElementById("call-meth").innerHTML = person.fullName.call(person2);

// call() method with arguments.
const Person3 = {
  firstName: "Suzuki",
  lastName: "Take",
};
document.getElementById("call-meth-arg").innerHTML = person.details.call(
  Person3,
  "Tokyo",
  "Japan"
);

// apply() method with array arguments.
document.getElementById("appl-meth-arry").innerHTML = person.details.apply(
  newPerson,
  ["Tokyo", "Japan"]
);

// bind() method, an object can borrow a method from another object.
const member = {
  firstName: "Charlie",
  lastName: "Chaplin",
};
let fullName = person.fullName.bind(member);
document.getElementById("bind").innerHTML = fullName();
// bind() preserve 'this' being lost, when function used as callback.
let display = person.display.bind(member);
setTimeout(display, 3000);

// Self-invoking Function Closure.
const count = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();
function counter() {
  document.getElementById("func-clos").innerHTML = count();
}
