import {Depositing,Banking} from './banking';
let depositing = new Depositing("MyBank","Hitech City",12345,40000,100000);

//with the help of subclass we are accessing main class
depositing.bankDetails();
depositing.amount=50000;
var loan = depositing.run();
console.log(`Name of the bank is ${depositing.name}and it can sanction loan up to` +loan+ "amount");

import {TakeMoney,withdrawing}from './withdraw'
let takemoney=new TakeMoney("Yashu",1234567,"Madhapur",25,20000);
let bank=takemoney.withdrawing();
console.log(bank);
// takemoney.withdrawAcc=101901901;
// takemoney.withdrawAmt=800000;
