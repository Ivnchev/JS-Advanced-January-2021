function foo(x, y) {
    while(y !== 0){
        let z = y
        y = x % y
        x = z
    }
    console.log(x);
}

foo(30, 16)