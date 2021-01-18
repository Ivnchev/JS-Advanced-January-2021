function foo(data) {
    let r = data
        .map( x => x.split(' <-> '))
        .reduce( (a,b) => {
            a.hasOwnProperty(b[0]) ? a[b[0]] += Number(b[1]) : a[b[0]] = Number(b[1])
            return a
        },{}) 
    Object.entries(r).forEach(x => console.log(`${x[0]} : ${x[1]}`) );   
}

foo(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'])