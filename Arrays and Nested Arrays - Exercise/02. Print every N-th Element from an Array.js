function foo(input) {
    let r = Number(input.pop())
    for (let i = 0; i < input.length; i+= r) { console.log(input[i]); }
}

foo(['5', '20', '31', '4', '20', '2'])