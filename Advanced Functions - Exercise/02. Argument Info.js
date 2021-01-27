function argInfo(...data) {
    Object.entries(
        data.reduce( (a,b) => {
        console.log(`${typeof b}: ${b}`);
        a[typeof b] = a[typeof b] ? a[typeof b] += 1 : a[typeof b] = 1
        return a
    },{}))
    .sort( (a,b) => b[1] - a[1])
    .map( x => console.log( `${x[0]} = ${x[1]}` ))
    .join('\n')
}
console.log( argInfo('cat', 42, function () { console.log('Hello world!'); }) )