"use strict";
exports.__esModule = true;
var banking_1 = require("./banking");
var depositing = new banking_1.Depositing("MyBank", "Hitech City", 12345, 40000, 100000);
//with the help of subclass we are accessing main class
depositing.bankDetails();
depositing.amount = 50000;
var loan = depositing.run();
console.log("Name of the bank is " + depositing.name + "and it can sanction loan up to" + loan + "amount");
var withdraw_1 = require("./withdraw");
var takemoney = new withdraw_1.TakeMoney("Yashu", 1234567, "Madhapur", 25, 20000);
var bank = takemoney.withdrawing();
console.log(bank);
takemoney.withdrawAcc = 101901901;
takemoney.withdrawAmt = 800000;
