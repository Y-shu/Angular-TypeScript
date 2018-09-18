var Heros = /** @class */ (function () {
    function Heros(name, age, film, remu) {
        this.name = name;
        this.age = age;
        this.film = film;
        this.remu = remu;
    }
    Heros.prototype.superHero = function (remu) {
        console.log("Hey he is a super hero and his age is " + this.age + " and he got reputation\n        from film called " + this.film + "and he takes remunaration around " + this.remu);
        this.superHero(this.remu);
    };
    Heros.prototype.performsaction = function () {
        console.log("He is best in action secens");
        console.log("He is ready to perform with remunaration around:", this.remu);
    };
    return Heros;
}());
var hero = new Heros("Mahesh", 35, "Athadu", 1000000);
hero.performsaction();
hero.name = "Mahesh";
hero.age = 35;
hero.film = "Athadu";
