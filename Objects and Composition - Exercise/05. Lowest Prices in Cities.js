function foo(data) {
    return Array.from( data
        .map( x => x.split(' | ').map(x => isNaN(x) ? x : Number(x)))
        .reduce( (a,b) => {
            if(!a.has(b[1])){
                a.set(b[1], new Map())
            }
            a.get(b[1]).set(b[0], Number(b[2]))
            return a
        },new Map()))
        .map( ([x, rest]) => {
            let r = [...rest].reduce( (a,b) => {
                if(a[1] > b[1]) { return b }
                return a
            })
            return `${x} -> ${r[1]} (${r[0]})`
        }).join( '\n')
}
    console.log( foo(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']) )

// function lowest(input) {
//     let list = new Map()
//     for (const item of input) {
//         let [town, prod, price] = item.split(' | ')
//         if (!list.has(prod)) list.set(prod, new Map())
//         list.get(prod).set(town, Number(price))
//     }
 
//     for (const [car, data] of list) {
 
//         let lowestPrice = [...data].reduce((a, b) => {
//             if (a[1] > b[1]) return b
//             return a
//         })
//         console.log(`${car} -> ${lowestPrice[1]} (${lowestPrice[0]})`)
//     }
// }

// lowest(['Sample Town | Sample Product | 1000',
//     'Sample Town | Orange | 2',
//     'Sample Town | Peach | 1',
//     'Sofia | Orange | 3',
//     'Sofia | Peach | 2',
//     'New York | Sample Product | 1000.1',
//     'New York | Burger | 10'])