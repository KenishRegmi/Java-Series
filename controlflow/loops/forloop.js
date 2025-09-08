//---------------For loop------------------//
// for (let i = 1; i <10.;i++){
//     console.log(i);
// }

// star pattern
for (let i = 1; i <=5; i++){
    let stars = "";
    for (let j = 1; j <= i; j++){
        stars += "*";
    }
    console.log(stars);
}

// Another star pattern
for (let i = 5; i >=1; i--){
    let stars = "";
    for (let j = 1; j <= i; j++){
        stars += "*";
    }
    console.log(stars);
}

//Pyramid star pattern
for (let i = 1; i <=5; i++){
    quote = "";
    for (let j = 1; j <= 5 - i; j++){
        quote += " ";
    }
    for (let k = 1; k <= i; k++){
        quote += "* ";
    }   
    console.log(quote);
}

//break statement
for (let i = 1; i <= 10; i++){
    if (i === 6){
        break;
    }
    console.log(i);
}
//continue statement
for (let i = 1; i <= 10; i++){
    if (i === 6){
        continue;
    }
    console.log(i);
}
