const user = {
    username: "Kenish",
    age: 20,
    greet: function() { // method
        console.log(`Hello, my name is ${this.username} and I am ${this.age} years old.`); // this keyword refers to the current object
}

}
// user.greet(); // calling method
// user.username = "Alice"; // changing property value
// user.greet(); // calling method again to see the change


console.log(this); // in global scope, this refers to the global object (window in browsers, global in Node.js)


//------------------Concept of Arrow Function------------------
function order(){
    let item = "Pizza"
    console.log(this.item); // in regular function, this refers to the global object
    // the above this.item is undefined because item is not a property of global object
}

order();

// Arrow function
const order2 = () => { 
    let item = "Burger"
    console.log(this); // in arrow function, this refers to the enclosing lexical context (global object in this case)
    // the above this.item is undefined because item is not a property of global object
}

order2();

// Pure Arrow Function
// Syntax: const functionName = (parameters) => { // function body }
const add = (num1, num2) => { 
    return num1 + num2
}

console.log(add(5, 10));


// Implicit return in Arrow Function
const multiply = (num1, num2) => num1 * num2 // no need to use return keyword and curly braces for single expression
console.log(multiply(5, 10));

// in {} we need to use return keyword and for single expression we can omit {} and return keyword
