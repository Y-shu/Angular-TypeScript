;
function purchase(sell) {
    var name = sell.name;
    var stock = sell.stock;
    var price = sell.price;
    var type = sell.type;
    var isAlocoholic = sell.isAlocoholic;
    console.log(isAlocoholic);
    console.log("Selling a Product:\n    " + name + "\n    " + stock + "\n    " + price + "\n    " + type);
    console.log(sell.make('Mazza'));
}
purchase({
    name: 'Mazza',
    stock: 'InStock',
    price: '30',
    type: 'Juicy',
    make: function (making) {
        return 'Making juice of' + making + 'drink';
    }
});
