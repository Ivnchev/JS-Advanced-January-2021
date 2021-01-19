function solve() {
    let text = document.getElementById('input').innerText
    let result = document.getElementById('output')
    let sentances = text.split('.')

    while(sentances.length > 0){
        let current = sentances.splice( 0, 3 ).join('.')
        if(current[current.length -1] !== '.'){ current += '.' }
        let paragraph = document.createElement('p')
        paragraph.innerText = current
        result.appendChild(paragraph)
    }
}