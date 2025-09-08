let name = "John Doe";
let age = 30;
let city = "New York";
console.log(`My name is ${name}, I am ${age} years old and I live in ${city}.`); //string interpolation

//Declaration of string

const game = new String("Football");
const language = "JavaScript";
console.log(game);
console.log(language);

console.log(game[0]); //accessing character
console.log(language.charAt(0)); //accessing character

const phrase = "Hello, welcome to the world of JavaScript.";
const newstring = phrase.substring(7, 14); //substring
console.log(newstring);
 //if the value is put negative it counts from the end of the string

 newstring.replace("JavaScript", "programming"); //replace
 console.log(newstring);

 const text1 = "Hello";
 text1.replace("H", "J");
 console.log(text1); //strings are immutable
 console.log(text1.replace("H", "J")); //returns a new string
 
 text1.includes("e"); //includes
 console.log(text1.includes("e"));

 const text2 = "Hello Kenish"
 console.log(text2.split(" ")); //split

 const text3 = "     Hello World!     ";
 console.log(text3.trim()); //trim
 