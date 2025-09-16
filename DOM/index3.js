const div = document.createElement('div') // creating element id 
console.log(div);
div.className = 'main'
div.id = 'my-id'
div.setAttribute("title", "generate")
div.style.backgroundColor = 'green'
div.style.padding = '12px'
// div.innerText = 'DOM | Document Object Model'
const text = document.createTextNode('DOM | Document Object Model')
div.appendChild(text)

//for attaching in the document

document.body.appendChild(div)