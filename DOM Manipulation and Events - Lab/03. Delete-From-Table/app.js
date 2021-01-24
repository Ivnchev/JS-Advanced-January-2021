function deleteByEmail() {
    let data = document.getElementsByTagName('tbody')[0].children
    let input = document.getElementsByName('email')[0]
    let result = document.getElementById('result')
    Array.from(data).map(x => {
        let currentChild = x.children[1]
        if(currentChild.textContent === input.value){
            currentChild.parentElement.remove()
            result.textContent = 'Deleted.'
        } else {
            result.textContent = 'Not found.'
        }
    })
    input.value = ''
}