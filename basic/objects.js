//singleton object
Object.create(null) //object with no prototype constructor type and single ton method
//object literal
const person = {
    name: "John",
    age: 30,
    city: "New York",
    email: "regmikenish@gmail.com"
    //key:value pair name acts as string by the computer
}

console.log(person);
console.log(person.name); //dot notation
console.log(person["age"]); //bracket notation


//Interview Question
const key = "email"
console.log(person.key); //undefined
console.log(person[key]); //

// using symbol as key
const mySymbol = Symbol("id")
const jsuser ={
    name: "Kenish",
    age: 22,
    isEmployed: false,
    skills: ["JavaScript", "React", "Node.js"],
    [mySymbol]: 12345 //symbol as key if [mySymbol] is not used it will be treated as string
}

console.log(jsuser[mySymbol]); //accessing symbol key

//For Freezing the object
Object.freeze(jsuser)
jsuser.age = 23 //will not change the age property
console.log(jsuser.age); //22

