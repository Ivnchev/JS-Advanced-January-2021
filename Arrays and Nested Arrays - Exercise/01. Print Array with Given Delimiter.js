function foo(input) {
    let r = input.pop()
    console.log(input.join(r));
}
foo(['One', 'Two', 'Three', 'Four', 'Five', '-'])