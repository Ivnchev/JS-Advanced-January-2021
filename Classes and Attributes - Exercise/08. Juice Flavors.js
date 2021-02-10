function foo(data) {
    let r = new Map()
    data
        .map( x => x.split(' => ').map( x => isNaN(x) ? x : Number(x)))
        .reduce( (a,b) => {
            if(!a.has(b[0])){ 
                a.set(b[0], {qty: b[1], bottles: 0})
                if(a.get(b[0]).qty >= 1000){
                    let rest = a.get(b[0]).qty - Math.floor(a.get(b[0]).qty / 1000) * 1000
                    a.get(b[0]).bottles += Math.floor(a.get(b[0]).qty / 1000)
                    a.get(b[0]).qty = rest
                }
            if(a.get(b[0]).bottles !== 0) {r.set( b[0], a.get(b[0]).bottles )}
            } else {
                a.get(b[0]).qty += b[1]
                if(a.get(b[0]).qty >= 1000){
                    let rest = a.get(b[0]).qty - Math.floor(a.get(b[0]).qty / 1000) * 1000
                    a.get(b[0]).bottles += Math.floor(a.get(b[0]).qty / 1000)
                    a.get(b[0]).qty = rest
                }
                if(a.get(b[0]).bottles !== 0) {r.set( b[0], a.get(b[0]).bottles )}
            }
            return a
        },new Map)
    return Array.from(r).map( x => x.join(' => ')).join('\n')
}

console.log( foo(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
) )