function foo(data) {
    return data
        .sort( (a,b) => a.localeCompare(b))
        .reduce( (a,b, i) => a += `${i+1}.${b}\n`,'')
}
console.log(
foo(["John", "Bob", "Christina", "Ema"])
)