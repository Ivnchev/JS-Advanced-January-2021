function foo(n) {
    c = n.toString().split('').map(Number)
    console.log([...new Set(c)].length === 1);
    console.log(c.reduce((a,b) => a + b));
}

foo(2231232)