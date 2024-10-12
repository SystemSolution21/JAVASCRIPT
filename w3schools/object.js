//Create Object using literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
};

//Display person detail
document.getElementById("obj-lit").innerHTML =
  person.firstName + " " + person.lastName + " is " + person.age;

//Object Constructor Function
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

//Create new person
const employee = new Person("David", "lee", 25);

//Display employee details
document.getElementById("obj-con-fun").innerHTML =
  employee.firstName + " " + employee.lastName + " is " + employee.age;
