interface PurchaseCoolDrink{
    name:String;
    stock:Number;
    price:Number;
    type:String;
    isAlcoholic?:Boolean;

    purchase:()=>String;
    // make:()=>String;
  
};
interface sell{
    nameOfProduct:String;
    noOfProducts:Number;
    priceOfProduct:Number;
    selling:()=>String;
};
function selling(sellDrink:sell){
    let nameOfProduct:sellDrink.nameOfProduct;
    let noOfProducts:sellDrink.noOfProducts;
    let priceOfProduct:sellDrink.priceOfProduct;
    console.log(`SellACoolDrink:
    ${nameOfProduct}:
    ${noOfProducts}:
    ${priceOfProduct}:
    `);
    console.log(sellDrink.sell);

}
interface make{
    nameOfItem:String;
    noOfItems:Number;
    priceOfProduct:Number;
};
function purchase(buy:PurchaseCoolDrink){
    let name=buy.name;
    let stock=buy.stock;
    let price=buy.type;
    let type=buy.isAlcoholic;
    console.log(`BuyACoolDrink:
    ${name}:
    ${stock}:
    ${price}:
    ${type}:
    `);
    console.log(buy.price(price));
}
purchase({
     name:'Mazza',
     stock:'InStock',
     price:'30',
     type:'Juicy',
     purchase:function(price){
         return 'Mazza is in stock you can get it for' +price+'price';
     }
 });

