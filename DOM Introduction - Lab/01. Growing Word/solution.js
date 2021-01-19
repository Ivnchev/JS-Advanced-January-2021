function growingWord() {
    let parentElement = document.getElementById('exercise')
    let heading = parentElement.lastElementChild
    let colorElements = document.getElementById('colors')

    if(!heading.style.fontSize){

        heading.style.fontSize = '2px'

    } else {
        heading.style.fontSize = parseInt(heading.style.fontSize)*2 + 'px'
    }
    let firstColor = colorElements.firstElementChild;
    let color = firstColor.innerHTML.toLowerCase()
    
    heading.style.color = color

    colorElements.appendChild(firstColor)

}