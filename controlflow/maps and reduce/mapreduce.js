// const coding = ['js', 'py', 'cpp', 'java'];

// const value = coding.forEach((element, index) => {  // for each doesnt return the value
//     console.log(`${index} : ${element}`);
// })

// console.log(value);

//Syntax: array.filter(callback(element, index, array), thisArg)
// thisArg is optional
// filter method creates a new array with all elements that pass the test implemented by the provided function


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums = numbers.filter((num) => num > 4)
// console.log(newNums);

// const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let newNums2 = numbers.filter((num1) => {
//    return num1 > 4
// })
// console.log(newNums2);

const newNums = []
numbers.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
}
})
console.log(newNums);

//.filter() is better than forEach() because filter() returns a new array and forEach() doesn't return anything
//Syntax of .filter() is .filter(callback(element, index, array), thisArg) and forEach() is .forEach((element, index, array) => { // code to be executed }, thisArg)



