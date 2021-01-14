function foo(input) {
    return input.filter((x,i) => i % 2 == 1).map(x => x * 2).reverse().join(' ')
}
foo([10, 15, 20, 25])