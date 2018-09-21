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
//trying to implement interface in abstract class
var Employee1 = /** @class */ (function () {
    // public time:string;
    // public place:string;
    //if declaring inside constructor like below there is no need of declaring inside class
    function Employee1(name, salary, time, place) {
        this.name = name;
        this.salary = salary;
        this.time = time;
        this.place = place;
    }
    //generic method??
    Employee1.prototype.showSalary = function () {
        return this.salary;
    };
    return Employee1;
}());
//let employee = new Employee("john",20000) this way is not allowed coz cannot create instance
//of abstract class and interface
//so inorder to access that particular class 
//generic class - normal helps to access that particlur class
//class Hr1 extends Employee1 implements Meeting { --->we can do this here or in the parent class
//not an issue
var Hr1 = /** @class */ (function (_super) {
    __extends(Hr1, _super);
    function Hr1(name, salary, time, place) {
        var _this = 
        //initilizating super class
        _super.call(this, name, salary, time, place) || this;
        _this.name = name;
        _this.salary = salary;
        _this.time = time;
        _this.place = place;
        return _this;
    }
    //initilizing parent class method??
    //generic class impelementing parent class
    Hr1.prototype.arragngeMeeting = function () {
        console.log("YOur Meeting is arranged at 2pm");
    };
    //normal class
    Hr1.prototype.cancelMeeting = function () {
        console.log("2pm Meeting got cancelled");
    };
    Hr1.prototype.schedule = function () {
        return "The time is " + this.time + "and place" + this.place;
    };
    return Hr1;
}(Employee1));
//creating Object for HR for sub class
var hr1 = new Hr1("Yashu", 50000, "12pm", "HitechCity");
var sal = hr1.showSalary();
console.log(sal);
hr1.arragngeMeeting();
hr1.cancelMeeting();
//we are able to access interface from this
var schedule = hr1.schedule();
console.log(schedule);
