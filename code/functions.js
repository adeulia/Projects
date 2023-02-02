class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}

var car1 = new Car('Chevy', 'Silverado', 2020);
var car2 = new Car('Ford', 'F150', 2019);

console.log('Car 1 is a ' + car1.year + ' ' + car1.make + ' ' + car1.model);
console.log('Car 2 is a ' + car2.year + ' ' + car2.make + ' ' + car2.model);