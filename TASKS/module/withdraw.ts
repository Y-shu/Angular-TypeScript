export interface withdrawing{
    name:string;
    withdrawAcc:number;
    address:string;
    age:number;
    withdrawAmt:number;
    //empty body functions
    withdrawing():string;
}
export class TakeMoney implements withdrawing{
    public name:string;
    public withdrawAcc:number;
    public address:string;
    public age:number;
    public withdrawAmt:number;
    
    constructor(name:string,
        withdrawAcc:number,
        address:string,
        age:number,
        withdrawAmt:number){
            this.name=name;
            this.withdrawAcc=withdrawAcc;
            this.address=address;
            this.age=age;
            this.withdrawAmt;
         
                            }
    withdrawing():string{
        return "Mr.Mrs " +this.name+" bearing account number "+this.withdrawAcc+" is allowed to take "
                                +this.withdrawAmt+" We are happy to serve you...."
                            }
                        }
                       