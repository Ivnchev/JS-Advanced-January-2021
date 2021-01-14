function foo(input) {
    let m = []
    for (let i = 0; i < input.length; i++) { m.push(...input[i])}
    console.log(Math.max(...m));
}

foo([[20, 50, 10],
    [8, 33, 145]])