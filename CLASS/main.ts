
let message:string='This is my message...';
console.log(message);
let no : number=1234;
console.log(no);

let isMarried:boolean = true;
console.log(isMarried);

let data;
data=12212.122;
data='hello';
data=true;
data=null;
console.log(data);

let check;
console.log(check);

let listOfNumbers:number[] = [98,89,90,23,45,6,77,7];
let listOfBoolean:boolean[]=[true,false,true,false];
console.log(listOfNumbers);
console.log(listOfBoolean);
let tuple:[string,number];
tuple = ['hi',1234];
console.log(tuple);

let example :any[];
example=[123,'hi',true];
console.log(example);

listOfNumbers.forEach(element=>{
    console.log(element);
    
})

const data1='hi';

enum Grades {
    A='Pass',
    B='Good',
    C='Average',
    D='Below Average',
    E='Ok',
    F='Fail'
};
console.log(Grades.A);
console.log(Grades.B);
console.log(Grades.C);
console.log(Grades.D);
console.log(Grades.E);
console.log(Grades.F);

function showMessage(msg):never{
    throw new Error(msg);
}

