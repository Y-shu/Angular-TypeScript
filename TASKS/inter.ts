interface CoolDrink{
    name:String;
    stock:String;
    price:Number;
    type:String;
    isAlocoholic?:Boolean;
    make:(making)=>String;

};
function purchase(sell:CoolDrink){
    let name=sell.name;
    let stock=sell.stock;
    let price=sell.price;
    let type=sell.type;
    let isAlocoholic=sell.isAlocoholic;
    console.log(isAlocoholic);
    console.log(`Selling a Product:
    ${name}
    ${stock}
    ${price}
    ${type}`);
    console.log(sell.make('Mazza'));
    
}
purchase({
        name:'Mazza',
        stock:'InStock',
        price:'30',
        type:'Juicy',
        make:function(making){
           return 'Making juice of'+making+'drink';
        } })
    