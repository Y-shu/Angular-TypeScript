
class Vehicle2{
    public static name1:string="Yamaha 180";

    public static company:string="Yamaha";
    public static price:number=100000;
    constructor(name1:string,company:string,price:number){
        // this.name=name;
   
        // this.company=company;
        // this.price=price;
    }
 
    public static vehicleDetails():void{
      
        console.log(`The vehicle is ${Vehicle2.name1}
        
                    Vehicle company is:${Vehicle2.company}
                    Vehicle price is :${Vehicle2.price} `);
          
    }
}
//using one class static property inside another class
class TwoWheeler1 {
    company= Vehicle2.company;
    run(){
        console.log(this.company);
        
    }
} 


