
// 3. Build a feature for Store's Inventory.
// Suppose a store has a list of items and their prices in US Dollars stored as an object. Create a JavaScript
// program to convert the prices to Indian Rupees using an exchange rate of 1 USD to 80 INR. The program should
// use the map higher-order function to create a new object with the converted prices in Rupees.


const product={iphone:100 , samsungGalaxy:20 , nothingPhone :40,};

function converter(p){
    const oneusd=80;
    const indianprice= new Map();
 Object.keys(p).forEach(key => {
    const convertedPrice=p[key]*oneusd;
    indianprice.set(key,convertedPrice);
 });
 return indianprice;
 }

console.log(converter(product));


