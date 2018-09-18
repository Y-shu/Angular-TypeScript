var Company = /** @class */ (function () {
    function Company() {
    }
    Object.defineProperty(Company.prototype, "Income", {
        //getter function
        //we can access private memebers using the below method only coz the method is public
        // public getIncome():number{
        //     return this.income;
        // }
        get: function () {
            return this.income;
        },
        //setter function
        // public setIncome(income:number):void{
        //     this.income = income;
        // }
        set: function (income) {
            this.income = income;
        },
        enumerable: true,
        configurable: true
    });
    Company.prototype.getType = function () {
        return this.type;
    };
    Company.prototype.showCompany = function (name, income) {
        return "Company Name:" + name + "\n                Company Income:" + income;
    };
    return Company;
}());
var company = new Company();
company.name = "My Company";
// company.set Income(1200000000);
// console.log("company Income",company.getIncome());
company.getType();
console.log("type of vehicle", company.getType());
//if want to access any method as property we can make use of "set" and "get" keywords
//this process is from es-5(ecmascript 5) so to execute
//tsc name.ts --target es5
company.Income = 122000;
console.log("company income", company.Income);
var data = company.showCompany(company.name, company.Income);
console.log("Company Data:", data);
