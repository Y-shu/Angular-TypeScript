//Interface is For custom type
//Interface is nothing but special class with contains abstract propety and abstract function
//Interface is a contract ---- outer blue print
//we cannot create object for interface
//but we can create reference for interface..

interface Movie{
    //abstract property
    name:string;
    theater:string;
    time:number;
    //function
    //inside interface it will be abstract method or empty body function...
    //making them optional so that we need not implement
    // show?():string;
    // info?():string;
    //empty body functions
    show():string;
    info?():string;
}
interface MovieParking{
    //abstract property
    
    parktheater:string;
    parktime:number;
    parkprice:number;
    parkIn():string;
}
//performing inheretance with the help of interface
//empty-body function or function with body
//interface to class we use keyword-implement
//class is blue print
//multiple inheritance is allowd only in terms of interface not in classes
class Ticket implements Movie,MovieParking{
    name:string;
    theater:string;
    time:number;
    // name:string;
    parktheater:string;
    parktime:number;
    parkprice:number;
    // parkIn():string;
    // constructor(name:string,theater:string,time:number){
    //     this.name=name;
    //     this.theater=theater;
    //     this.time=time;
    // }
    show():string{
        return "YOur Movie " +this.name+" is at time " +this.time+ " in "+this.theater+ " this theater"
    }
    parkIn():string{
            return "No return"
    }
}
class Ticket2 implements Movie{
    name:string;
    theater:string;
    time:number;
    constructor(name:string,theater:string,time:number){
        this.name=name;
        this.theater=theater;
        this.time=time;
    }
    show():string{
        return this.getShow();
    }
    getShow():string{
        return "No return "
    }
}
// let ticket = new Ticket("The Nun","I Max",2);
let ticket2 = new Ticket2("The Nun","I Max",2);

// console.log(ticket.show());
console.log(ticket2.parkIn());

console.log(ticket2.show());

