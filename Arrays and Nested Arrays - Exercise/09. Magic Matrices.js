function foo(input) {
    let isMagic = true;
    input.forEach(x => {
        let z = x.reduce( (a, b) => a + b, 0)
        input.forEach((x,i) => {
            let y = 0;
            input.forEach( (a) => { y += a[i] });
            if(z !== y) { isMagic = false}
        });
    });
    return isMagic
}

console.log( foo([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])
)