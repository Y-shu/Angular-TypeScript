interface Shirt{
    shirtLength:string;
    collarLength:string;
    sleeveLength:string;
    //inorder to make it option keep '?'
    isButton?:boolean;
    //method
    //stitch is variable using arrow function returns a value of type string
    stitch:(color)=>string;
}

function tailor(dimensions:Shirt){
    let shirtLength=dimensions.shirtLength;
    let collarLength=dimensions.collarLength;
    let sleeveLength=dimensions.sleeveLength;
    let isButton=dimensions.isButton;
    //as it is made an option it will give us output as undefined
    console.log(isButton);
    
    console.log(`ShirtDimensions:
    ${shirtLength}:
    ${collarLength}:
    ${sleeveLength}:
    `);
    console.log(dimensions.stitch('Red'));
    
}
    tailor({
        shirtLength:'20cm',
        collarLength:'1cm',
        sleeveLength:'4cm',
        // isButton:false,
        //sending string value to above method
        stitch:function(color){
            return 'Stitching Shirt of '+color +' color';
        }
    })



