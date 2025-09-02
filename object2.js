const user = new Object() //singleton object
const user1 = {} // nonsingleton object
console.log(user);
user.name = "Kenish"
user.id = 1223
user.email = "knsh3589@gmail.com"

console.log(user);


// const user2 = {
//     email: "regmikenish12@gmail.com"
//     fullname: {
//         firstname: "Kenish",
//         lastname: "Regmi"
//     }
// }

// console.log(user2.fullname);
// console.log(user2.fullname.firstname);

const object1 = {

    id: 1,
    name: "John",
    age: 30,}

const object2 = {
    id: 2,
    name: "Ayush",
    age: 20,
}

const object3 = Object.assign({}, object1, object2) //merging two objects
console.log(object3);


const object4 = {...object1, ...object2} //merging two objects using spread operator
console.log(object4);

console.log(Object.keys(object1)); //getting keys of object1
console.log(Object.values(object1));
 console.log(Object.entries(object1)); //getting key value pair as array of arrays

console.log(object1.hasOwnProperty("name")); //true
 