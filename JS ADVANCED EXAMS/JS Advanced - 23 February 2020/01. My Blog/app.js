function solve() {
    const input = document.querySelectorAll('#creator, #title, #category, #content')
    const [author, title, category, content] = input
    const btnCreate = document.querySelector("button[class='btn create']")
    const newsFeed = document.querySelector('main > section')
    const archiveSection = document.querySelector('.archive-section > ul')
    
    btnCreate.addEventListener('click', main)

    function main(e) {
        e.preventDefault()
        const article = createArticle(author, title, category, content)

        newsFeed.appendChild(article)

        Array.from(input).map(x => x.value = '')
    }
    const ctaAppend = (parent, ...childrens) => childrens.map(x => parent.appendChild(x))

    function createArticle(author, title, category, content) {
        const article = document.createElement('article')
        ctaAppend(article, newElement.call(undefined, 'h1', title), 
        newElement.call(undefined, 'p', category), 
        newElement.call(undefined, 'p', author), 
        newElement.call(undefined, 'p', content), 
        createBtns()
        )

        return article
    }

    function createBtns() {
        let div = document.createElement('div')
        div.className = 'buttons'
        ctaAppend(div, newElement('button', 'Delete', 'btn delete'), newElement('button', 'Archive', 'btn archive'))
        return div
    }

    function newElement(type, content, atribute) {
        let element = document.createElement(type)
        let elementsList = {
            'p': (element) => {
                let titleContent = content.parentElement.children[0].textContent
                if (titleContent === 'Content') {
                    element.textContent = content.value
                    return element
                }
                element.textContent = `${titleContent === 'Author' ? 'Creator' : titleContent}: `
                element.appendChild(newElement('strong', content))
                return element
            },
            'h1': (element) => {
                element.textContent = content.value
                return element
            },
            'strong': (element) => {
                element.textContent = content.value
                return element
            },
            'li': (element) => {
                element.textContent = content
                return element
            },
            'button': (element) => {
                element.textContent = content
                element.className = atribute
                element.addEventListener('click', ctaActions)
                return element
            }
        }
        return elementsList[type](element)
    }
    function ctaActions(e) {
        let element = e.target.parentElement.parentElement
        if(e.target.textContent === 'Archive'){
            ctaAppend(archiveSection, newElement('li', element.children[0].textContent ))
            sortArchive(archiveSection)
        }
        element.remove()
    }
    function sortArchive(archiveSection) {
        let sortElements = Array.from(archiveSection.children)
        while(archiveSection.firstChild) { archiveSection.removeChild(archiveSection.lastChild) }
        return sortElements
            .sort( (a,b) => a.textContent.localeCompare(b.textContent))
            .map( x => archiveSection.appendChild(x))
    }
}
