// local scope
// {} is the scope
if (true) { 
let num1 = 10
let num2 = 20
const num3 = 30
var num4 = 40
}

// global scope
// console.log(num1);
// console.log(num2);
// console.log(num3);
console.log(num4); // var is function scoped so it can be accessed outside the block so that why var is not preferred to use

 //DOM - Document Object Model


 //Nested function scope

 function outerfunction() {
    const user = "Kenish"
    function innerfunction() {
        const url = "www.google.com"
        console.log(user); // you can access the user variable inside the innerfunction because of lexical scoping
    }
    // console.log(url); you can access the url only inside the innerfunction
    innerfunction();
 }
outerfunction();



//----------------------Concept of Global Object-----------------------
// In browsers, the global object is 'window'
// In Node.js, the global object is 'global'
// In Web Workers, the global object is 'self'

function add(value) {
return value+1
}
console.log(add(5));

const addtwo = function(value) { // function expression
    return value+2
}

addtwo(5)
console.log(addtwo(5));