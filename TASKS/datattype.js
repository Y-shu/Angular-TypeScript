// The most basic datatype is the simple true/false value, which JavaScript and TypeScript call a boolean value.
var bool = true;
console.log(bool);
//number type
var num = 1234;
console.log(num);
//string type
var myname = 'Y-shu';
console.log(myname);
//array
var myarr;
myarr = [1, 2, 3, 4, 5];
console.log(myarr);
//tuple
var x;
x = ['Y-shu', 1234, 'Mickey'];
console.log(x);
//enum
var flower;
(function (flower) {
    flower[flower["Rose"] = 9] = "Rose";
    flower[flower["Lilly"] = 7] = "Lilly";
    flower[flower["Lotus"] = 4] = "Lotus";
})(flower || (flower = {}));
var f = flower.Lilly;
console.log(f);
//enum2
var mickey;
(function (mickey) {
    mickey[mickey["kittu"] = 12] = "kittu";
    mickey[mickey["krish"] = 6] = "krish";
    mickey[mickey["munnu"] = 9] = "munnu";
})(mickey || (mickey = {}));
;
var m = mickey.munnu;
console.log(m);
//any
var y = 5;
y = 'Hello.....';
// y=true;
console.log(y);
