function foo(...data) {
    return data.reduce( (a,b) => a + b.length, 0) + `\n${Math.floor(data.reduce( (a,b) => a + b.length, 0) / data.length)}`
}
console.log(
foo('chocolate', 'ice cream', 'cake')
)