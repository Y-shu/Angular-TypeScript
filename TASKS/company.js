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
var Development = /** @class */ (function () {
    function Development(name, type, assets, amount) {
        this.name = name;
        this.type = type;
        this.assets = assets;
        this.amount = amount;
    }
    Development.prototype.showDevp = function () {
        return "This company name is " + this.name + " it is of type " + this.type + " with assets around "
            + this.assets + " .";
    };
    return Development;
}());
var AccDevelopment = /** @class */ (function (_super) {
    __extends(AccDevelopment, _super);
    function AccDevelopment(name, type, assets, amount) {
        var _this = _super.call(this, name, type, assets, amount) || this;
        _this.name = name;
        _this.type = type;
        _this.assets = assets;
        _this.amount = amount;
        return _this;
    }
    AccDevelopment.prototype.arrangeAmount = function () {
        return this.amount;
    };
    AccDevelopment.prototype.giveAmount = function () {
        return this.amount;
    };
    AccDevelopment.prototype.show = function () {
        return "Give Amount is " + this.amount + " .";
    };
    return AccDevelopment;
}(Development));
var accdevp = new AccDevelopment("Magic", "Ltd", "12cc", 10000000);
var Amt = accdevp.arrangeAmount();
console.log(Amt);
var giveamt = accdevp.giveAmount();
console.log(giveamt);
var display = accdevp.show();
console.log(display);
var dis = accdevp.showDevp();
console.log(dis);
// let development = new Development("Magic","Ltd","12cc",10000000)
