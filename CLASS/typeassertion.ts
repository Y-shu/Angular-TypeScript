let message = 'Hello';
let len = message.length;
//Type Assertion
let message1;
message1 = 'Hey...!';
let lengthOfMesg1=(<string>message1).length;
console.log(lengthOfMesg1);
//Type Assertion2
let message2;
message2 = 'Good Evening';
let smallString=(message2 as string).toLowerCase();
console.log(smallString);
//Type Assertion-Arrays
let list:number[]=[1,2,3,4,5,6];
let list1:Array<number>=[1,2,3,4,5,6,7];
let list2:any[]=[1,2,3,4,5,6,7,8];
console.log(list1);

var list3;
list3=[1,2,3,4];
console.log(list3);
console.log(list3.length);

let list4:Array<any>=['12',1212,2121,2];
console.log((list4 as string[]).length);
console.log((<Array<string>>list4).length);




