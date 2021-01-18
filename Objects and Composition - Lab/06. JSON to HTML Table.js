function foo(input) {
    let data = JSON.parse(input)
    let html = '<table>\n'
    html += `   <tr>${Object.keys(data[0]).map(x => `<th>${replace(x)}</th>`).join('')}</tr>\n` 
    data.forEach( x => { html += `   <tr>${Object.values(x).map( x => `<td>${replace(x)}</td>`).join('')}</tr>\n` })
    html += '</table>'
    function replace(str) {
        return String(str)
            .replace(/&/g , '&amp;')
            .replace(/</g , "&lt;")
            .replace(/>/g , "&gt;")
            .replace(/"/g , "&quot;")
            .replace(/'/g , "&#39;")
    }
    return html
}

console.log(foo(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']));
