//inteface meeting- with some properties
interface Meeting{
    time:string;
    place:string;
    schedule():string;
}
//trying to implement interface in abstract class
abstract class Employee1 implements Meeting{
    // public time:string;
    // public place:string;
 
     //if declaring inside constructor like below there is no need of declaring inside class
    constructor(public name:string,public salary:number,public time:string,public place:string){

    }
    //generic method??
    showSalary(){
        return this.salary;
    }
    //this must be impelemented by other classes - abstract
    abstract arragngeMeeting():void;
    abstract schedule():string;
 
}
//let employee = new Employee("john",20000) this way is not allowed coz cannot create instance
//of abstract class and interface

//so inorder to access that particular class 
//generic class - normal helps to access that particlur class
//class Hr1 extends Employee1 implements Meeting { --->we can do this here or in the parent class
//not an issue
class Hr1 extends Employee1 {
    constructor(public name:string,public salary:number,public time:string,public place:string)
    {
        //initilizating super class
        super(name,salary,time,place);
    }
    //initilizing parent class method??
    //generic class impelementing parent class
    arragngeMeeting():void{
        console.log("YOur Meeting is arranged at 2pm");
        
    }
    //normal class
    cancelMeeting():void{
        console.log("2pm Meeting got cancelled");
        
    }
    schedule():string{
        return "The time is "+this.time+"and place"+this.place
    }
}
//creating Object for HR for sub class
let hr1 = new Hr1("Yashu",50000,"12pm","HitechCity");
var sal=hr1.showSalary();
console.log(sal);
hr1.arragngeMeeting();
hr1.cancelMeeting();
//we are able to access interface from this
var schedule= hr1.schedule();
console.log(schedule);
