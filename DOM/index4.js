function language(langname) {
    const li =document.createElement('li')
    li.innerHTML = `${langname}`
    document.querySelector('.language').appendChild(li)
    
}

language('Ruby and Rails')
language('Rust')

function langopti(langname){
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langname))
    document.querySelector('.language').appendChild(li)
}

langopti('React JS')