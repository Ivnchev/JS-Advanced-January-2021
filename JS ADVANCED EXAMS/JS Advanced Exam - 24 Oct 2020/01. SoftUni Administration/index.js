function solve() {
    let [lectureinput, dateInput, moduleInput, btn] = document.querySelectorAll('input, input, select, button')
    let moduleContainer = document.querySelector('.modules')

    btn.addEventListener('click', (e) => {
        e.preventDefault()
        if(!lectureinput.value || !dateInput.value || moduleInput.value === 'Select module'){
            return
        }

        let found = Array.from(document.querySelectorAll('.module')).find( x => x.querySelector('h3').textContent === `${moduleInput.value.toUpperCase()}-MODULE`)
        
        if(found){
            secondAddItem(found)
            Array.from(found.querySelector('ul').children)
                .sort( (a,b) => new Date(a.textContent.split(' - ')[1])  - new Date(b.textContent.split(' - ')[1]))
                .map( x => found.querySelector('ul').appendChild(x))
        } else {
            addItems() 
        }

    })
    function secondAddItem(found) {
        let h4 = document.createElement('h4')
        let li = document.createElement('li')
        let delBtn = document.createElement('button')
        delBtn.classList.add('red')
        delBtn.textContent = 'Del'
        li.classList.add('flex')
        
        h4.textContent = `${lectureinput.value} - ${formatDate(dateInput.value).join(' - ')}`
        
        li.appendChild(h4)
        li.appendChild(delBtn)
        
        found.querySelector('ul').appendChild(li)
    }

    function addItems() {
        let div = document.createElement('div')
        div.classList.add('module')
        let h3 = document.createElement('h3')
        let h4 = document.createElement('h4')
        let li = document.createElement('li')
        let delBtn = document.createElement('button')
        let ul = document.createElement('ul')
        li.classList.add('flex')
        delBtn.classList.add('red')
        delBtn.textContent = 'Del'
        div.addEventListener( 'click', e => {

            if(e.target.tagName === 'BUTTON'){
                e.target.parentElement.remove()
                
                if(e.currentTarget.querySelector('ul').children.length === 0) {
                    e.currentTarget.remove()
                }
            }
        })

        h3.textContent = `${moduleInput.value.toUpperCase()}-MODULE`
        h4.textContent = `${lectureinput.value} - ${formatDate(dateInput.value).join(' - ')}`

        li.appendChild(h4)
        li.appendChild(delBtn)

        ul.appendChild(li)
        
        div.appendChild(h3)
        div.appendChild(ul)
        moduleContainer.appendChild(div)
    }

    function formatDate(date) {
        return [date.split("T")[0].replace(/-/g, "/"), date.split("T")[1]]
    }

}