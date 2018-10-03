interface company{
    name?:string;
    type?:string;
    assets?:string;
    amount?:number;
    arrangeAmount?():number;
    giveAmount?():number;
}
 abstract class Development implements company{
    constructor(public name?:string,public type?:string,public assets?:string,
        public amount?:number){

        }
      


        showDevp():string{
            return "This company name is "+this.name+" it is of type "+this.type+" with assets around "
            +this.assets+ " ."
    
        }
     abstract arrangeAmount?():number;
     abstract giveAmount?():number;

}
class AccDevelopment extends Development{
    constructor(public name?:string,public type?:string,public assets?:string,
        public amount?:number){
            super(name,type,assets,amount);
        }
    arrangeAmount?():number{
        return this.amount;
    }
    giveAmount?():number{
        return this.amount;
        
    }
    show():string{
        return "Give Amount is "+this.amount+ " ."
    }
}
let accdevp = new AccDevelopment("Magic","Ltd","12cc",10000000);
let Amt=accdevp.arrangeAmount();
console.log(Amt);
let giveamt=accdevp.giveAmount();
console.log(giveamt);
let display=accdevp.show();
console.log(display);
let dis=accdevp.showDevp();
console.log(dis);


// let development = new Development("Magic","Ltd","12cc",10000000)