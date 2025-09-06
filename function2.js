function calculateCartPrice(num1) {
    return num1
    
}

result = calculateCartPrice(5)

console.log(result);

function multipara(val1,val2, ...val3)//...val3 is rest parameter which can stores multiple values in array
{
 return val3
}

console.log(multipara(1,2,3,4,5,6,7,8,9,10));



const user = 
{
    name: "John",
    age: 30,
}

function handleobject(anyobject) // anyobject is parameter which takes object
{
    console.log(`Name is ${anyobject.name} and age is ${anyobject.age}`);

}

handleobject(user) // passing object by storing in variable

handleobject({   // in this way we can directly pass object without storing in variable
    name: "Alice",
    age: 25,
})


const arr1 = [1,2,3,4,5]

function returnarray(anyarray) // anyarray is parameter which takes array
{
    return anyarray[1]
}

returnarray(arr1) // passing array by storing in variable

console.log(returnarray(arr1));