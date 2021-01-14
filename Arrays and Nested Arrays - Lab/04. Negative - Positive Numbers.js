function foo(input) {
    let m = []
    input.forEach(x => { x < 0 ? m.unshift(x) : m.push(x)});
    return m.join('\n')
}
foo([7, -2, 8, 9])
foo([-1,-2,3,0])