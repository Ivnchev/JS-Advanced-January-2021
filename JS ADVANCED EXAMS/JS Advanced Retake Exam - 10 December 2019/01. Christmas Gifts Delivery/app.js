function solution() {
    let cardsUl = Array.from(document.querySelectorAll('.card ul'))
    let input = document.querySelector('body > div > section:nth-child(1) > div > input[type=text]')
    let button = document.querySelector('body > div > section:nth-child(1) > div > button')
    button.addEventListener('click', generateListOfGifts)
    cardsUl[0].addEventListener('click', ctaSendOrDiscard)

    function ctaSendOrDiscard(e) {
        let li = e.target.parentElement
        Array.from(li.children).map( x=> li.removeChild(x))
        if(e.target.id === 'sendButton'){ 
            cardsUl[1].appendChild(li)
        }
        if(e.target.id === 'discardButton'){
            cardsUl[2].appendChild(li)
        }
    }

    function generateListOfGifts(e) {
        e.preventDefault()
        let btnSend = generateElement.call(undefined, 'button', 'Send', 'sendButton')
        let discardBtn = generateElement.call(undefined, 'button', 'Discard', 'discardButton')
        let liElement = generateElement.call(undefined, 'li', input.value)
        liElement.appendChild(btnSend)
        liElement.appendChild(discardBtn)
        cardsUl[0].appendChild(liElement)
        sortElements()
        input.value = ''
    }

    function generateElement(type, content, attribute) {
        let element = document.createElement(type)
        if(element.tagName === 'BUTTON'){
            element.innerHTML = content
            element.setAttribute('id', attribute)
        }
        if(element.tagName === 'LI'){
            element.classList.add('gift')
            element.innerHTML = content
        }
        return element
    }
    function sortElements() {
        let allElements = Array.from(cardsUl[0].children).sort( (a,b) => a.innerText.localeCompare(b.innerText))
        Array.from(cardsUl[0].children).map(x => x.remove())
        allElements.map(x => cardsUl[0].appendChild(x))
    }
}