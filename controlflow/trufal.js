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
