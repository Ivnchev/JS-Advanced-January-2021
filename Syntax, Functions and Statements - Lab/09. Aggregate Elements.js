function foo(x) {
    console.log(x.reduce((a,b) => a + b));
    console.log(x.map(x => 1 / x).reduce((a,b) => a + b));
    console.log(x.join(''));
}
foo([1,2,3])