
//taking something from parent
export class Banking{
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

export class Depositing extends Banking{
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

