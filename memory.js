//Stack, Heap, Static Memory

//Stack Memory
let a = 10;
let b = 20;
let sum = a + b;
console.log("Stack Memory Sum:", sum); // Outputs: 30
console.log("Stack Memory a:", a); // Outputs: 10
console.log("Stack Memory b:", b); // Outputs: 20
console.log("Stack Memory sum:", sum); // Outputs: 30

//Heap Memory
let obj1 = { name: "Alice", age: 25 };
let obj2 = obj1; // Both obj1 and obj2 reference the same object in heap memory
obj2.age = 30; // Modifying obj2 also affects obj1
console.log("Heap Memory obj1:", obj1); // Outputs: { name: "Alice", age: 30 }
console.log("Heap Memory obj2:", obj2); // Outputs: { name: "Alice", age: 30 }
