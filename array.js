//Array

const array = [1, 2, 3, 4, 5];
console.log(array);
console.log(typeof array); //object

console.log(array[0]); //first element
console.log(array.length); //length property

//Shallow Copy
const array2 = array;
console.log(array2);
array2[0] = 10; //changing first element of array2
console.log(array2);

const array3 = new Array(6, 7, 8, 9, 10); //using Array constructor

array3.push(11); //push method add element at the end
console.log(array3);

array2.pop(); //pop method remove element from the end
console.log(array2);

const removedElement = array2.pop(); //pop method return removed element
console.log(removedElement);

const arr2 = [1, 2, 3, 4, 5];
arr2.unshift(0); //unshift method add element at the beginning
console.log(arr2);

arr2.join("-"); //join method join all elements of array into a string
console.log(arr2.join("-"));

//slice, splice

const arr3 = [1, 2, 3, 4, 5];
const slicedArray = arr3.slice(1, 4); //slice method return a new array from start index to end index (end index not included)
console.log(slicedArray);
console.log(arr3); //original array not changed

const splicedArray = arr3.splice(1, 2, 10, 11); //splice method remove elements from start index and add new elements, return removed elements
console.log(arr3); //original array changed
console.log(splicedArray);