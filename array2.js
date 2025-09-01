const hero = ["Superman", "Batman",]
const villain = ["Lex Luthor", "Joker",]

const combined = [...hero, ...villain]
//push() 
console.log(combined) // ['Superman', 'Batman', 'Lex Luthor', 'Joker']

const combined2 = hero.concat(villain)
console.log(combined2) // ['Superman', 'Batman', 'Lex Luthor', 'Joker']

const mixed_array = [1,[1,2,3,] , 3, [4,5,6], 7]
const flattened = mixed_array.flat()
console.log(flattened) // [1, 1, 2, 3, 3, 4, 5, 6, 7]

console.log(Array.isArray(hero)) // true
