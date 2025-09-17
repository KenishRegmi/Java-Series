// document.getElementById('list-one').addEventListener('click', function(e){
//     console.log('You clikced an unorder list');
    
// },false)
document.getElementById('img-one').addEventListener('click', function(e){
    console.log("Mess is the goat");
},false)


//----------------Things that should be learnt about Events--------------------------
//false is always defult
//false is event bubbling
//types of events should be learnt
//timestamp is asked
//defaultPrevented 
//target, toElement, srcElement, currentTarget

//Interview-clientX,clientY,screenX,screenY

//altkey,ctrlkey,shiftkey, keyCode


//--------------------Event Propagation------------------
// Event bubbling // why false is used
// firstly the inside element is trigerred then inside is trigerred

// Event Capturing //why true is used
// It captures fromt top to bottom meaning which ever is first clicked that is done



document.getElementById('list-one').addEventListener('click', (e) => {
    console.log(e.target); //wharever you clicked gives img as it is 
    console.log(e.target.parentNode); // give li as the parent of img is li
    let remove1 = e.target.parentNode


})


