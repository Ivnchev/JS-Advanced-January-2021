function sum() {
    let td = Array.from(document.querySelectorAll('td'))
    let result = 0;
    for (let i = 0; i < td.length; i++) {
        if(!isNaN(Number(td[i].textContent))){
            result += Number(td[i].textContent)
        }
    }
    document.querySelector('#sum').textContent = result
}