//Primitive Data Types
//1. String
let name = "John Doe"; // A sequence of characters enclosed in quotes
console.log("String:", name);
console.log("Type of name:", typeof name);

//2. Number
let age = 30; // Represents both integer and floating-point numbers
console.log("Number:", age);
console.log("Type of age:", typeof age);

//3. Boolean
let isStudent = false;
console.log("Boolean:", isStudent);
console.log("Type of isStudent:", typeof isStudent);

//4. Null
let emptyValue = null;
console.log("Null:", emptyValue);
console.log("Type of emptyValue:", typeof emptyValue); // Note: typeof null returns 'object' due to a historical bug in JavaScript

//5. Undefined
let notAssigned;
console.log("Undefined:", notAssigned);
console.log("Type of notAssigned:", typeof notAssigned);

//6. Symbol (ES6 feature)
let uniqueId = Symbol("id");
console.log("Symbol:", uniqueId);
console.log("Type of uniqueId:", typeof uniqueId);

//7. BigInt (ES2020 feature)
let bigIntNumber = BigInt(123456789012345678901234567890);
console.log("BigInt:", bigIntNumber);
console.log("Type of bigIntNumber:", typeof bigIntNumber);

//Non-Primitive Data Types
//1. Object
let person = { name: "Alice", age: 25 };
console.log("Object:", person);
console.log("Type of person:", typeof person);

//2. Array
let numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);
console.log("Type of numbers:", typeof numbers); // Note: typeof array returns 'object'

//3. Function
function greet() {
  return "Hello!";
}