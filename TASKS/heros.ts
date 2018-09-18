class Heros {
   
    name:string;
    age:number;
    film:string;
    remu:number;

    constructor(name:string,
            age:number,
            film:string,
          
            remu:number,){
        
        this.name=name;
        this.age=age;
        this.film=film;
        this.remu=remu;
    }
   
    superHero(remu):void{
        console.log(`Hey he is a super hero and his age is ${this.age} and he got reputation
        from film called ${this.film}and he takes remunaration around ${this.remu}`);
        this.superHero(this.remu);
    }
  
    performsaction():void{
        console.log("He is best in action secens");
        console.log(`He is ready to perform with remunaration around:`,this.remu);
        
        
    }
  
}

let hero=new Heros("Mahesh",35,"Athadu",1000000);
hero.performsaction();
hero.name="Mahesh";
hero.age=35;
hero.film="Athadu";



