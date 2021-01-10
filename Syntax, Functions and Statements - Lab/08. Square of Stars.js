function foo(x) {
    if(x === undefined){ x = 5 }
    for (let i = 0; i < x; i++) {
        console.log('* '.repeat(x));
    }
}
foo(4)