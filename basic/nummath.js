const score = 100


const balance = new Number(1000); // Using Number object
console.log(balance);
console.log(score);

console.log(balance.toString()); //toString method
console.log(balance.length); //undefined, because length is not a property of Number

console.log(balance.toFixed(2)); //toFixed method

const balance2 = 1234.56789;
console.log(balance2.toPrecision(5)); //toPrecision method

const balance3 = 100;
console.log(balance3.toLocaleString("en-US", {style: "currency", currency: "USD"})); //toLocaleString method
console.log(balance3.toLocaleString("de-DE", {style: "currency", currency: "EUR"})); //toLocaleString method



// Math object
console.log(Math.abs(-10)); //abs method negative to positive
console.log(Math.round(4.7)); //round method
console.log(Math.ceil(4.2)); //ceil method
console.log(Math.floor(4.7)); //floor method
console.log(Math.min(1, 2, 3, 4, 5)); //min method
console.log(Math.min(-1, -2, -3, -4, -5)); //min method with negative numbers
console.log(Math.max(1, 2, 3, 4, 5));



console.log(Math.random()); //random method
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10)); //random number between 0 and 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min) + min)); //random number between min and max