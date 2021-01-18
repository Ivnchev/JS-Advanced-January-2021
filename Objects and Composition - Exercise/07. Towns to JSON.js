function foo(data) {
    let keys = extractKeys(data[0])

    return JSON.stringify(
        data
        .slice(1)
        .map(extractKeys)
        .map( x => x.reduce( (a,b,i) => {
                a[keys[i]] = b
                return a
            },{}))
        )
    
    function extractKeys(str) {
    return str
        .split('|')
        .filter( x => x !== '' )
        .map( x => x.trim() )
        .map( x => Number(x) ? Math.round(Number(x) * 100) / 100 : ( x === '0.00' ? x = 0 : x ) )
    }
}

console.log(foo(['| Town | Latitude | Longitude |',
    '| Random Town | 0.00 | 0.00 |',
    '| Beijing | 39.913818 | 116.363625 |']));