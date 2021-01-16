function foo(input) {
    let r = Number(input.pop())
    for (let i = 0; i < r; i++) {
        input.unshift(input.pop())
    }
    console.log(input.join(' '));
}
foo(['1', '2', '3', '4', '2'])
foo(['Banana', 'Orange', 'Coconut', 'Apple', '15'])