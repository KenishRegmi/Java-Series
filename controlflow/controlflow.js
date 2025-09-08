//----------------------------------Control Flow Statements----------------------------------//
// Control flow statements are used to control the flow of execution in a program based on certain conditions or loops.
// They allow you to make decisions, repeat actions, and manage the flow of your code effectively.
// Here are some common control flow statements in JavaScript:

// if statement
const age = 18;
if (age >= 18) { 
    console.log("You are an adult.");
}

// <, >, <=, >=, ==, ===, !=, !==
//  === strict equality operator (checks value and type)
//!== strict inequality operator (checks value and type)


// if-else statement
const time = 10;
if (time < 12) { 
    console.log("Good morning!");
}
else { 
    console.log("Good afternoon!");
}

// implicit scope
if (true) console.log("This is true!");

// && (logical AND) operator
const isAdult = true;
const hasID = true;
if (isAdult && hasID) { 
    console.log("You can enter the club.");
}

// || (logical OR) operator
const isWeekend = false;
const isHoliday = true;
if (isWeekend || isHoliday) {
    console.log("You can relax today.");
}