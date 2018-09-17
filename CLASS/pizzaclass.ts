//Binding elements-CLASS
class Pizza {
    //properties
    name:string;
    size:number;
    type:string;
    price:number;
    //creating Constructor 
    //like in java-class name and constructor name need not be same
    //in t.s per one class only one constructor
    //constructor is to instantiate class
    constructor(name:string,
            size:number,
            type:string,
            //optional property should always be at the end....
            price:number,){
        //initializing 
        this.name=name;
        this.size=size;
        this.price=price;
        this.type=type;
    }
      //with this keyword we access object inside class
    //out side the class we make use of objects
    //method
    //this method is not returning anything so void functionality
    makePizza(price):void{
        console.log(`Hey we got an order of : ${this.name}Pizza of size ${this.size} as ${this.type}`);
        this.makePizza(this.price);
    }
    //method
    //this keyword refers to current working object
    orderPizza():void{
        console.log("Order came into Kitchen");
        console.log(`your order is ready price is :`,this.price);
        
        
    }
  
}
//using class from outside...
//pizza referenece variable of class type -Pizza
// let pizza:Pizza;
//as reference variable dont have memory we cannot do pizza.makePizza(); it will
//return an error saying undefined
// pizza.makePizza();
//with this keyword we access object inside class
//out side the class we make use of objects
//default values sending to initilize constructor-class
//if we are not given price here coz its declared as optional propertythen there wont be any issue
//but if not kept optional propery then each and every propety has to be passed to initatiate constructor-class
//no concept of optional property in java...
let pizza=new Pizza("Cheeze Pizza",16,"veg",1900);
pizza.orderPizza();
pizza.name="Cheeze Pizza";
pizza.size=6;
pizza.type="Veg";
pizza.orderPizza();


