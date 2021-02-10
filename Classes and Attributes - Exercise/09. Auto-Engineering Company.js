function foo(data) {
    return Array.from(
        data
        .map(x => x.split(' | ').map(x => isNaN(x) ? x : Number(x) ) )
        .reduce( (a,b) => {
            if(!a.has(b[0])){ 
                a.set(b[0], [ {model: b[1], pcs: b[2]} ] )
                return a
            }
            if( a.get(b[0]).find(o => o.model === b[1]) ){ 
                a.get(b[0]).find(o => o.model === b[1]).pcs += b[2] 
                return a
            }
            a.get(b[0]).push( {model: b[1], pcs: b[2]} ) 
            return a
        }, new Map) )
        .map( x => {
            return `${x[0]}\n${ x[1].map(x => { return `###${x.model} -> ${x.pcs}` }).join('\n') }`
        }).join('\n')
}
console.log( foo(['Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200']) )