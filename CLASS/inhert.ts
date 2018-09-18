//taking something from parent
class Vehicle{
    name:string;
    company:string;
    price:number;
    constructor(name:string,company:string,price:number){
        this.name=name;
        this.company=company;
        this.price=price;
    }
    //this method is not taking any value so void
    vehicleDetails():void{
        console.log(`The vehicle is ${this.name}
                    Vehicle company is:${this.company}
                    Vehicle price is :${this.price}`);
        
    }
}
//adding Vehicle class methods and properties inside TwoWheeler class-Inherits
//so using extends keyword inorder to inherit
class TwoWheeler extends Vehicle{
    public color :string;
    public speed :number;
    public run():number{
         return this.speed;
    }
    //we creating sub class we need to initilize super class constructor
    //using super method we will send sub class construstor values to super class values
    //super class will get initilize if we do so
  
    //every sub class has to initilize parent class constructor....its mandatory if its optinal value
    //no need of doing it just initilize sub class property
    
    constructor(name?:string,company?:string,price?:number,color?:string,speed?:number){
          //treggring super class before sub class is mandatory
                super(name,company,price);
                this.color=color;
                this.speed=speed;
    }
 
//     constructor(color?:string,speed?:number){
//               super();
//               this.color=color;
//               this.speed=speed;
//   }

}
//creating a sub class object
// let twowheeler = new TwoWheeler("HarleyHD","Harley",2000000);
//we need no pass any values from here...when sub class construstor is taking this part 
let twowheeler = new TwoWheeler();

//with the help of subclass we are accessing main class
twowheeler.vehicleDetails();
twowheeler.speed=180;
var speed = twowheeler.run();
console.log(`The Vehicle is ${twowheeler.name} and runs at the speed of`+speed+"km/hr");


