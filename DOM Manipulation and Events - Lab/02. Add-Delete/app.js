function addItem() {
    let items = document.getElementById('items')
    let input = document.getElementById('newText')
    let newLi = document.createElement('li')
    newLi.innerHTML = `${input.value} <a href='#'>[Delete]</a>`
    items.appendChild(newLi)

    items.addEventListener('click', (e) => {
        let parent = e.target.parentElement
        parent.remove()
    })
    input.value = ''
}