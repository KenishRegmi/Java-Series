//-------------------------filter()-------------------------
// Syntax of .filter() is .filter(callback(element, index, array), thisArg)
// thisArg is optional
// filter method creates a new array with all elements that pass the test implemented by the provided function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newNums = numbers.filter((num) => num > 4)
console.log(newNums);

//-------------Real life application of filter method-----------------
const products = [
    {
        name: "laptop",
        price: 30000,
        brand: "lenovo",
        color: "silver"
    },
    {
        name: "phone",
        price: 20000,
        brand: "oneplus",
        color: "black"
    },
    {
        name: "tablet",
        price: 15000,
        brand: "samsung",
        color: "black"
    },
    {
        name: "monitor",
        price: 25000,
        brand: "dell",
        color: "black"
    }
]
const expensiveProducts = products.filter((product) => product.price > 20000)
console.log(expensiveProducts);
