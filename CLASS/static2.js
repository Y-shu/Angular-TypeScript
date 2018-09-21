var Vehicle2 = /** @class */ (function () {
    function Vehicle2(name1, company, price) {
        // this.name=name;
        // this.company=company;
        // this.price=price;
    }
    Vehicle2.vehicleDetails = function () {
        console.log("The vehicle is " + Vehicle2.name1 + "\n        \n                    Vehicle company is:" + Vehicle2.company + "\n                    Vehicle price is :" + Vehicle2.price + " ");
    };
    Vehicle2.name1 = "Yamaha 180";
    Vehicle2.company = "Yamaha";
    Vehicle2.price = 100000;
    return Vehicle2;
}());
//using one class static property inside another class
var TwoWheeler1 = /** @class */ (function () {
    function TwoWheeler1() {
        this.company = Vehicle2.company;
    }
    TwoWheeler1.prototype.run = function () {
        console.log(this.company);
    };
    return TwoWheeler1;
}());
