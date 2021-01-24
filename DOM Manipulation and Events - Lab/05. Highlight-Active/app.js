function focus() {
    let sections = document.getElementsByTagName('div')[0]
    sections.addEventListener('focus', (e) => {
        if(e.target.tagName === 'INPUT'){
            e.target.parentElement.classList.add('focused')
        }
    },true)
    sections.addEventListener('blur', (e) => {
        if(e.target.tagName === 'INPUT'){
            e.target.parentElement.classList.remove('focused')
        }
    },true)
}