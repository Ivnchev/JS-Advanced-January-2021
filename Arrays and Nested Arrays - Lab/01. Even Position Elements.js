function foo(input) {
    input = input.filter((x,i) => i % 2 == 0)
    return input.join(' ')
}
foo(['20', '30', '40'])