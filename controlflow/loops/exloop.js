//------------------------------ for of loop ------------------------------

const myarr = [1,2,3,4,5];

for (const num of myarr) {
    console.log(num);
}

const str = "Hello";
for (const char of str) {
    console.log(char);
}

const myMap = new Map() // Map is a collection of key-value pairs
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

console.log(myMap);

for (const [key, value] of myMap) {
    console.log(key);
    
}

const gameObje = {
    player: 'Alice',
    score: 100,
    level: 5
}

// for (const [key,value] of gameObje) { // This will give error because gameObje is not iterable
//     console.log(key);
// }

for (const key in gameObje) {
    console.log(`${key}: ${gameObje[key]}`);
}

const program = ["cpp", "java", "python", "javascript"];

for (const key in program) {
    console.log(`${key} : ${program[key]}`);
}


const code = ['js', 'py', 'cpp', 'java'];

code.forEach((element, index) => {
    console.log(`${index} : ${element}`);
});


const multiObj = [
    {
        name: "Alice",
        age: 25,
        programlan : "JavaScript"
    },
    {
        name: "Bob",
        age: 30,
        programlan : "Python"
    },
    {
        name: "Charlie",
        age: 35,
        programlan : "Java"
    },
]
multiObj.forEach((element) => {
    console.log(`Name: ${element.name}, Age: ${element.age}, Language: ${element.programlan}`);
})