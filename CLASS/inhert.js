var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//taking something from parent
var Vehicle = /** @class */ (function () {
    function Vehicle(name, company, price) {
        this.name = name;
        this.company = company;
        this.price = price;
    }
    //this method is not taking any value so void
    Vehicle.prototype.vehicleDetails = function () {
        console.log("The vehicle is " + this.name + "\n                    Vehicle company is:" + this.company + "\n                    Vehicle price is :" + this.price);
    };
    return Vehicle;
}());
//adding Vehicle class methods and properties inside TwoWheeler class-Inherits
//so using extends keyword inorder to inherit
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TwoWheeler.prototype.run = function () {
        return this.speed;
    };
    return TwoWheeler;
}(Vehicle));
//creating a sub class object
var twowheeler = new TwoWheeler("HarleyHD", "Harley", 2000000);
//with the help of subclass we are accessing main class
twowheeler.vehicleDetails();
twowheeler.speed = 180;
var speed = twowheeler.run();
console.log("The Vehicle is " + twowheeler.name + " and runs at the speed of" + speed + "km/hr");
