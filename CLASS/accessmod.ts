//accssed modifier cannot apply for classes,class is a module so we cannot use access modifiers
//so dont give--> public class PizzaAcc{ } its wrong
class PizzaAcc {
    //declared private only accessed with in the class with or without inheretance
    private name:string;
    //public(default) which can be used inside and outside class and out side file even
    public size:number;
    //declared protected only accessed with in class with inheretance
    protected type:string;
    public price:number;

    constructor(name:string,
            size:number,
            type:string,
            price:number,){
     
        this.name=name;
        this.size=size;
        this.price=price;
        this.type=type;
    }
      //if declare function as private we cannot override coz wont have access to it...
    private makePizza(price):void{
        console.log(`Hey we got an order of : ${this.name}Pizza of size ${this.size} as ${this.type}`);
        this.makePizza(this.price);
    }
 
    private orderPizza():void{
        console.log("Order came into Kitchen");
        console.log(`your order is ready price is :`,this.price);
        
        
    }
  
}

let pizzaAcc=new PizzaAcc("Cheeze Pizza",16,"veg",1900);
pizzaAcc.orderPizza();
pizzaAcc.name="Cheeze Pizza";
pizzaAcc.size=6;
pizzaAcc.type="Veg";
pizzaAcc.orderPizza();