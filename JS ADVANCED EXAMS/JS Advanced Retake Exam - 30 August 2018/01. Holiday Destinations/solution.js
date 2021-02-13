function addDestination() {
    const table = document.querySelector('#destinationsList')
    const destination = document.querySelectorAll('.inputData')
    const season = document.querySelector('#seasons')
    const summary = document.querySelectorAll('#summaryBox > input')
    console.log(summary);
    if(destination[0].value === '' || destination[1].value === ''){
        return
    }
    const seasons = {
        'summer': 'Summer',
        'autumn': 'Autumn',
        'winter': 'Winter',
        'spring': 'Spring',
    }
    const renderTr = renderHtml.bind(undefined, 'tr')
    const renderTd = renderHtml.bind(undefined, 'td')
    
    table.appendChild(
        renderTr('', 
            renderTd( [ destination[0].value, destination[1].value ].join(', ')),
            renderTd( seasons[season.value] )))
    
    const seasonsCountAcc = {
        'summer': () => summary[0].value++,
        'autumn': () => summary[1].value++,
        'winter': () => summary[2].value++,
        'spring': () => summary[3].value++,
    }
    seasonsCountAcc[season.value]()
    function renderHtml(type, content, ...children) {
        let element = document.createElement(type)
        element.innerHTML = content
        if(children !== undefined){
            Array.from(children).map( x => element.appendChild(x))
        }
        return element
    }
    Array.from(destination).forEach( x => x.value = '')
}