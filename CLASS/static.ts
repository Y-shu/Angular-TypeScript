
class Vehicle1{
    public static name1:string="Yamaha 180";
    //as many as objects created company get the memory assign a name Yamaha
    //so declared to use it only onetime so we create "Static"
    //How many objects created also for static variable only one memory is declared and it will
    //global
    //for accessing this static object we dont need to access using this infront of static variable
    public static company:string="Yamaha";
    public static price:number=100000;
    constructor(name1:string,company:string,price:number){
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
    public static vehicleDetails():void{
        //for accessing this static object we dont need to access using this infront of static variable
        console.log(`The vehicle is ${Vehicle1.name1}
        
                    Vehicle company is:${Vehicle1.company}
                    Vehicle price is :${Vehicle1.price} `);
                  //as the below price is not a sttaic property
                //     Vehicle price is :${this.price}
        //no need of cfreating any object for static field
    }
}
//we dont use static keyword for constructor coz we use constructor to create object multiple times.....

let company= Vehicle1.company;
var v1=Vehicle1.vehicleDetails();


// console.log(company);
//non static field using out side class
//we get error for normal propety we need to go with object
// var name1 = Vehicle1.name;
//so constructing an object
// var v1 = new Vehicle1();
// console.log(v1.name);




