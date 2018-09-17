function tailor(dimensions) {
    var shirtLength = dimensions.shirtLength;
    var collarLength = dimensions.collarLength;
    var sleeveLength = dimensions.sleeveLength;
    var isButton = dimensions.isButton;
    //as it is made an option it will give us output as undefined
    console.log(isButton);
    console.log("ShirtDimensions:\n    " + shirtLength + ":\n    " + collarLength + ":\n    " + sleeveLength + ":\n    ");
    console.log(dimensions.stitch('Red'));
}
tailor({
    shirtLength: '20cm',
    collarLength: '1cm',
    sleeveLength: '4cm',
    // isButton:false,
    //sending string value to above method
    stitch: function (color) {
        return 'Stitching Shirt of ' + color + ' color';
    }
});
