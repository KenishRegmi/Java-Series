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

//editing addding and removing value
const secondlan = document.querySelector('li:nth-child(2)')
// secondlan.innerHTML = 'Mojo'
const newli = document.createElement('li')
newli.textContent = 'Mojo'
secondlan.replaceWith(newli)

//edit
const firstlan = document.querySelector('li:first-child')
firstlan.outerHTML = '<li>TypeScript</li>'

//remove
const lastlan = document.querySelector('li:last-child')
lastlan.remove()


