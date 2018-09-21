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
//abstract-interface-constructor
//abstract class - an abstract class may contain implementation details for its members. 
//interface are not allowed instantiate not object is created...!
var Employee = /** @class */ (function () {
    //if declaring inside constructor like below there is no need of declaring inside class
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    //generic method??
    Employee.prototype.showSalary = function () {
        return this.salary;
    };
    return Employee;
}());
//let employee = new Employee("john",20000) this way is not allowed coz cannot create instance
//of abstract class and interface
//so inorder to access that particular class 
//generic class - normal helps to access that particlur class
var Hr = /** @class */ (function (_super) {
    __extends(Hr, _super);
    function Hr(name, salary) {
        var _this = 
        //initilizating super class
        _super.call(this, name, salary) || this;
        _this.name = name;
        _this.salary = salary;
        return _this;
    }
    //initilizing parent class method??
    //generic class impelementing parent class
    Hr.prototype.arragngeMeeting = function () {
        console.log("YOur Meeting is arranged at 2pm");
    };
    //normal class
    Hr.prototype.cancelMeeting = function () {
        console.log("2pm Meeting got cancelled");
    };
    return Hr;
}(Employee));
//creating Object for HR for sub class
var hr = new Hr("Yashu", 50000);
var sal = hr.showSalary();
console.log(sal);
hr.arragngeMeeting();
hr.cancelMeeting();
