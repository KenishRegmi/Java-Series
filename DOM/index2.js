const parent = document.querySelector('.week');
const children = parent.children; // HTMLCollection of .day divs

// for (let i = 0; i < children.length; i++) {
//     console.log(children[i].textContent);
// }
// children[1].style.color = 'orange'
console.log(children.firstElementChild);

const day1 = document.querySelector('.day')
console.log(day1);

console.log(day1.parentElement); // gives the parent value
console.log(day1.nextElementSibling); // gives the next element 

console.log("NODES: ",parent.childNodes);
//9 
