var message = 'This is my message...';
console.log(message);
var no = 1234;
console.log(no);
var isMarried = true;
console.log(isMarried);
var data;
data = 12212.122;
data = 'hello';
data = true;
data = null;
console.log(data);
var check;
console.log(check);
var listOfNumbers = [98, 89, 90, 23, 45, 6, 77, 7];
var listOfBoolean = [true, false, true, false];
console.log(listOfNumbers);
console.log(listOfBoolean);
var tuple;
tuple = ['hi', 1234];
console.log(tuple);
var example;
example = [123, 'hi', true];
console.log(example);
listOfNumbers.forEach(function (element) {
    console.log(element);
});
var data1 = 'hi';
var Grades;
(function (Grades) {
    Grades["A"] = "Pass";
    Grades["B"] = "Good";
    Grades["C"] = "Average";
    Grades["D"] = "Below Average";
    Grades["E"] = "Ok";
    Grades["F"] = "Fail";
})(Grades || (Grades = {}));
;
console.log(Grades.A);
console.log(Grades.B);
console.log(Grades.C);
console.log(Grades.D);
console.log(Grades.E);
console.log(Grades.F);
