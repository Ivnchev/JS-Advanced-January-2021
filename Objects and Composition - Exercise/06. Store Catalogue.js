function foo(data) {
    let r =  Object.entries(data
        .map( x=> x.split(' : ').map( x => isNaN(x) ? x : Number(x) ) )
        .reduce( (a,b) => { a[b[0]] = b[1]; return a },{}))
        .sort( (a,b) => a[0].localeCompare(b[0]) )
    let k = new Set([...r.map(x => x= x[0][0])])
    k.forEach(z => {
       console.log(z)
       r.forEach(x => { if(x[0][0] === z){ console.log(`  ${x[0]}: ${x[1]}`) } }) 
    });     
}
foo(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'])