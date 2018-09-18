var Vehicle = /** @class */ (function () {
    //can be accessd inside class only with or without inhertance
    // private name:string;
    // public brand:string;
    // public company:string;
    // public type:string;
    //creating a constructor - initilizating a differet value for class 
    //if we are providing access modifier inside constructor we need not mention under class
    function Vehicle(name, brand, company, type) {
        this.name = name;
        this.brand = brand;
        this.company = company;
        this.type = type;
        // this.name="Apache";
    }
    //this function returns none so void
    Vehicle.prototype.run = function () {
        console.log("Name : " + this.name);
    };
    return Vehicle;
}());
//creating an object to access Vehicle class
var bike = new Vehicle("Jaguar TD", "Jaguar", "Jaguar", "fourwheeler");
bike.run();
