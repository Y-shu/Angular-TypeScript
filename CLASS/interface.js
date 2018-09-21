//Interface is For custom type
//Interface is nothing but special class with contains abstract propety and abstract function
//Interface is a contract ---- outer blue print
//we cannot create object for interface
//but we can create reference for interface..
//performing inheretance with the help of interface
//empty-body function or function with body
//interface to class we use keyword-implement
//class is blue print
var Ticket = /** @class */ (function () {
    function Ticket(name, theater, time) {
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    Ticket.prototype.show = function () {
        return "YOur Movie " + this.name + " is at time " + this.time + " in " + this.theater + " this theater";
    };
    return Ticket;
}());
var Ticket2 = /** @class */ (function () {
    function Ticket2(name, theater, time) {
        this.name = name;
        this.theater = theater;
        this.time = time;
    }
    Ticket2.prototype.show = function () {
        return this.getShow();
    };
    Ticket2.prototype.getShow = function () {
        return "No return ";
    };
    return Ticket2;
}());
var ticket = new Ticket("The Nun", "I Max", 2);
var ticket2 = new Ticket2("The Nun", "I Max", 2);
console.log(ticket.show());
console.log(ticket2.show());
