function foo(input) {
    let m = []
    for (let index = 0; index < 2; index++) {
        m.push(input.splice(input.indexOf(Math.min(...input)),1))
    }
    console.log(m.join(' '));
}

foo([30, 15, 50, 5])