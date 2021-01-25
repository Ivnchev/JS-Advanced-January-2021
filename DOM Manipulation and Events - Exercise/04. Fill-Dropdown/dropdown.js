function addItem() {
    let textElement = document.getElementById('newItemText')
    let valueElement = document.getElementById('newItemValue')
    let menuElement = document.getElementById('menu')
    if(textElement.value !== '' && valueElement.value !== ''){
        let optionElement = document.createElement('option')
        optionElement.setAttribute('value' , valueElement.value)
        optionElement.innerHTML = textElement.value
        menuElement.appendChild(optionElement)
        textElement.value = ''
        valueElement.value = ''
    }
}