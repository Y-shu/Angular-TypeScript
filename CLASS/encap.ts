class Company{
    public name:string;
    public size:number;
    private income:number;
    public rating:number;
    private type:string;
    //getter function
    //we can access private memebers using the below method only coz the method is public
    // public getIncome():number{
    //     return this.income;
    // }
    public get Income():number{
        return this.income;
    }
    public getType():string{
        return this.type;
    }
    //setter function
    // public setIncome(income:number):void{
    //     this.income = income;
    // }
    public set Income(income:number){
        this.income = income;
    }
    public showCompany(name,income):string{
        return `Company Name:${name}
                Company Income:${income}`
    }
}
let company = new Company();
company.name = "My Company";
// company.set Income(1200000000);
// console.log("company Income",company.getIncome());
company.getType();
console.log("type of vehicle",company.getType());
//if want to access any method as property we can make use of "set" and "get" keywords
//this process is from es-5(ecmascript 5) so to execute
//tsc name.ts --target es5
company.Income=122000;
console.log("company income",company.Income);
var data = company.showCompany(company.name,company.Income);
console.log("Company Data:",data);

