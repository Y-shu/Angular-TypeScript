"use strict";
exports.__esModule = true;
var TakeMoney = /** @class */ (function () {
    function TakeMoney(name, withdrawAcc, address, age, withdrawAmt) {
        this.name = name;
        this.withdrawAcc = withdrawAcc;
        this.address = address;
        this.age = age;
        this.withdrawAmt;
    }
    TakeMoney.prototype.withdrawing = function () {
        return "Mr.Mrs " + this.name + " bearing account number " + this.withdrawAcc + " is allowed to take "
            + this.withdrawAmt + " We are happy to serve you....";
    };
    return TakeMoney;
}());
exports.TakeMoney = TakeMoney;
