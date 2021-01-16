function foo(input) {
    let r = []
    for (let i = 0; i < input.length; i++) { input[i] === 'add' ? r.push(i+1) : r.pop() }
    r.length > 0 ? console.log(r.join('\n')) : console.log('Empty');
}

foo(['add', 'add', 'add', 'add'])
foo(['add', 'add', 'remove', 'add', 'add'])
foo(['remove', 'remove', 'remove'])