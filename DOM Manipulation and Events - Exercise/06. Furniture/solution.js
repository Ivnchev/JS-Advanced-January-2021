function solve() {
    let btn = document.querySelectorAll('button')
    let input = document.querySelectorAll('textarea')
    let attachedEl =document.querySelector('tbody')
    btn[0].addEventListener('click', () => {
        JSON.parse(input[0].value).forEach(obj => {
        let newItem = document.createElement('tr')
        newItem.innerHTML = `<td><img src=${obj.img}></td>\n
        <td><p>${obj.name}</p></td>\n
        <td><p>${obj.price}</p></td>\n
        <td><p>${obj.decFactor}</p></td>\n
        <td><input type="checkbox" disabled /></td>\n`     
        attachedEl.appendChild(newItem)
        });
        let checkBoxes = attachedEl.querySelectorAll('input')
        Array.from(checkBoxes).map( x => x.disabled = false)
        input[0].value = ''
    })
    
    btn[1].addEventListener('click', () => {
        let products = [];
        let decoration = 0;
        let totalPrice = 0;
        Array.from(attachedEl.querySelectorAll('input')).forEach( x=> {
            if(x.checked === true){
                let parent = x.parentElement.parentElement
                let [name, price, factor] = parent.querySelectorAll('td p')
                products.push(name.textContent)
                totalPrice += Number(price.textContent)
                decoration += Number(factor.textContent)
            }
        })
        decoration = decoration / products.length
        input[1].textContent = `Bought furniture: ${products.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decoration}`
    })
}

