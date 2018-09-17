//Binding elements-CLASS
var Pizza = /** @class */ (function () {
    //creating Constructor 
    //like in java-class name and constructor name need not be same
    //in t.s per one class only one constructor
    //constructor is to instantiate class
    function Pizza(name, size, type, price) {
        //initializing 
        this.name = name;
        this.size = size;
        this.price = price;
        this.type = type;
    }
    //with this keyword we access object inside class
    //out side the class we make use of objects
    //method
    //this method is not returning anything so void functionality
    Pizza.prototype.makePizza = function (price) {
        console.log("Hey we got an order of : " + this.name + "Pizza of size " + this.size + " as " + this.type);
        this.makePizza(this.price);
    };
    //method
    //this keyword refers to current working object
    Pizza.prototype.orderPizza = function () {
        console.log("Order came into Kitchen");
        console.log("your order is ready price is :", this.price);
    };
    return Pizza;
}());
//using class from outside...
//pizza referenece variable of class type -Pizza
// let pizza:Pizza;
//as reference variable dont have memory we cannot do pizza.makePizza(); it will
//return an error saying undefined
// pizza.makePizza();
//with this keyword we access object inside class
//out side the class we make use of objects
//default values sending to initilize constructor-class
var pizza = new Pizza("Cheeze Pizza", 16, "veg", 1900);
pizza.orderPizza();
pizza.name = "Cheeze Pizza";
pizza.size = 6;
pizza.type = "Veg";
pizza.orderPizza();
