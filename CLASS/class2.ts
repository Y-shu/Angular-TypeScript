class Vehicle{
    //can be accessd inside class only with or without inhertance
    // private name:string;
    // public brand:string;
    // public company:string;
    // public type:string;
    //creating a constructor - initilizating a differet value for class 
    //if we are providing access modifier inside constructor we need not mention under class
    constructor(private name?:string,public brand?:string,public company?:string,public type?:string){
                // this.name="Apache";
    }
    //this function returns none so void
    public run():void{
        console.log(`Name : ${this.name}`);
        
    }

}
//creating an object to access Vehicle class
let bike= new Vehicle("Jaguar TD","Jaguar","Jaguar","fourwheeler");
bike.run();
