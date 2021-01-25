function encodeAndDecodeMessages() {
    let btns = document.querySelectorAll('button')
    let message
    btns[0].addEventListener('click', () => {
        let sendEl = btns[0].parentElement.children[1]
        message = sendEl.value
        btns[1].parentElement.children[1].value = sendEl.value.split('').map( x => x.charCodeAt() + 1 ).map(x => String.fromCharCode(x)).join('')
        sendEl.value = ''
    })
    btns[1].addEventListener('click', () => {
        let received = btns[1].parentElement.children[1]
        received.value = message
    })
}