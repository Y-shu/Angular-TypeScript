//abstract-interface-constructor
//abstract class - an abstract class may contain implementation details for its members. 
//interface are not allowed instantiate not object is created...!
abstract class Employee{
     //if declaring inside constructor like below there is no need of declaring inside class
    constructor(public name:string,public salary:number){

    }
    //generic method??
    showSalary(){
        return this.salary;
    }
    //this must be impelemented by other classes - abstract
    abstract arragngeMeeting():void
}
//let employee = new Employee("john",20000) this way is not allowed coz cannot create instance
//of abstract class and interface

//so inorder to access that particular class 
//generic class - normal helps to access that particlur class
class Hr extends Employee{
    constructor(public name:string,public salary:number)
    {
        //initilizating super class
        super(name,salary);
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
}
//creating Object for HR for sub class
let hr = new Hr("Yashu",50000);
var sal=hr.showSalary();
console.log(sal);
hr.arragngeMeeting();
hr.cancelMeeting();