class Car {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

class Model extends Car {
  constructor(brand, model) {
    super(brand);
    this.model = model;
  }

  getModel() {
    return this.model;
  }
}

const myCar = new Model("Ford", "Mustang");

document.getElementById("demo").innerHTML =
  "I have " + myCar.getBrand() + ", it is " + myCar.getModel();
