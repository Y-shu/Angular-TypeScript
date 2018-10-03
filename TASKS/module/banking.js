"use strict";
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
exports.__esModule = true;
//taking something from parent
var Banking = /** @class */ (function () {
    function Banking(name, address, IFSCCode) {
        this.name = name;
        this.address = address;
        this.IFSCCode = IFSCCode;
    }
    //this method is not taking any value so void
    Banking.prototype.bankDetails = function () {
        console.log("The Bank is " + this.name + "\n                    is in this area:" + this.address + "\n                    and its IFSCcode is :" + this.IFSCCode);
    };
    return Banking;
}());
exports.Banking = Banking;
var Depositing = /** @class */ (function (_super) {
    __extends(Depositing, _super);
    function Depositing(name, address, IFSCCode, amount, loan) {
        var _this = 
        //treggring super class before sub class is mandatory
        _super.call(this, name, address, IFSCCode) || this;
        _this.amount = amount;
        _this.loan = loan;
        return _this;
    }
    Depositing.prototype.run = function () {
        return this.amount;
    };
    return Depositing;
}(Banking));
exports.Depositing = Depositing;
