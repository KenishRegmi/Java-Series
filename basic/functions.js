function showDetails() {
    console.log("Details are shown");
    
}

showDetails()


function AddNumber(number1, number2) {
    return number1 + number2
    console.log("Function ended") //this line will never be executed because it is after return statement
    
}
console.log(AddNumber(5, 10));