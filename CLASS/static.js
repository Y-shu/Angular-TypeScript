var Vehicle1 = /** @class */ (function () {
    function Vehicle1(name1, company, price) {
        // this.name=name;
        //static properties or functions will get a memory only one time at the time of loading a progeam
        //we dont need to create object for accessing static feilds 
        //we can use class name to access static fields..One time Allocation of Memory!
        // this.company=company;
        // this.price=price;
    }
    //this method is not taking any value so void
    //we can make methods also static but it should have only static variables only
    //no non-static values are allowed...
    Vehicle1.vehicleDetails = function () {
        //for accessing this static object we dont need to access using this infront of static variable
        console.log("The vehicle is " + Vehicle1.name1 + "\n        \n                    Vehicle company is:" + Vehicle1.company + "\n                    Vehicle price is :" + Vehicle1.price + " ");
        //as the below price is not a sttaic property
        //     Vehicle price is :${this.price}
        //no need of cfreating any object for static field
    };
    Vehicle1.name1 = "Yamaha 180";
    //as many as objects created company get the memory assign a name Yamaha
    //so declared to use it only onetime so we create "Static"
    //How many objects created also for static variable only one memory is declared and it will
    //global
    //for accessing this static object we dont need to access using this infront of static variable
    Vehicle1.company = "Yamaha";
    Vehicle1.price = 100000;
    return Vehicle1;
}());
var company = Vehicle1.company;
var v1 = Vehicle1.vehicleDetails();
// console.log(company);
//non static field using out side class
//we get error for normal propety we need to go with object
// var name1 = Vehicle1.name;
//so constructing an object
// var v1 = new Vehicle1();
// console.log(v1.name);
