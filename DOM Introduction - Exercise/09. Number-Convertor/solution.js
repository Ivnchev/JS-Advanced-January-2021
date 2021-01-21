function solve() {
    let btn = document.getElementsByTagName('button')[0]
    let input = document.getElementById('input')
    
    let result = document.getElementById('result')
    let toOption = document.getElementById('selectMenuTo')
 
    toOption.innerHTML = `<option selected value= 'binary'>Binary</option>`
    toOption.innerHTML += `<option selected value= 'hexadecimal'>Hexadecimal</option>`
    
    btn.addEventListener('click', () => {
        if(toOption.value === 'hexadecimal'){ result.value=(parseInt(input.value).toString(16)).toUpperCase() }
        else if(toOption.value === 'binary' ) { result.value = (parseInt(input.value)).toString(2) }
    })
}