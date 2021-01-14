function foo(input) {
    input = input.map(Number)
    let x = input.shift()
    let y = input.pop()
    let r = isNaN(x + y)? x + x : x + y
    console.log( r )
}
foo(['5'])