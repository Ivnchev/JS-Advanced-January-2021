function solve() {
    let btnAdd = document.querySelector('button')
    let adoption = document.querySelector('#adoption > ul')
    let adopted = document.querySelector('#adopted > ul')
    let inputItems = Array.from( document.querySelectorAll('#container input') )
    let [nameIn, ageIn, kindIn, ownerIn] = inputItems
 
    btnAdd.addEventListener('click', main)
 
    function main(e){
        e.preventDefault()
        let data  = [nameIn.value, ageIn.value, kindIn.value]
        let owner = ownerIn.value
        if(!inputItems.every(x => x.value) || !Number(ageIn.value)){
            inputItems.map(x => x.value = '')
            return
        }
        inputItems.map(x => x.value = '')
        let liElement = newElement.call(undefined, 'li')
        let div = newElement.call(undefined, 'div')
        let pElement = newElement.call(undefined, 'p', paragraph(data))
        let spanEl = newElement.call(undefined, 'span', `Owner: ${owner}`)
        let btnContact = newElement.call(undefined, 'button', 'Contact with owner')
        let inputField = newElement.call(undefined, 'input')
        inputField.setAttribute('placeholder', 'Contact with owner')
        btnContact.addEventListener('click', evt => {
            let currentUl = evt.target.parentElement.parentElement
            if(btnContact.innerHTML === 'Yes! I take it!' && inputField.value !== ''){
                currentUl.children[1].innerHTML = `New Owner: ${inputField.value}`
                div.removeChild(div.lastElementChild)
                btnContact.innerHTML = 'Checked'
                adoption.removeChild(currentUl)
                currentUl.appendChild(btnContact)
                currentUl.removeChild(div)
                adopted.appendChild(currentUl)
            }else if(btnContact.innerHTML === 'Checked') {
                adopted.removeChild(evt.target.parentElement)
            } else {
                btnContact.innerHTML = 'Yes! I take it!'
                div.appendChild(inputField)
                liElement.removeChild(btnContact)
                inputField.setAttribute("placeholder", "Enter your names")
                div.appendChild(btnContact)
                liElement.appendChild(div)
            }
        })
        liElement.appendChild(pElement)
        liElement.appendChild(spanEl)
        liElement.appendChild(btnContact)
 
        adoption.appendChild(liElement)
 
    }
    function paragraph(array){
        let info = [' is a ', ' year old ']
        return array.map( (x,i) => {
                return x = `<strong>${x}</strong>` + (info.shift() || '')
        }).join('')
    }
 
    function newElement(type, content){
        let element = document.createElement(type)
        if(typeof content === 'string'){
            element.innerHTML = content
        }
        if(typeof content === 'object'){
            element.appendChild(content)
        }
        return element
    }
 
}
