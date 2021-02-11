function solve() {
    let btn = document.querySelector('#add')
    let data = document.querySelectorAll('#task, #description, #date')
    let [task, description, dueDate] = data
    let sections = document.querySelectorAll('.orange, .yellow, .green')
    btn.addEventListener('click', generateTask)
    function generateTask(e) {
        e.preventDefault()
        if(task.value === '' || description.value === '' || dueDate === ''){
            return
        }
        let h3 = newElement.call(undefined, 'h3', task.value)
        let p = newElement.call(undefined, 'p', `Description: ${description.value}`)
        let dateInfo = newElement.call(undefined, 'p', `Due Date: ${dueDate.value}`)
        let divBtns = generateButtons.call(undefined, ['Start', 'Delete'], ['green', 'red'])
        dateInfo.textContent = dateInfo.textContent.replace(/[/]/g, '.')
        let article = newElement.call(undefined, 'article', [h3, p, dateInfo])
        article.appendChild(divBtns)
        sections[0].parentElement.parentElement.children[1].appendChild(article)
        Array.from(data).map( x => x.value = '')
        divBtns.addEventListener('click', moveToProgress)
    }

    function newElement(type, content) {
        let element = document.createElement(type)
        if(typeof content === 'string'){
            element.innerHTML = content
        }
        if(typeof content === 'object'){
            content.map( x => element.appendChild(x))
        }
        return element
    }

    function generateButtons(elements, classes) {
        let result
        if(Array.isArray(elements)){
        result = elements.map( x => {
            let element = document.createElement('button')
            element.innerHTML = x
            return element
        })
        }
        if(classes !== undefined){
        Array.from(result).map( (x,i) => {
                x.classList.add(classes[i])
            })
        }
        let div = document.createElement('div')
        div.classList.add('flex')
        Array.from(result).map( x => div.appendChild(x))
        return div
    }

    function moveToProgress(e) {
        if(e.target.textContent === 'Start') {
            let article = e.currentTarget.parentElement
            article.children[3].remove()
            let divButtons = generateButtons.call(undefined, ['Delete', 'Finish'], ['red', 'orange'])
            article.appendChild(divButtons)
            sections[1].parentElement.parentElement.children[1].appendChild(article)

            divButtons.addEventListener('click', moveToComplete)

        } else if(e.target.textContent === 'Delete') {
            e.currentTarget.parentElement.remove()
        }

    }

    function moveToComplete(e) {
        if(e.target.textContent === 'Delete') {
            e.currentTarget.parentElement.remove()
        } else if(e.target.textContent === 'Finish'){
            let article = e.currentTarget.parentElement
            article.children[3].remove()
            sections[2].parentElement.parentElement.children[1].appendChild(article)
        }
    }

}