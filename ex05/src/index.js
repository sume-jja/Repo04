function main(numOne, numTwo){
    parseFloat(numOne);
    parseFloat(numTwo);
    // Only change code below this line
    var product = numOne * numTwo;  
    // Only change code above this line
    parseFloat(product);
    return product;

}
console.log(main(2.5, 2.0)); 
console.log(main(5.5, 5.5)); 
console.log(main(100.25, 43.20));  
module.exports = main;