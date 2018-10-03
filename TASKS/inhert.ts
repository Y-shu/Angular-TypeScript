//taking something from parent
class Bank{
    name:string;
    address:string;
    IFSCCode:number;
    constructor(name:string,address:string,IFSCCode:number){
        this.name=name;
        this.address=address;
        this.IFSCCode=IFSCCode;
    }
    //this method is not taking any value so void
    bankDetails():void{
        console.log(`The Bank is ${this.name}
                    is in this area:${this.address}
                    and its IFSCcode is :${this.IFSCCode}`);
        
    }
}

class Deposit extends Bank{
    public amount:number;
    public loan :number;
    public run():number{
         return this.amount;
    }
 
    
    constructor(name?:string,address?:string,IFSCCode?:number,amount?:number,loan?:number){
          //treggring super class before sub class is mandatory
                super(name,address,IFSCCode);
                this.amount=amount;
                this.loan=loan;
    }

}

let deposite = new Deposit("MyBank","Hitech City",12345,40000,100000);

//with the help of subclass we are accessing main class
deposite.bankDetails();
deposite.amount=50000;
var loan = deposite.run();
console.log(`Name of the bank is ${deposite.name}and it can sanction loan up to` +loan+ "amount");


