const myNumbers = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNumbers.map((num) => num + 10) // map returns a new array after performing the operation
console.log(newNums);


let newNums2 = myNumbers.map((num) => { // if you use chaining then the num value passes to the another function
    return num + 10
}).map((num) => num * 2)
console.log(newNums2);