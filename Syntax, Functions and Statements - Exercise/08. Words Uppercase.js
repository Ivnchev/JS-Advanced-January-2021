function foo(input) {
    input = input.split(/[\W]/g).filter(x => x !== '').join(', ').toUpperCase()
    console.log(input);
}

foo('Hi, how are you?')
foo('hello')