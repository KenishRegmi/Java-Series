//--------------------------------Reduce Method--------------------------------
//accumulator is like a container that holds the value
//current value is the current element being processed in the array



//Syntax: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
//initialValue is optional
const nums = [1,2,3,4,5];
const sum = nums.reduce(function (acc, curval) {
    console.log(acc, curval);
    
     return acc + curval
    },0) // 0 is the initial value of accumulator

console.log(sum);


const multiply = nums.reduce((acc, curval) => acc * curval, 1) // 1 is the initial value of accumulator
console.log(multiply);

//real life application of reduce method
const cart = [
    {
        name: "laptop",
        price: 30000,
    },
    {
        name: "phone",
        price: 20000,
    },
    {
        name: "tablet",
        price: 15000,
    },
    {
        name: "monitor",
        price: 25000,
    }
]

const totalPrice = cart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);