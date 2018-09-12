enum member{
    name='Yashu',
    bankName='SBI',
    accountNumber=1234567890,
    branch='Hitech-City'
}
console.log(member);


try{
let choose:string=prompt("Welcome..!!\n Your option please?\n 1.Balance-Check \n 2.Deposit \n 3.WithDrawl \n 4. Account-Details");
let amount:any[];
amount=[10000,depositAmt,withDrawAmt];
switch (choose) {
  case '1': checkBalance();
            break;
  case '2': deposit();
            break;
  case '3': withDraw();
            break;
  case '4': accountDetails();
            break;
   default:  alert("Your Option is not Valid! Please enter a valid option!Thankyou!")
              break;
}
// balance checking
 void function checkBalance(){
  alert("The total balance is:"+amount);
  checking();
}
// amount depositing
void function deposit(){
depositAmt=prompt("Amount to be Deposited:");
  if(+depositAmt<0){
   throw "Not Allowed";
  }
else if(depositAmt>50000){
  throw  "Maximum deposited amount reached!"
}else{
      amount+=+depositAmt;
  alert("Deposited amount is:"+depositAmt);
  alert("Total balance is:"+amount);
checking();
}
}
// amount withdrawing
void function withDraw(){
  withDrawAmt=prompt("Amount to be withDrawl");
if((withDrawAmt[0])=="-"){
   throw "Not Allowed"
}
  else if(withDrawAmt<=amount){
      amount-=+withDrawAmt;
      alert("Withdrawl amount is:"+withDrawAmt);
     alert("Remaining Balance is:"+amount);
      checking();
}else{
  throw ("Insufficeient Funds. Please maintain minimum balance");
  checking();
 }
 }
// for user Details
void function accountDetails(){
      alert("******User Details******* \n" + member.name+"\n" + member.bankName+"\n" + member.accountNumber+"\n" +  member.branch );
   checking();
}
void function checking(){
var x:string=prompt("Do you wnt to continue type 'yes' otherwise you may exit")
if(x=="yes"){
  var choose:string=prompt("Choose which option do you want \n 1.CheckBalance \n 2.Deposit \n 3.WithDraw \n 4.AccountDetails");
   switch (choose) {
    case '1': checkBalance();
              break;
    case '2': deposit();
              break;
    case '3': withDraw();
              break;
    case '4': accountDetails();
              break;
   }
}else(
  alert("------>Thank You for Visiting Us!\nHave a nice day!<------")
)
}
}catch(error){
  alert(error);
  location.reload();
}