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
//taking something from parent
var Bank = /** @class */ (function () {
    function Bank(name, address, IFSCCode) {
        this.name = name;
        this.address = address;
        this.IFSCCode = IFSCCode;
    }
    //this method is not taking any value so void
    Bank.prototype.bankDetails = function () {
        console.log("The Bank is " + this.name + "\n                    is in this area:" + this.address + "\n                    and its IFSCcode is :" + this.IFSCCode);
    };
    return Bank;
}());
var Deposit = /** @class */ (function (_super) {
    __extends(Deposit, _super);
    function Deposit(name, address, IFSCCode, amount, loan) {
        var _this = 
        //treggring super class before sub class is mandatory
        _super.call(this, name, address, IFSCCode) || this;
        _this.amount = amount;
        _this.loan = loan;
        return _this;
    }
    Deposit.prototype.run = function () {
        return this.amount;
    };
    return Deposit;
}(Bank));
var deposite = new Deposit("MyBank", "Hitech City", 12345, 40000, 100000);
//with the help of subclass we are accessing main class
deposite.bankDetails();
deposite.amount = 50000;
var loan = deposite.run();
console.log("Name of the bank is " + deposite.name + "and it can sanction loan up to" + loan + "amount");
