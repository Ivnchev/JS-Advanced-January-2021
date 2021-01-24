function addItem() {
    let text = document.getElementById('newItemText')
    let newLi = document.createElement('li')
    newLi.innerHTML = text.value
    let curnt = document.getElementById('items')
    curnt.appendChild(newLi)
    text.value = ''
}