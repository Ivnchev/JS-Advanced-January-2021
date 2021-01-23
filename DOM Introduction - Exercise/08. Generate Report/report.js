function generateReport(colNames) {
    let headers = document.querySelectorAll('input')
    document.querySelector('#output').value = JSON.stringify( Array.from(document.querySelectorAll('tbody>tr'))
        .map( x => Array.from(x.children)
        .reduce( (a,b,i) => {
            if(headers[i].checked){ a[headers[i].parentElement.textContent.toLowerCase().trim()] = b.textContent }
            return a
        },{})))
}