const mail = "regmikenish12@gmail.com"

if (mail)
{
    console.log("Got user mail")
}
else
{
    console.log("No user mail")
}

// Ternary Operator
const userMail = mail ? mail : "No mail found"
console.log(userMail)

// Truthy and Falsy values
// Falsy Values: false, 0,,-0, Bigint 0n "", null, undefined, NaN
// Truthy Values: "0" , "false" in string, [], {}, function(){}

const obj = {}

if (Object.keys(obj).length === 0){
    console.log("Object is empty")
}

let val1 
val1 = null ?? 101 //
console.log(val1)

//ternary operator
//Syntax: condition ? expr1 : expr2
const number = 10
const result = number % 2 === 0 ? "Even" : "Odd"
console.log(result)