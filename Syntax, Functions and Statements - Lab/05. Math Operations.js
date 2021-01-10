function foo(n1, n2, op) {
    let r = 0;
    let list = {
        '+': r = n1 + n2,
        '-': r = n1 - n2,
        '/': r = n1 / n2,
        '*': r = n1 * n2,
        '%': r = n1 % n2,
        '**': r = n1 ** n2,
    }
    console.log(list[op]);
}
foo(5 ,6 , '+')