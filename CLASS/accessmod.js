var PizzaAcc = /** @class */ (function () {
    function PizzaAcc(name, size, type, price) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.type = type;
    }
    PizzaAcc.prototype.makePizza = function (price) {
        console.log("Hey we got an order of : " + this.name + "Pizza of size " + this.size + " as " + this.type);
        this.makePizza(this.price);
    };
    PizzaAcc.prototype.orderPizza = function () {
        console.log("Order came into Kitchen");
        console.log("your order is ready price is :", this.price);
    };
    return PizzaAcc;
}());
var pizzaAcc = new PizzaAcc("Cheeze Pizza", 16, "veg", 1900);
pizzaAcc.orderPizza();
pizzaAcc.name = "Cheeze Pizza";
pizzaAcc.size = 6;
pizzaAcc.type = "Veg";
pizzaAcc.orderPizza();
