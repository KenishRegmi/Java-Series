//Dates

let current = new Date();
console.log(current.toString()); //current date and time
console.log(current.toDateString()); //current date
console.log(current.toTimeString()); //current time
console.log(current.toISOString()); //current date and time in ISO format
console.log(current.toUTCString()); //current date and time in UTC format
console.log(current.toLocaleString()); //current date and time in local format

console.log(typeof current); //object

const past = new Date(2020, 0, 1);
console.log(past.toString()); //1st January 2020
console.log(past.getFullYear()); //getFullYear method

const past2 = new Date("2020-01-01");
console.log(past2.toString()); //1st January 2020 10:00:00

let timestamp = Date.now();
console.log(timestamp); //current timestamp in milliseconds

console.log(current.getTime()); //current timestamp in milliseconds


//  To convert the time stamp to a date object
let dateFromTimestamp = new Date(timestamp);
console.log(dateFromTimestamp.toString()); //current date and time


let newdate = new Date();
console.log(newdate.getMonth() +1); //+1 should be added because getMonth() returns month from 0 to 11


newdate.toLocaleString("default", {month: "long"}); //long month name
console.log(newdate.toLocaleString("default", {month: "long"}));
